import { exec } from "../commands/setup";

export async function interpolate(input: string) {
  const { stdout } = await exec(`echo ${input}`);

  return stdout.trim();
}
