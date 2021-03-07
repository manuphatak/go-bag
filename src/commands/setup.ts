import { Command, flags } from "@oclif/command";
import * as childProcess from "child_process";
import * as fs from "fs-extra";
import * as path from "path";
import * as util from "util";
import { interpolate } from "../utils/interpolate";

export const exec = util.promisify(childProcess.exec);

export default class Setup extends Command {
  static description = "setup your go-bag";

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
    const { flags } = this.parse(Setup);

    const dir = await interpolate(flags.dir);

    const manifest = path.join(dir, ".manifest");
    await fs.ensureFile(manifest);

    this.log(`created ${manifest}`);
  }
}
