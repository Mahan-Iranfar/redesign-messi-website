import { writeFileSync, existsSync } from "node:fs";
if (!existsSync("out/index.html"))
  throw new Error("Next.js static export not found");
writeFileSync("out/.nojekyll", "");
writeFileSync(
  "out/build-config.json",
  JSON.stringify({ basePath: process.env.NEXT_PUBLIC_BASE_PATH || "" }),
);
console.log("Static export prepared: out/ (including .nojekyll).");
