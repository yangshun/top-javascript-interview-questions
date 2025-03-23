---
title: What is the use of `Promise.all()`
---

## TL;DR

`Promise.all()` is a method in JavaScript that takes an array of promises and returns a single promise. This returned promise resolves when all the input promises have resolved, or it rejects if any of the input promises reject. It is useful for running multiple asynchronous operations in parallel and waiting for all of them to complete.

```js live
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [3, 42, 'foo']
});
```

---

## What is the use of `Promise.all()`

### Overview

`Promise.all()` is a static method of the `Promise` object that is used to handle multiple promises concurrently. It takes an iterable (usually an array) of promises and returns a single promise that resolves when all the promises in the iterable have resolved or rejects if any of the promises reject.

### Syntax

```js
Promise.all(iterable);
```

- `iterable`: An iterable object, such as an array, containing promises.

### How it works

When you pass an array of promises to `Promise.all()`, it returns a new promise. This new promise:

- Resolves when all the promises in the array have resolved. The resolved value is an array of the resolved values of the input promises, in the same order as the input promises.
- Rejects as soon as any of the input promises reject. The rejection reason is the reason of the first promise that rejects.

### Example

Here is an example to illustrate how `Promise.all()` works:

```js live
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, 'two');
});

Promise.all([promise1, promise2])
  .then((values) => {
    console.log(values); // ['one', 'two']
  })
  .catch((error) => {
    console.error(error);
  });
```

In this example, `Promise.all()` waits for both `promise1` and `promise2` to resolve. Once both promises have resolved, it logs the array of resolved values.

### Error handling

If any of the promises passed to `Promise.all()` reject, the returned promise will immediately reject with the reason of the first promise that rejects.

```js live
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 200, 'two');
});

Promise.all([promise1, promise2])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error); // 'two'
  });
```

In this example, `promise2` rejects after 200 milliseconds, causing the `Promise.all()` promise to reject immediately with the reason `'two'`.

### Use cases

- **Parallel API requests**: When you need to make multiple API requests and wait for all of them to complete before proceeding.
- **Batch processing**: When you have multiple asynchronous tasks that can be executed in parallel and you need to wait for all of them to finish.
- **Data aggregation**: When you need to gather data from multiple sources and combine the results.

## Further reading

- [MDN Web Docs on `Promise.all()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- [JavaScript Promises: An Introduction](https://developers.google.com/web/fundamentals/primers/promises)
- [Understanding JavaScript Promises](https://www.digitalocean.com/community/tutorials/understanding-javascript-promises)
