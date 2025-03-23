---
title: What is the difference between `setTimeout()`, `setImmediate()`, and `process.nextTick()`?
---

## TL;DR

`setTimeout()` schedules a callback to run after a minimum delay. `setImmediate()` schedules a callback to run after the current event loop completes. `process.nextTick()` schedules a callback to run before the next event loop iteration begins.

```js
setTimeout(() => console.log('setTimeout'), 0);
setImmediate(() => console.log('setImmediate'));
process.nextTick(() => console.log('nextTick'));
```

In this example, `process.nextTick()` will execute first, followed by either `setTimeout()` or `setImmediate()` depending on the environment.

---

## Difference between `setTimeout()`, `setImmediate()`, and `process.nextTick()`

### `setTimeout()`

`setTimeout()` is a function that schedules a callback to be executed after a specified delay in milliseconds. The minimum delay is approximately 4ms in modern browsers and Node.js.

```js live
setTimeout(() => {
  console.log('Executed after at least 1000 milliseconds');
}, 1000);
```

### `setImmediate()`

`setImmediate()` is a function available in Node.js that schedules a callback to be executed immediately after the current event loop phase completes. It is similar to `setTimeout()` with a delay of 0, but it is more efficient for immediate execution.

```js
setImmediate(() => {
  console.log('Executed after the current event loop phase');
});
```

### `process.nextTick()`

`process.nextTick()` is a function available in Node.js that schedules a callback to be executed before the next event loop iteration begins. It is used for deferring the execution of a function until the current operation completes.

```js
process.nextTick(() => {
  console.log('Executed before the next event loop iteration');
});
```

### Execution order

The execution order of these functions can be demonstrated with the following example:

```js
setTimeout(() => console.log('setTimeout'), 0);
setImmediate(() => console.log('setImmediate'));
process.nextTick(() => console.log('nextTick'));
```

In this example, the output will be:

```
nextTick
setTimeout or setImmediate (order may vary)
setImmediate or setTimeout (order may vary)
```

`process.nextTick()` will always execute first, followed by either `setTimeout()` or `setImmediate()`, depending on the environment.

## Further reading

- [Node.js Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
- [MDN Web Docs: setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
- [Node.js Documentation: setImmediate()](https://nodejs.org/api/timers.html#timers_setimmediate_callback_args)
- [Node.js Documentation: process.nextTick()](https://nodejs.org/api/process.html#process_process_nexttick_callback_args)
