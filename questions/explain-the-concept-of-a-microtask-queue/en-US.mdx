---
title: Explain the concept of a microtask queue
---

## TL;DR

The microtask queue is a queue of tasks that need to be executed after the currently executing script and before any other task. Microtasks are typically used for tasks that need to be executed immediately after the current operation, such as promise callbacks. The microtask queue is processed before the macrotask queue, ensuring that microtasks are executed as soon as possible.

---

## The concept of a microtask queue

### What is a microtask queue?

The microtask queue is a part of the JavaScript event loop mechanism. It is a queue that holds tasks that need to be executed immediately after the currently executing script and before any other task in the macrotask queue. Microtasks are typically used for operations that need to be executed as soon as possible, such as promise callbacks and `MutationObserver` callbacks.

### How does the microtask queue work?

1. **Execution order**: The microtask queue is processed after the currently executing script and before the macrotask queue. This means that microtasks are given higher priority over macrotasks.
2. **Event loop**: During each iteration of the event loop, the JavaScript engine first processes all the microtasks in the microtask queue before moving on to the macrotask queue.
3. **Adding microtasks**: Microtasks can be added to the microtask queue using methods like `Promise.resolve().then()` and `queueMicrotask()`.

### Example

Here is an example to illustrate how the microtask queue works:

```js live
console.log('Script start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('Promise 1');
  })
  .then(() => {
    console.log('Promise 2');
  });

console.log('Script end');
```

Output:

```
Script start
Script end
Promise 1
Promise 2
setTimeout
```

In this example:

- The synchronous code (`console.log('Script start')` and `console.log('Script end')`) is executed first.
- The promise callbacks (`Promise 1` and `Promise 2`) are added to the microtask queue and executed next.
- The `setTimeout` callback is added to the macrotask queue and executed last.

### Use cases

1. **Promise callbacks**: Microtasks are commonly used for promise callbacks to ensure they are executed as soon as possible after the current operation.
2. **MutationObserver**: The `MutationObserver` API uses microtasks to notify changes in the DOM.

## Further reading

- [MDN Web Docs: Microtask](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide)
- [JavaScript Event Loop Explained](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
- [Understanding the JavaScript Microtask Queue](https://javascript.info/microtask-queue)
