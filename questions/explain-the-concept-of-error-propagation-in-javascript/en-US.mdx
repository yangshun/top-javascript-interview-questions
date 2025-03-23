---
title: Explain the concept of error propagation in JavaScript
---

## TL;DR

Error propagation in JavaScript refers to how errors are passed through the call stack. When an error occurs in a function, it can be caught and handled using `try...catch` blocks. If not caught, the error propagates up the call stack until it is either caught or causes the program to terminate. For example:

```js live
function a() {
  throw new Error('An error occurred');
}

function b() {
  a();
}

try {
  b();
} catch (e) {
  console.error(e.message); // Outputs: An error occurred
}
```

---

## Error propagation in JavaScript

Error propagation in JavaScript is a mechanism that allows errors to be passed up the call stack until they are caught and handled. This is crucial for debugging and ensuring that errors do not cause the entire application to crash unexpectedly.

### How errors propagate

When an error occurs in a function, it can either be caught and handled within that function or propagate up the call stack to the calling function. If the calling function does not handle the error, it continues to propagate up the stack until it reaches the global scope, potentially causing the program to terminate.

### Using `try...catch` blocks

To handle errors and prevent them from propagating further, you can use `try...catch` blocks. Here is an example:

```js live
function a() {
  throw new Error('An error occurred');
}

function b() {
  a();
}

try {
  b();
} catch (e) {
  console.error(e.message); // Outputs: An error occurred
}
```

In this example, the error thrown in function `a` propagates to function `b`, and then to the `try...catch` block where it is finally caught and handled.

### Propagation with asynchronous code

Error propagation works differently with asynchronous code, such as promises and `async/await`. For promises, you can use `.catch()` to handle errors:

```js live
function a() {
  return Promise.reject(new Error('An error occurred'));
}

function b() {
  return a();
}

b().catch((e) => {
  console.error(e.message); // Outputs: An error occurred
});
```

For `async/await`, you can use `try...catch` blocks:

```js live
async function a() {
  throw new Error('An error occurred');
}

async function b() {
  await a();
}

(async () => {
  try {
    await b();
  } catch (e) {
    console.error(e.message); // Outputs: An error occurred
  }
})();
```

### Best practices

- Always handle errors at the appropriate level to prevent them from propagating unnecessarily.
- Use `try...catch` blocks for synchronous code and `.catch()` or `try...catch` with `async/await` for asynchronous code.
- Log errors to help with debugging and provide meaningful error messages to users.

## Further reading

- [MDN Web Docs: Error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements)
- [JavaScript.info: Error handling, "try...catch"](https://javascript.info/try-catch)
- [Node.js Error Handling Best Practices](https://nodejs.dev/learn/error-handling-in-nodejs)
