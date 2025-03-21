---
title: How is `Promise.all()` different from `Promise.allSettled()`?
---

## TL;DR

`Promise.all()` and `Promise.allSettled()` are both methods for handling multiple promises in JavaScript, but they behave differently. `Promise.all()` waits for all promises to resolve and fails fast if any promise rejects, returning a single rejected promise. `Promise.allSettled()`, on the other hand, waits for all promises to settle (either resolve or reject) and returns an array of objects describing the outcome of each promise.

---

## How is `Promise.all()` different from `Promise.allSettled()`?

### `Promise.all()`

`Promise.all()` takes an iterable of promises and returns a single promise that resolves when all of the input promises have resolved. If any of the input promises reject, the returned promise immediately rejects with the reason of the first promise that rejected.

#### Example

```js live
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // [3, 42, 'foo']
  })
  .catch((error) => {
    console.error(error);
  });
```

In this example, `Promise.all()` resolves with an array of results `[3, 42, 'foo']` because all promises resolve successfully.

#### Failure case

```js live
const promise1 = Promise.resolve(3);
const promise2 = Promise.reject('error');
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error); // 'error'
  });
```

In this example, `Promise.all()` rejects immediately with the reason `'error'` because `promise2` rejects.

### `Promise.allSettled()`

`Promise.allSettled()` takes an iterable of promises and returns a single promise that resolves when all of the input promises have settled (either resolved or rejected). The returned promise resolves with an array of objects that each describe the outcome of each promise.

#### Example

```js live
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
  results.forEach((result) => console.log(result));
  // { status: 'fulfilled', value: 3 }
  // { status: 'fulfilled', value: 42 }
  // { status: 'fulfilled', value: 'foo' }
});
```

In this example, `Promise.allSettled()` resolves with an array of result objects, each indicating the status and value of the promises.

#### Failure case

```js live
const promise1 = Promise.resolve(3);
const promise2 = Promise.reject('error');
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
  results.forEach((result) => console.log(result));
  // { status: 'fulfilled', value: 3 }
  // { status: 'rejected', reason: 'error' }
  // { status: 'fulfilled', value: 'foo' }
});
```

In this example, `Promise.allSettled()` resolves with an array of result objects, including the rejected promise with its reason.

## Further reading

- [MDN Web Docs: Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- [MDN Web Docs: Promise.allSettled()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)
- [JavaScript.info: Promise API](https://javascript.info/promise-api)
