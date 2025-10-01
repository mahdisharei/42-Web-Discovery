# Exercise 02 – To do or not to do (jQuery Version)

## Objective
Build a minimal TODO list with add/remove and persistence using **HTML, CSS, and jQuery**.

## Files
- `index.html` – main page with the list container and a **New** button.
- `todo.js` – jQuery logic for creating/removing TODOs and saving them in a cookie.

## Requirements (implemented)
1. The list is a `<div id="ft_list">`.  
2. Clicking **New** opens a `prompt()`. Non-empty text is added as a new TODO.  
3. New TODOs are inserted at the **top** of the list.  
4. Clicking a TODO opens a `confirm()`. If confirmed, it is **removed from the DOM**.  
5. The list is **saved in a cookie** (`todo_list`) and **restored on reload**.

## How to Run
Just open `index.html` in a browser.  
Use the **New** button to add items. Click an item to remove it.