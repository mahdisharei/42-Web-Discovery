# Exercise 04 – argv

## Objective
Write a shell script `argv.sh` that displays the arguments passed to it (maximum 3 arguments).

## Instructions
- Turn-in directory: `ex04/`
- File to turn in: `argv.sh`
- Allowed functions: none

The program should:
- Print **"No arguments supplied"** if no arguments are given.
- Print each argument on a new line (up to 3 arguments).
- If more than 3 arguments are passed, print only the first 3.

## Examples
```bash
$ ./argv.sh
No arguments supplied

$ ./argv.sh 42
42

$ ./argv.sh 2 40 42
2
40
42

$ ./argv.sh Hello World ! 42
Hello
World
!