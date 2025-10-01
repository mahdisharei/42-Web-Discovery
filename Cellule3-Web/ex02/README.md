# Exercise 02 – It's over 9000

## Objective
Build a basic calculator using HTML, CSS, and JavaScript.

## Instructions
- Turn-in directory: `ex02/`
- File to turn in: `calc.html`
- Allowed functions: HTML, CSS, JS only (no external libraries).

### Requirements
1. A calculator UI with:
   - Left operand (input, positive integer).
   - Operator (select: +, -, *, /, %).
   - Right operand (input, positive integer).
   - Submit button with value "Try me!".
2. On click:
   - Perform the calculation.
   - Display result in an alert.
   - Log result in the console.
3. Input validation:
   - Non-positive integers → `Error :(`
   - Division or modulo by zero → `It’s over 9000!`
4. Every 30 seconds:
   - Alert popup: `Please, use me...`.

## Example
- Input: `4`, `+`, `5` → Alert shows `9` and console logs `9`.
- Input: `8`, `/`, `0` → Alert shows `It’s over 9000!`.
- Input: `-3`, `*`, `2` → Alert shows `Error :(`.

## Notes
- Must work directly by opening `calc.html` in the browser.
- No external libraries allowed.