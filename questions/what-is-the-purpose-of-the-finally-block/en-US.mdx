---
title: What is the purpose of the `finally` block?
---

## TL;DR

The `finally` block in JavaScript is used to execute code after a `try` and `catch` block, regardless of whether an error was thrown or caught. It ensures that certain cleanup or finalization code runs no matter what. For example:

```js
try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that will always run
}
```

---

## Purpose of the `finally` block

### Ensuring cleanup

The `finally` block is often used to ensure that certain cleanup code runs regardless of whether an error occurred or not. This is useful for tasks like closing files, releasing resources, or resetting states.

```js live
async function fetchData() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1',
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Fetched data:', data);
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    console.log('Cleanup code runs here');
  }
}

fetchData();
// Try creating a typo in the URL to see error handling.
```

### Guaranteeing execution

The `finally` block guarantees that the code within it will execute after the `try` and `catch` blocks have finished. This is true even if a `return` statement is encountered in the `try` or `catch` blocks.

```js live
function exampleFunction() {
  try {
    return 'Try block';
  } catch (error) {
    return 'Catch block';
  } finally {
    console.log('Finally block');
  }
}

console.log(exampleFunction()); // Output: 'Finally block' followed by 'Try block'
```

### Handling asynchronous code

When dealing with asynchronous code, the `finally` block can be used to ensure that certain actions are taken after a promise is settled, regardless of its outcome.

```js live
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((res) => console.log(res))
  .catch((error) => console.error('Fetch error:', error))
  .finally(() => console.log('Fetch attempt finished'));
```

## Further reading

- [MDN Web Docs: try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [JavaScript.info: try...catch](https://javascript.info/try-catch)
- [MDN Web Docs: Promise.prototype.finally()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)
