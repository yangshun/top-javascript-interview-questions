---
title: What are some common performance bottlenecks in JavaScript applications?
---

## TL;DR

Common performance bottlenecks in JavaScript applications include inefficient DOM manipulation, excessive use of global variables, blocking the main thread with heavy computations, memory leaks, and improper use of asynchronous operations. To mitigate these issues, you can use techniques like debouncing and throttling, optimizing DOM updates, and leveraging web workers for heavy computations.

---

## Inefficient DOM manipulation

### Frequent DOM updates

Frequent DOM updates can be costly because the browser has to re-render the page each time the DOM changes. Batch DOM updates together to minimize reflows and repaints.

```js
// Inefficient
for (let i = 0; i < 1000; i++) {
  const div = document.createElement('div');
  div.textContent = i;
  document.body.appendChild(div);
}

// Efficient
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  const div = document.createElement('div');
  div.textContent = i;
  fragment.appendChild(div);
}
document.body.appendChild(fragment);
```

### Layout thrashing

Layout thrashing occurs when you read and write to the DOM repeatedly, causing multiple reflows and repaints. Minimize layout thrashing by batching reads and writes separately.

```js
// Inefficient
boxes.forEach((box) => {
  const height = box.offsetHeight; // Read
  box.style.height = `${height + 10}px`; // Write
});

// Efficient
// Batch read
const heights = [];
boxes.forEach((box) => {
  heights.push(box.offsetHeight);
});

// Batch write
boxes.forEach((box, i) => {
  box.style.height = `${heights[i] + 10}px`;
});
```

## Excessive use of global variables

Global variables can lead to memory leaks and make the code harder to maintain. Use local variables and closures to limit the scope of variables.

```js
// Inefficient
var globalVar = 'I am global';

// Efficient
function myFunction() {
  let localVar = 'I am local';
}
```

## Blocking the main thread

### Heavy computations

Heavy computations can block the main thread, making the UI unresponsive. Use web workers to offload heavy computations to a background thread.

```js
// Main thread
const worker = new Worker('worker.js');
worker.postMessage('start');

// worker.js
self.onmessage = function (e) {
  if (e.data === 'start') {
    // Perform heavy computation
    self.postMessage('done');
  }
};
```

### Synchronous operations

Avoid synchronous operations like `alert`, `prompt`, and synchronous XHR requests, as they block the main thread.

```js
// Inefficient
alert('This blocks the main thread');

// Efficient
console.log('This does not block the main thread');
```

## Memory leaks

Memory leaks occur when memory that is no longer needed is not released. Common causes include circular references and unremoved event listeners.

### Circular references

```js
// Inefficient
function createCircularReference() {
  const obj1 = {};
  const obj2 = {};
  obj1.ref = obj2;
  obj2.ref = obj1;
}

// Efficient
function createNonCircularReference() {
  const obj1 = {};
  const obj2 = {};
  obj1.ref = obj2;
}
```

### Unremoved event listeners

```js
// Inefficient
element.addEventListener('click', handleClick);

// Efficient
element.removeEventListener('click', handleClick);
```

## Improper use of asynchronous operations

### Unoptimized promises

Chain promises properly to avoid blocking the main thread.

```js
// Inefficient
fetch('url')
  .then((response) => response.json())
  .then((data) => {
    // Process data
  });

// Efficient
async function fetchData() {
  const response = await fetch('url');
  const data = await response.json();
  // Process data
}
fetchData();
```

### Debouncing and throttling

Use debouncing and throttling to limit the rate of function execution, especially for event handlers.

```js
// Debouncing
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// Throttling
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
```

## Further reading

- [MDN Web Docs: Performance](https://developer.mozilla.org/en-US/docs/Web/Performance)
- [Google Developers: Web Performance Optimization](https://developers.google.com/web/fundamentals/performance)
