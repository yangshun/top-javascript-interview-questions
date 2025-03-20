---
title: What are callback functions and how are they used?
---

## TL;DR

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. They are commonly used for asynchronous operations like handling events, making API calls, or reading files. For example:

```js live
function fetchData(callback) {
  // assume an asynchronous operation to fetch data
  const data = { name: 'John Doe' };
  callback(data);
}

function handleData(data) {
  console.log(data);
}

fetchData(handleData);
```

---

## What are callback functions and how are they used?

### Definition

A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. This allows other code to run in the meantime and prevents blocking.

### Synchronous callbacks

Synchronous callbacks are executed immediately within the function they are passed to. They are often used for tasks that need to be completed before moving on to the next line of code.

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

### Asynchronous callbacks

Asynchronous callbacks are used for operations that take some time to complete, such as reading files, making HTTP requests, or handling events. These callbacks are executed after the asynchronous operation has finished.

```js live
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: 'John Doe' };
    callback(data);
  }, 1000);
}

function handleData(data) {
  console.log(data);
}

fetchData(handleData);
// Output: { name: 'John Doe' } after 1 second
```

### Common use cases

#### Event handling

Callbacks are often used in event handling. For example, in JavaScript, you can pass a callback function to an event listener.

```js live
const button = document.createElement('button');

button.addEventListener('click', () => {
  setTimeout(() => {
    console.log('Button clicked after 1s');
  }, 1000);
});

button.click();
```

#### API calls

Callbacks are frequently used in making API calls to handle the response data.

```js live
function getUserData(userId, callback) {
  fetch(`https://jsonplaceholder.typicode.com/todos/2`)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.error('Error:', error));
}

function displayUserData(data) {
  console.log(data);
}

getUserData(1, displayUserData);
```

#### Timers

Callbacks are also used with timers like `setTimeout` and `setInterval`.

```js live
function sayHello() {
  console.log('Hello, world!');
}

setTimeout(sayHello, 2000); // After 2 seconds elapse, sayHello callback is called
```

## Further reading

- [MDN Web Docs: Callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
- [JavaScript.info: Callbacks](https://javascript.info/callbacks)
- [Eloquent JavaScript: Asynchronous Programming](https://eloquentjavascript.net/11_async.html)
