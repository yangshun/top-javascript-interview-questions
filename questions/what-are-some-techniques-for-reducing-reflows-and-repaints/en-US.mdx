---
title: What are some techniques for reducing reflows and repaints?
---

## TL;DR

To reduce reflows and repaints, you can minimize DOM manipulations, batch DOM changes, use CSS classes for style changes, avoid complex CSS selectors, and use `requestAnimationFrame` for animations. Additionally, consider using `will-change` for elements that will change frequently and avoid layout thrashing by reading and writing to the DOM separately.

---

## Techniques for reducing reflows and repaints

### Minimize DOM manipulations

Frequent changes to the DOM can cause multiple reflows and repaints. To minimize this:

- Use `documentFragment` to batch DOM updates
- Clone nodes, make changes, and then replace the original node

### Batch DOM changes

Grouping multiple DOM changes together can reduce the number of reflows and repaints:

- Use `innerHTML` to update multiple elements at once
- Use `requestAnimationFrame` to batch updates

### Use CSS classes for style changes

Instead of changing styles directly via JavaScript, use CSS classes:

```js live
const element = document.createElement('h1');
element.classList.add('text-center');

console.log(element); // Notice that the class has been added.
```

### Avoid complex CSS selectors

Complex selectors can slow down the rendering process:

- Use simple and direct selectors
- Avoid deep nesting

### Use `requestAnimationFrame` for animations

Using `requestAnimationFrame` ensures that animations are synchronized with the browser's repaint cycle:

```js
function animate() {
  // Animation logic
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
```

### Use `will-change` for frequently changing elements

The `will-change` property can hint to the browser about which elements will change, allowing it to optimize rendering:

```css
.element {
  will-change: transform;
}
```

### Avoid layout thrashing

Reading and writing to the DOM separately can prevent layout thrashing:

```js live
// Mock div element
const element = document.createElement('div');

const height = element.offsetHeight; // Read
element.style.height = `${height + 10}px`; // Write

console.log(element);
```

## Further reading

- [MDN Web Docs: Reflow](https://developer.mozilla.org/en-US/docs/Glossary/Reflow)
- [Google Developers: Avoid large, complex layouts and layout thrashing](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing)
- [CSS-Tricks: Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/)
