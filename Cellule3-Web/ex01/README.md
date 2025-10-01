# Exercise 01 – Explode this balloon

## Objective
Create an interactive balloon using HTML, CSS, and JavaScript.

## Instructions
- Turn-in directory: `ex01/`
- File to turn in: `balloon.html`
- Allowed functions: HTML, CSS, JS (no external libraries).

## Requirements
1. A div with size 200px × 200px, red background, and rounded (perfect circle).
2. On each click:
   - Increase size by +10px.
   - Change color: red → green → blue → red.
   - If size > 420px, reset to 200px red (balloon explodes).
3. On mouseleave:
   - Decrease size by -5px (minimum 200px).
   - Change color in reverse order: red ← green ← blue ← red.

## Example behavior
- Click once → size 210px, color green.  
- Click again → size 220px, color blue.  
- Continue until >420px → balloon explodes → back to 200px red.  
- Mouse leaves → size shrinks by 5px, color cycle goes backward.  

## Notes
- Only HTML, CSS, and JS are allowed.  
- No external libraries (e.g., jQuery) permitted.  