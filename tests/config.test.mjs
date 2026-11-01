import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
function config(base) {
  return JSON.parse(
    execFileSync(
      process.execPath,
      [
        "--input-type=module",
        "-e",
        "import c from './next.config.mjs';console.log(JSON.stringify(c))",
      ],
      {
        env: { ...process.env, NEXT_PUBLIC_BASE_PATH: base },
        encoding: "utf8",
        stdio: ["ignore", "pipe", "pipe"],
      },
    ),
  );
}
test("root hosting exports routable directory indexes", () => {
  const c = config("");
  assert.equal(c.output, "export");
  assert.equal(c.trailingSlash, true);
  assert.equal(c.basePath, "");
});
test("repository path is passed intact to Next", () =>
  assert.equal(config("/messi-biography").basePath, "/messi-biography"));
test("bad repository path fails before build", () =>
  assert.throws(() => config("/messi/")));
