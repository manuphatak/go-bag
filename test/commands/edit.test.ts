import { expect } from "@oclif/test";
import { withTestDir } from "../utils/with-test-dir";

describe("edit", () => {
  withTestDir()
    .stderr()
    .stdout()
    .env({ EDITOR: ":" }) // bash noop
    .command(["edit"])
    .it("is a noop", (ctx) => {
      expect(ctx.stderr).to.equal("");
    });
});
