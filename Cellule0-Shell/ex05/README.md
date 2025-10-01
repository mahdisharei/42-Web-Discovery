# Exercise 05 – build

## Objective
Write a shell script `build.sh` that creates directories whose names are given as arguments, each prefixed with `ex`.

## Instructions
- Turn-in directory: `ex05/`
- File to turn in: `build.sh`
- Allowed functions: none

The script should:
- Print **"No arguments supplied"** if no arguments are provided.
- Create directories named `exXX` for each argument (e.g. `00` → `ex00`).

## Examples
```bash
$ ./build.sh
No arguments supplied

$ ./build.sh 00
# creates folder ex00

$ ./build.sh 01 02 03 04
# creates folders ex01, ex02, ex03, ex04