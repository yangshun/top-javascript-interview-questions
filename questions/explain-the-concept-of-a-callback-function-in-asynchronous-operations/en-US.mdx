---
title: Explain the concept of a callback function in asynchronous operations
---

## TL;DR

A callback function is a function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of routine or action. In asynchronous operations, callbacks are used to handle tasks that take time to complete, such as network requests or file I/O, without blocking the execution of the rest of the code. For example:

```js live
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: 'John', age: 30 };
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});
```

---

## What is a callback function?

A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. This is particularly useful in asynchronous programming, where operations like network requests, file I/O, or timers need to be handled without blocking the main execution thread.

### Synchronous vs. asynchronous callbacks

- **Synchronous callbacks** are executed immediately within the function they are passed to. They are blocking and the code execution waits for them to complete.
- **Asynchronous callbacks** are executed after a certain event or operation has been completed. They are non-blocking and allow the code execution to continue while waiting for the operation to finish.

### Example of a synchronous callback

```js live
function greet(name, callback) {
  console.log('Hello ' + name);
  callback();
}

function sayGoodbye() {
  console.log('Goodbye!');
}

greet('Alice', sayGoodbye);
// Output:
// Hello Alice
// Goodbye!
```

### Example of an asynchronous callback

```js live
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: 'John', age: 30 };
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});
// Output after 1 second:
// { name: 'John', age: 30 }
```

### Common use cases

- **Network requests**: Fetching data from an API
- **File I/O**: Reading or writing files
- **Timers**: Delaying execution using `setTimeout` or `setInterval`
- **Event handling**: Responding to user actions like clicks or key presses

### Handling errors in callbacks

When dealing with asynchronous operations, it's important to handle errors properly. A common pattern is to use the first argument of the callback function to pass an error object, if any.

```js live
function fetchData(callback) {
  // assume asynchronous operation to fetch data
  const { data, error } = { data: { name: 'John', age: 30 }, error: null };
  callback(error, data);
}

fetchData((error, data) => {
  if (error) {
    console.error('An error occurred:', error);
  } else {
    console.log(data);
  }
});
```

## Further reading

- [MDN Web Docs: Callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
- [JavaScript.info: Callbacks](https://javascript.info/callbacks)
- [Node.js: Asynchronous programming and callbacks](https://nodejs.org/en/learn/asynchronous-work/javascript-asynchronous-programming-and-callbacks)
