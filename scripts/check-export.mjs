import fs from "node:fs";
import path from "node:path";
const root = path.resolve("out");
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
const routes = ["", "story", "career", "moments", "gallery", "foundation"];
const errors = [];
for (const route of routes) {
  const file = path.join(root, route, "index.html");
  if (!fs.existsSync(file)) {
    errors.push("Missing " + file);
    continue;
  }
  const html = fs.readFileSync(file, "utf8");
  if (!html.includes("<h1") || !html.includes('name="description"'))
    errors.push(route + ": missing page metadata");
  if (!html.includes("self.__next_f"))
    errors.push(route + ": missing App Router payload");
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    let value = match[1].replaceAll("&amp;", "&");
    if (/^(https?:|data:|mailto:|#)/.test(value) || !value) continue;
    value = value.split(/[?#]/)[0];
    if (!value) continue;
    if (base && value.startsWith("/") && !value.startsWith(base + "/")) {
      errors.push(route + ": missing base path " + value);
      continue;
    }
    let target = value.startsWith("/")
      ? path.join(root, value.slice(base.length))
      : path.resolve(path.dirname(file), value);
    if (fs.existsSync(target) && fs.statSync(target).isDirectory())
      target = path.join(target, "index.html");
    if (!fs.existsSync(target)) errors.push(route + ": broken " + value);
  }
}
if (!fs.existsSync("out/.nojekyll")) errors.push("Missing .nojekyll");
if (!fs.existsSync("out/404.html")) errors.push("Missing static 404");
if (errors.length) {
  console.error([...new Set(errors)].join("\n"));
  process.exit(1);
}
console.log(
  `PASS: ${routes.length} App Router routes, local assets, basePath=${base || "(root)"}, 404 and .nojekyll.`,
);
