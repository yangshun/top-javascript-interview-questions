---
title: What are Web Workers and how can they be used to improve performance?
---

## TL;DR

Web Workers are a way to run JavaScript in the background, separate from the main execution thread of a web application. This helps in performing heavy computations without blocking the user interface. You can create a Web Worker using the `Worker` constructor and communicate with it using the `postMessage` and `onmessage` methods.

```js
// main.js
const worker = new Worker('worker.js');
worker.postMessage('Hello, worker!');

worker.onmessage = function (event) {
  console.log('Message from worker:', event.data);
};

// worker.js
onmessage = function (event) {
  console.log('Message from main script:', event.data);
  postMessage('Hello, main script!');
};
```

---

## What are Web Workers and how can they be used to improve performance?

### Introduction to Web Workers

Web Workers provide a way to run JavaScript in the background, separate from the main execution thread. This allows for performing tasks like heavy computations or I/O operations without blocking the user interface, leading to a smoother user experience.

### Creating a Web Worker

To create a Web Worker, you use the `Worker` constructor and pass the URL of the JavaScript file that contains the worker code.

```js
const worker = new Worker('worker.js');
```

### Communication between main script and Web Worker

Communication between the main script and the Web Worker is done using the `postMessage` method and the `onmessage` event handler.

#### Main script

```js
// main.js
const worker = new Worker('worker.js');

// Send a message to the worker
worker.postMessage('Hello, worker!');

// Receive messages from the worker
worker.onmessage = function (event) {
  console.log('Message from worker:', event.data);
};
```

#### Worker script

```js
// worker.js
onmessage = function (event) {
  console.log('Message from main script:', event.data);
  // Send a message back to the main script
  postMessage('Hello, main script!');
};
```

### Use cases for Web Workers

#### Heavy computations

Web Workers can be used to perform heavy computations without blocking the main thread. For example, calculating large datasets or performing complex mathematical operations.

```js
// worker.js
onmessage = function (event) {
  const result = heavyComputation(event.data);
  postMessage(result);
};

function heavyComputation(data) {
  // Perform heavy computation here
  return data * 2; // Example computation
}
```

#### Data processing

Web Workers can be used to process large amounts of data, such as parsing large JSON files or processing images.

```js
// worker.js
onmessage = function (event) {
  const processedData = processData(event.data);
  postMessage(processedData);
};

function processData(data) {
  // Process data here
  return data.map((item) => item * 2); // Example processing
}
```

### Limitations of Web Workers

- Web Workers do not have access to the DOM, so they cannot directly manipulate the user interface.
- They have a separate scope from the main script, so you need to pass data back and forth using `postMessage`.
- Creating and managing Web Workers can add complexity to your codebase.

## Further reading

- [MDN Web Docs: Using Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- [HTML5 Rocks: Web Workers](https://www.html5rocks.com/en/tutorials/workers/basics/)
- [MDN Web Docs: Worker](https://developer.mozilla.org/en-US/docs/Web/API/Worker)
