---
title: Explain the concept of `this` binding in event handlers
---

## TL;DR

In JavaScript, the `this` keyword refers to the object that is currently executing the code. In event handlers, `this` typically refers to the element that triggered the event. However, the value of `this` can change depending on how the event handler is defined and called. To ensure `this` refers to the desired object, you can use methods like `bind()`, arrow functions, or assign the context explicitly.

---

## The concept of `this` binding in event handlers

### Understanding `this` in JavaScript

In JavaScript, the `this` keyword is a reference to the object that is currently executing the code. The value of `this` is determined by how a function is called, not where it is defined. This can lead to different values of `this` in different contexts.

### `this` in event handlers

In the context of event handlers, `this` usually refers to the DOM element that triggered the event. For example:

```js live
// Create a button element and append it to the DOM
const button = document.createElement('button');
button.id = 'myButton';
document.body.appendChild(button);

document.getElementById('myButton').addEventListener('click', function () {
  console.log(this); // `this` refers to the 'myButton' element
});

button.click(); // Logs the button element
```

In this example, `this` inside the event handler refers to the button element that was clicked.

### Changing the value of `this`

There are several ways to change the value of `this` in event handlers:

#### Using `bind()`

The `bind()` method creates a new function that, when called, has its `this` keyword set to the provided value:

```js live
// Create a button element and append it to the DOM
const button = document.createElement('button');
button.id = 'myButton';
document.body.appendChild(button);

function handleClick() {
  console.log(this); // Logs the object passed to bind()
}

const obj = { name: 'MyObject' };
document
  .getElementById('myButton')
  .addEventListener('click', handleClick.bind(obj));

button.click(); // Logs obj because handleClick was bound to obj using bind()
```

In this example, `this` inside `handleClick` refers to `obj`.

#### Using arrow functions

Arrow functions do not have their own `this` context; they inherit `this` from the surrounding lexical context:

```js live
// Create a button element and append it to the DOM
const button = document.createElement('button');
button.id = 'myButton';
document.body.appendChild(button);

const obj = {
  name: 'MyObject',
  handleClick: function () {
    document.getElementById('myButton').addEventListener('click', () => {
      console.log(this); // Logs obj
    });
  },
};

obj.handleClick();
button.click(); // This will log obj
```

In this example, `this` inside the arrow function refers to `obj`.

#### Assigning the context explicitly

You can also assign the context explicitly by using a variable:

```js live
// Create a button element and append it to the DOM
const button = document.createElement('button');
button.id = 'myButton';
document.body.appendChild(button);

const obj = {
  name: 'MyObject',
  handleClick: function () {
    const self = this;
    document.getElementById('myButton').addEventListener('click', function () {
      console.log(self); // Logs obj
    });
  },
};

obj.handleClick();
button.click(); // This will log obj
```

In this example, `self` is used to capture the value of `this` from the outer function.

## Further reading

- [MDN Web Docs: `this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [MDN Web Docs: `bind()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
- [MDN Web Docs: Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
