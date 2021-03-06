import { expect, test } from "@oclif/test";
import fs from "fs-extra";
import path from "path";
import os from "os";

describe("setup", () => {
  // let testDir: string;

  // beforeEach(async () => {
  //   testDir = await fs.mkdtemp(path.join(os.tmpdir(), "foo-"));
  // });
  const withTestDir = test
    .add("testDir", async () => fs.mkdtemp(path.join(os.tmpdir(), "go-bag-")))
    .env({}, { clear: true })
    .do((context) => {
      process.env.GO_BAG_DIR = path.join(context.testDir, ".go-bag");
    })
    .finally(async (ctx) => {
      await fs.remove(ctx.testDir);
    });
  withTestDir
    .stdout()
    .command(["setup"])
    .it("creates a directory for your go-bag", async (ctx) => {
      expect(await fs.readdir(ctx.testDir)).to.deep.equal([".go-bag"]);
    });

  withTestDir
    .stdout()
    .command(["setup"])
    .it("creates a go-bag manifest", async (ctx) => {
      expect(
        await fs.readdir(path.join(ctx.testDir, ".go-bag"))
      ).to.deep.equal([".manifest"]);
    });
});
