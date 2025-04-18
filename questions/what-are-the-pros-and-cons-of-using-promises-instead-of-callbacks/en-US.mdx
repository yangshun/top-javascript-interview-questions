---
title: What are the pros and cons of using Promises instead of callbacks in JavaScript?
---

## TL;DR

Promises offer a cleaner alternative to callbacks, helping to avoid callback hell and making asynchronous code more readable. They facilitate writing sequential and parallel asynchronous operations with ease. However, using promises may introduce slightly more complex code.

---

## Pros

### Avoid callback hell which can be unreadable.

Callback hell, also known as the "pyramid of doom," is a phenomenon that occurs when you have multiple nested callbacks in your code. This can lead to code that is difficult to read, maintain, and debug. Here's an example of callback hell:

```js live
function getFirstData(callback) {
  setTimeout(() => {
    callback({ id: 1, title: 'First Data' });
  }, 1000);
}

function getSecondData(data, callback) {
  setTimeout(() => {
    callback({ id: data.id, title: data.title + ' Second Data' });
  }, 1000);
}

function getThirdData(data, callback) {
  setTimeout(() => {
    callback({ id: data.id, title: data.title + ' Third Data' });
  }, 1000);
}

// Callback hell
getFirstData((data) => {
  getSecondData(data, (data) => {
    getThirdData(data, (result) => {
      console.log(result); // Output: {id: 1, title: "First Data Second Data Third Data"}
    });
  });
});
```

Promises address the problem of callback hell by providing a more linear and readable structure for your code.

```js live
// Example of sequential asynchronous code using setTimeout and Promises
function getFirstData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, title: 'First Data' });
    }, 1000);
  });
}

function getSecondData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: data.id, title: data.title + ' Second Data' });
    }, 1000);
  });
}

function getThirdData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: data.id, title: data.title + ' Third Data' });
    }, 1000);
  });
}

getFirstData()
  .then(getSecondData)
  .then(getThirdData)
  .then((data) => {
    console.log(data); // Output: {id: 1, title: "First Data Second Data Third Data"}
  })
  .catch((error) => console.error('Error:', error));
```

### Makes it easy to write sequential asynchronous code that is readable with `.then()`.

In the above code example, we use `.then()` method to chain these Promises together, allowing the code to execute sequentially. It provides a cleaner and more manageable way to handle asynchronous operations in JavaScript.

### Makes it easy to write parallel asynchronous code with `Promise.all()`.

Both `Promise.all()` and callbacks can be used to write parallel asynchronous code. However, `Promise.all()` provides a more concise and readable way to handle multiple Promises, especially when dealing with complex asynchronous workflows.

```js live
function getData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, title: 'Data 1' });
    }, 1000);
  });
}

function getData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 2, title: 'Data 2' });
    }, 1000);
  });
}

function getData3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 3, title: 'Data 3' });
    }, 1000);
  });
}

Promise.all([getData1(), getData2(), getData3()])
  .then((results) => {
    console.log(results); // Output: [{ id: 1, title: 'Data 1' }, { id: 2, title: 'Data 2' }, { id: 3, title: 'Data 3' }]
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

### Easier error handling with `.catch()` and guaranteed cleanup with `.finally()`

Promises make error handling more straightforward by allowing you to catch errors at the end of a chain using `.catch()`, instead of manually checking for errors in every callback. This leads to cleaner and more maintainable code.

Additionally, `.finally()` lets you run code after the Promise settles, whether it was successful or failed, which is great for cleanup tasks like hiding spinners or resetting UI states.

```js live
function getFirstData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, title: 'First Data' });
    }, 1000);
  });
}

function getSecondData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: data.id, title: data.title + ' -> Second Data' });
    }, 1000);
  });
}

getFirstData()
  .then(getSecondData)
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  })
  .finally(() => {
    console.log('This runs no matter what');
  });
```

### With promises, these scenarios which are present in callbacks-only coding, will not happen:

- Call the callback too early
- Call the callback too late (or never)
- Call the callback too few or too many times
- Fail to pass along any necessary environment/parameters
- Swallow any errors/exceptions that may happen

## Cons

- Slightly more complex code (debatable).

## Practice

- Try implementing your own [`Promise.resolve()` method](/questions/javascript/promise-resolve), [`Promise.reject()` method](/questions/javascript/promise-reject) and [`Promise.all()` method](/questions/javascript/promise-all) on GreatFrontEnd.

## Further reading

- [Promise | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Callback function | MDN](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
