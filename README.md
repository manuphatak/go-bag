# go-bag

A CLI tool to take your computer setup on the road.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/go-bag.svg)](https://npmjs.org/package/go-bag)
[![build-test-release](https://github.com/manuphatak/go-bag/actions/workflows/build-test-release.yml/badge.svg)](https://github.com/manuphatak/go-bag/actions/workflows/build-test-release.yml)
[![codecov](https://codecov.io/gh/manuphatak/go-bag/branch/main/graph/badge.svg?token=A9695I83UH)](https://codecov.io/gh/manuphatak/go-bag)
[![Downloads/week](https://img.shields.io/npm/dw/go-bag.svg)](https://npmjs.org/package/go-bag)
[![License](https://img.shields.io/npm/l/go-bag.svg)](https://github.com/manuphatak/go-bag/blob/main/package.json)

<!-- toc -->

- [go-bag](#go-bag)
- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g go-bag
$ go-bag COMMAND
running command...
$ go-bag (-v|--version|version)
go-bag/0.0.7 darwin-x64 node-v14.16.0
$ go-bag --help [COMMAND]
USAGE
  $ go-bag COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`go-bag autocomplete [SHELL]`](#go-bag-autocomplete-shell)
- [`go-bag edit [FILE]`](#go-bag-edit-file)
- [`go-bag help [COMMAND]`](#go-bag-help-command)
- [`go-bag setup`](#go-bag-setup)

## `go-bag autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ go-bag autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ go-bag autocomplete
  $ go-bag autocomplete bash
  $ go-bag autocomplete zsh
  $ go-bag autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.3.0/src/commands/autocomplete/index.ts)_

## `go-bag edit [FILE]`

describe the command here

```
USAGE
  $ go-bag edit [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/edit.ts](https://github.com/manuphatak/go-bag/blob/v0.0.7/src/commands/edit.ts)_

## `go-bag help [COMMAND]`

display help for go-bag

```
USAGE
  $ go-bag help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `go-bag setup`

describe the command here

```
USAGE
  $ go-bag setup

OPTIONS
  -d, --dir=dir  [default: ~/.go-bag] directory for go-bag
  -h, --help     show CLI help
```

_See code: [src/commands/setup.ts](https://github.com/manuphatak/go-bag/blob/v0.0.7/src/commands/setup.ts)_

<!-- commandsstop -->
