# Exercise – Random Background Color (jQuery Version)

## Objective
Recreate the random background color changer using **jQuery**.  
Each time the user clicks the button, the background color of the page changes to a new random HEX color.

## Files
- `index.html` – main HTML file, includes the button and loads jQuery from CDN.
- `background.css` – styles for the button.
- `background.js` – JavaScript with jQuery to handle the click event and color generation.

## Implementation
1. jQuery is loaded from CDN (`https://code.jquery.com/jquery-3.6.0.min.js`).
2. When the page is ready, the click event is bound to the button with `$("#btn").on("click", ...)`.
3. On each click:
   - The function `generateColor()` creates a random HEX color.
   - The background of the `<body>` is updated with `$("body").css("background-color", color)`.

## Example
- First click → background becomes `#A1B2C3`
- Second click → background becomes `#34FF9E`
- Each click generates a new random color.

## How to Run
1. Open `index.html` in your browser.  
2. Click the **Click me** button.  
3. Watch the background color change randomly.

## Notes
- Uses **HTML, CSS, and jQuery** (no vanilla JS needed here).  
- Random HEX color is generated from characters `0–9` and `A–F`.  