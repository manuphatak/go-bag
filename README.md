# backpack-cli

A quick CLI tool to help hotswap your machine by backing up your local setup.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/backpack-cli.svg)](https://npmjs.org/package/backpack-cli)
[![build-test-release](https://github.com/manuphatak/backpack-cli/actions/workflows/build-test-release.yml/badge.svg)](https://github.com/manuphatak/backpack-cli/actions/workflows/build-test-release.yml)
[![codecov](https://codecov.io/gh/manuphatak/backpack-cli/branch/main/graph/badge.svg?token=A9695I83UH)](https://codecov.io/gh/manuphatak/backpack-cli)
[![Downloads/week](https://img.shields.io/npm/dw/backpack-cli.svg)](https://npmjs.org/package/backpack-cli)
[![License](https://img.shields.io/npm/l/backpack-cli.svg)](https://github.com/manuphatak/backpack-cli/blob/main/package.json)

<!-- toc -->

- [backpack-cli](#backpack-cli)
- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g backpack-cli
$ backpack COMMAND
running command...
$ backpack (-v|--version|version)
backpack-cli/0.0.1 linux-x64 node-v14.15.5
$ backpack --help [COMMAND]
USAGE
  $ backpack COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`backpack hello [FILE]`](#backpack-hello-file)
- [`backpack help [COMMAND]`](#backpack-help-command)

## `backpack hello [FILE]`

describe the command here

```
USAGE
  $ backpack hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ backpack hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/manuphatak/backpack-cli/blob/v0.0.1/src/commands/hello.ts)_

## `backpack help [COMMAND]`

display help for backpack

```
USAGE
  $ backpack help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

<!-- commandsstop -->
