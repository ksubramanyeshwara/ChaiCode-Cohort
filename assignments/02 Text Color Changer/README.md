Challenge 2: Change Text Color 🦎

- Create a webpage with a heading that says "Change My Color!"
- Add five buttons: Red, Green, Blue, Purple (or any four colors of your choice) and Reset.
- When a color button is clicked, the heading’s text color should change to the corresponding color.
- Clicking the Reset button should restore the text color to black/white

## Learnings

- Selecting perticular elements using `getElementById()` and `getElementsByClassName()`
- Converting HTML Collection into Array using `Array.from()`
- Looping the the convrted array using `forEach()`
- Checking the the click event is happened on the button not on any other element using `event.target.tagName === "BUTTON"`
- Getting the id of the clicked button using `event.target.id`
- Updating the text color based on the button ID using `switch()`
- Using `style.color` to change the text color

### Properties you can access using event.target:

```javascript
event.target.textContent; // Gets the text inside the button (e.g., "Red", "Green")
event.target.tagName; // Gets the tag name (e.g., "BUTTON")
event.target.id; // Gets the element's ID (e.g., "redButton")
event.target.className; // Gets the element's classes as a string
event.target.classList; // Gets the element's classes as a DOMTokenList (more methods available)
event.target.style; // Access CSS styles directly
event.target.dataset; // Access custom data-* attributes
event.target.disabled; // Gets/sets the disabled state of the button
event.target.value; // Gets the value attribute
event.target.attributes; // Gets all attributes of the element
event.target.parentElement; // Gets the parent element
event.target.children; // Gets child elements
```
