import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { readFileSync } from "node:fs";
const root = path.resolve("out");
let builtBase = "";
try {
  builtBase = JSON.parse(
    readFileSync(path.join(root, "build-config.json"), "utf8"),
  ).basePath;
} catch {}
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? builtBase;
const portArg = process.argv.indexOf("--port");
const port = Number(
  process.env.PORT || (portArg >= 0 ? process.argv[portArg + 1] : 8080),
);
const types = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".txt": "text/plain",
  ".xml": "application/xml",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
};
const server = http.createServer(async (req, res) => {
  try {
    let url = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    if (base && url === "/") {
      res.writeHead(302, { Location: base + "/" });
      res.end();
      return;
    }
    if (base && url !== base && !url.startsWith(base + "/")) {
      res.writeHead(404);
      res.end("Outside base path");
      return;
    }
    url = base ? url.slice(base.length) : url;
    let file = path.resolve(root, "." + (url || "/"));
    if (file !== root && !file.startsWith(root + path.sep)) {
      res.writeHead(403);
      res.end();
      return;
    }
    const info = await stat(file);
    if (info.isDirectory()) file = path.join(file, "index.html");
    const data = await readFile(file);
    res.writeHead(200, {
      "Content-Type": types[path.extname(file)] || "application/octet-stream",
      "Cache-Control": "no-cache",
    });
    res.end(data);
  } catch {
    try {
      const html = await readFile(path.join(root, "404.html"));
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(html);
    } catch {
      res.writeHead(404);
      res.end("Build first: npm run build");
    }
  }
});
server.listen(port, "0.0.0.0", () =>
  console.log(`Static preview: http://localhost:${port}${base}/`),
);
