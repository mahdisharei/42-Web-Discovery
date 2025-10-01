# Exercise 02 – midLS

## Objective
Write a command that lists all files and directories in the current directory, **excluding hidden files** (those starting with `.`), and outputs them separated by commas.

## Instructions
- Turn-in directory: `ex02/`
- File to turn in: `midLS`
- Allowed functions: none

The file `midLS` must contain the shell command (not a script, just the one-liner) that achieves this.

## Example
```bash
$ ls
a  b  c  d

$ cat midLS
ls -m

$ sh midLS
a, b, c, d