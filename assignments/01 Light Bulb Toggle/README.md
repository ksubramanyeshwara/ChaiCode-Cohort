# Challenge 1: Light Bulb Toggle💡

- Create a webpage featuring a light bulb image or representation.
- Implement a button that toggles the light bulb between on and off states.
- When the bulb is on, it should appear in yellow or gold (or any other suitable color) with a glow effect.
- When the bulb is off, it should appear gray with no glow.
- The button text should dynamically update based on the bulb’s state (e.g., "Turn On" / "Turn Off").
- Apply a dark mode effect to the page when the bulb is off.

## Learnings

- Selecting perticular elements
- Adding addEventListener to the element
- Adding a css class and adding toggle() to an element
- How CSS chooses html elements

```HTML
<!-- .bulb .on (with space) selects: -->
<div class="bulb">
    <div class="on">...</div>  <!-- This element is selected -->
</div>

<!--.bulb.on (without space) selects: -->
<div class="bulb on"></div>  <!-- This element is selected -->
```

