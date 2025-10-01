# Exercise – Explode this Balloon (jQuery Version)

## Objective
Recreate the interactive balloon using **HTML, CSS, and jQuery**.

## Instructions
- Turn-in directory: `ex01/`
- File to turn in: `balloon.html`
- Allowed functions: HTML, CSS, jQuery (no other libraries).

## Requirements
1. A circular balloon (`div`) starting at **200×200px**, red color.
2. On each **click**:
   - Increase size by +10px.
   - Cycle color: red → green → blue → red.
   - If size > 420px, reset to 200px red (balloon explodes).
3. On **mouseleave**:
   - Decrease size by -5px (min 200px).
   - Cycle colors in reverse order.

## Example Behavior
- Click → 210px green.  
- Click → 220px blue.  
- After 420px → back to 200px red.  
- Mouse leaves → shrink by 5px, reverse color cycle.

## How to Run
1. Open `balloon.html` in your browser.  
2. Click the balloon to make it grow and change color.  
3. Move the mouse out to shrink it.  