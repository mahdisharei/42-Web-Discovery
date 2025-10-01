# Exercise 04 – If jQuery, I'm going too

## Objective
Re-implement the previous exercises (3-1, 3-2, and 3-3) using the **jQuery** library.

## Instructions
- Turn-in directory: `ex04/`
- Files to turn in: same files as the respective exercises, but using jQuery.
- Allowed functions: HTML, CSS, jQuery (no vanilla JS).

### Requirements
1. Create three distinct folders inside `ex04/`:
   - `ex01bis/` → Balloon (jQuery version)
   - `ex02bis/` → It's over 9000 calculator (jQuery version)
   - `ex03bis/` → TODO list (jQuery version)
2. Each exercise must work exactly as its vanilla JS counterpart, but the implementation must use jQuery:
   - **Balloon (ex01bis):**
     - Clicking enlarges and cycles colors.
     - Leaving shrinks and cycles colors in reverse.
     - Resets at >420px.
   - **Calculator (ex02bis):**
     - Two number inputs + operator select + "Try me!" button.
     - Displays result in alert and logs in console.
     - Handles invalid input and division/modulo by zero.
     - Shows "Please, use me..." alert every 30s.
   - **TODO list (ex03bis):**
     - Add new TODOs with `prompt()`.
     - Insert new items at the top.
     - Click to confirm removal.
     - Save and restore list via cookies.
3. Only the **jQuery library** is allowed for DOM manipulation and events.

## Notes
- The behavior must be identical to the vanilla JS versions.  
- Code should be clear, properly structured, and use jQuery idioms (`$(...)`, `.on()`, `.prepend()`, `.css()`, etc.).