import { expect } from "@oclif/test";
import fs from "fs-extra";
import path from "path";
import { withTestDir } from "../utils/with-test-dir";

describe("setup", () => {
  withTestDir()
    .stdout()
    .command(["setup"])
    .it("creates a directory for your go-bag", async (ctx) => {
      expect(await fs.readdir(ctx.testDir)).to.deep.equal([".go-bag"]);
    });

  withTestDir()
    .stdout()
    .command(["setup"])
    .it("creates a go-bag manifest", async (ctx) => {
      expect(
        await fs.readdir(path.join(ctx.testDir, ".go-bag"))
      ).to.deep.equal([".manifest"]);
    });
});
