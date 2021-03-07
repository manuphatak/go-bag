import { Command, flags } from "@oclif/command";
import { execSync } from "child_process";
import * as path from "path";
import { interpolate } from "../utils/interpolate";

export default class Edit extends Command {
  static description = "edit your go-bag manifest";

  static flags = {
    help: flags.help({ char: "h" }),
    dir: flags.string({
      char: "d",
      description: "directory for go-bag",
      env: "GO_BAG_DIR",
      default: "~/.go-bag",
    }),
  };

  static args = [];

  async run() {
    const { flags } = this.parse(Edit);

    const dir = await interpolate(flags.dir);

    const manifest = path.join(dir, ".manifest");

    execSync(`\${EDITOR:-vi} ${manifest}`, { stdio: "inherit" });
  }
}
