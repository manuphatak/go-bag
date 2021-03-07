import { test } from "@oclif/test";
import fs from "fs-extra";
import path from "path";
import os from "os";

export function withTestDir() {
  return test
    .add("testDir", async () => fs.mkdtemp(path.join(os.tmpdir(), "go-bag-")))
    .env({}, { clear: true })
    .do((context) => {
      process.env.GO_BAG_DIR = path.join(context.testDir, ".go-bag");
    })
    .finally(async (ctx) => {
      await fs.remove(ctx.testDir);
    });
}
