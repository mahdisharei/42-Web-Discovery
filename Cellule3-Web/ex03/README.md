# Exercise 02 – To do or not to do

## Objective
Create a simple TODO list manager using HTML, CSS, and JavaScript.

## Instructions
- Turn-in directory: `ex02/`
- Files to turn in: `index.html`, `todo.js`
- Allowed functions: HTML, CSS, JS only

### Requirements
1. The list is represented by a `<div id="ft_list">`.
   - Each TODO is a `<div>` inside this block.
   - New TODOs must be inserted at the **top** of the list.
2. A "New" button:
   - On click → open a `prompt()` to ask for the TODO text.
   - If not empty → add it to the list.
3. Removing TODOs:
   - On click of a TODO → open a `confirm()`.
   - If confirmed → permanently remove the TODO from the DOM.
4. Persistence:
   - TODOs must be saved in a **cookie**.
   - When the page reloads, the list must be restored.
   - If no cookie → list starts empty.

## Example workflow
1. User clicks **New** → enters "Buy milk" → "Buy milk" appears at the top.
2. User clicks on "Buy milk" → confirm → if yes, it disappears.
3. Refresh the page:
   - If cookie exists → saved TODOs reappear.
   - If cookie does not exist → list is empty.

## Notes
- Only vanilla JavaScript is allowed (no frameworks).
- Use DOM manipulation (`createElement`, `insertBefore`, etc.).
- Use `document.cookie` for saving and retrieving the list.