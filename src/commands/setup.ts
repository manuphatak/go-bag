import { Command, flags } from "@oclif/command";
import * as childProcess from "child_process";
import * as fs from "fs-extra";
import * as path from "path";
import * as util from "util";

const exec = util.promisify(childProcess.exec);

export default class Setup extends Command {
  static description = "describe the command here";

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

async function interpolate(input: string) {
  const { stdout } = await exec(`echo ${input}`);

  return stdout.trim();
}
