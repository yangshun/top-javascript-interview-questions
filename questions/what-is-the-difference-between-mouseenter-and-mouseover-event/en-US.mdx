---
title: What is the difference between `mouseenter` and `mouseover` event in JavaScript and browsers?
---

## TL;DR

The main difference lies in the bubbling behavior of `mouseenter` and `mouseover` events. `mouseenter` does not bubble while `mouseover` bubbles.

`mouseenter` events do not bubble. The `mouseenter` event is triggered only when the mouse pointer enters the element itself, not its descendants. If a parent element has child elements, and the mouse pointer enters child elements, the `mouseenter` event will not be triggered on the parent element again, it's only triggered once upon entry of parent element without regard for its contents. If both parent and child have `mouseenter` listeners attached and the mouse pointer moves from the parent element to the child element, `mouseenter` will only fire for the child.

`mouseover` events bubble up the DOM tree. The `mouseover` event is triggered when the mouse pointer enters the element or one of its descendants. If a parent element has child elements, and the mouse pointer enters child elements, the `mouseover` event will be triggered on the parent element again as well. If the parent element has multiple child elements, this can result in multiple event callbacks fired. If there are child elements, and the mouse pointer moves from the parent element to the child element, `mouseover` will fire for both the parent and the child.

| Property | `mouseenter` | `mouseover` |
| --- | --- | --- |
| Bubbling | No | Yes |
| Trigger | Only when entering itself | When entering itself and when entering descendants |

---

### `mouseenter` event:

- **Does not bubble**: The `mouseenter` event does not bubble. It is only triggered when the mouse pointer enters the element to which the event listener is attached, not when it enters any child elements.
- **Triggered once**: The `mouseenter` event is triggered only once when the mouse pointer enters the element, making it more predictable and easier to manage in certain scenarios.

A use case for `mouseenter` is when you want to detect the mouse entering an element without worrying about child elements triggering the event multiple times.

### `mouseover` Event:

- **Bubbles up the DOM**: The `mouseover` event bubbles up through the DOM. This means that if you have an event listener on a parent element, it will also trigger when the mouse pointer moves over any child elements.
- **Triggered multiple times**: The `mouseover` event is triggered every time the mouse pointer moves over an element or any of its child elements. This can lead to multiple triggers if you have nested elements.

A use case for `mouseover` is when you want to detect when the mouse enters an element or any of its children and are okay with the events triggering multiple times.

### Example

Here's an example demonstrating the difference between `mouseover` and `mouseenter` events:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mouse Events Example</title>
    <style>
      .parent {
        width: 200px;
        height: 200px;
        background-color: lightblue;
        padding: 20px;
      }
      .child {
        width: 100px;
        height: 100px;
        background-color: lightcoral;
      }
    </style>
  </head>
  <body>
    <div class="parent">
      Parent Element
      <div class="child">Child Element</div>
    </div>

    <script>
      const parent = document.querySelector('.parent');
      const child = document.querySelector('.child');

      // Mouseover event on parent.
      parent.addEventListener('mouseover', () => {
        console.log('Mouseover on parent');
      });

      // Mouseenter event on parent.
      parent.addEventListener('mouseenter', () => {
        console.log('Mouseenter on parent');
      });

      // Mouseover event on child.
      child.addEventListener('mouseover', () => {
        console.log('Mouseover on child');
      });

      // Mouseenter event on child.
      child.addEventListener('mouseenter', () => {
        console.log('Mouseenter on child');
      });
    </script>
  </body>
</html>
```

**Expected behavior**

- When the mouse enters the parent element:
  - The `mouseover` event on the parent will trigger.
  - The `mouseenter` event on the parent will trigger.
- When the mouse enters the child element:
  - The `mouseover` event on the parent will trigger again because `mouseover` bubbles up from the child.
  - The `mouseover` event on the child will trigger.
  - The `mouseenter` event on the child will trigger.
  - The `mouseenter` event on the parent will **not** trigger again because `mouseenter` does not bubble.

## Further reading

- [Element: mouseenter event - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event)
- [Element: mouseover event - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event)
