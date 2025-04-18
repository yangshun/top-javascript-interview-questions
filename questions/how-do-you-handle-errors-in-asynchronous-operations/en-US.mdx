---
title: How do you handle errors in asynchronous operations?
---

## TL;DR

To handle errors in asynchronous operations, you can use `try...catch` blocks with `async/await` syntax or `.catch()` method with Promises. For example, with `async/await`, you can wrap your code in a `try...catch` block to catch any errors:

```js live
async function fetchData() {
  try {
    // Invalid URl
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData(); // Error fetching data: ....
```

With Promises, you can use the `.catch()` method:

```js live
fetch('https://api.example.com/data') // Invalid URl
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error fetching data:', error));
```

---

## Using `try...catch` with `async/await`

### Basic usage

When using `async/await`, you can handle errors by wrapping your asynchronous code in a `try...catch` block. This allows you to catch any errors that occur during the execution of the `await` statement.

```js live
async function fetchData() {
  try {
    // Invalid URl
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData(); // Error fetching data: ....
```

### Nested asynchronous operations

If you have multiple asynchronous operations, you can nest `try...catch` blocks to handle errors at different levels.

```js live
async function fetchUser() {
  // Simulate a successful async operation
  return { id: 1, name: 'Alice' };
}

async function fetchUserPosts() {
  // Simulate a failed async operation
  throw new Error('Failed to fetch posts');
}

async function loadUserData() {
  try {
    const user = await fetchUser();
    console.log('User:', user);

    try {
      const posts = await fetchUserPosts();
      console.log('Posts:', posts);
    } catch (postsError) {
      console.error('Error fetching posts:', postsError.message);
    }
  } catch (userError) {
    console.error('Error fetching user:', userError.message);
  }
}

loadUserData();
```

## Using `.catch()` with Promises

### Basic usage

When working with Promises, you can handle errors using the `.catch()` method. This method is called if the Promise is rejected.

```js live
fetch('https://api.example.com/data')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error fetching data:', error));
```

### Chaining multiple Promises

If you have multiple Promises chained together, you can use a single `.catch()` at the end to handle any errors that occur in any of the Promises.

```js live
fetch('https://api.example.com/data')
  .then((response) => response.json())
  .then((data) => {
    // Process data
    return processData(data);
  })
  .then((result) => {
    // Further processing
    console.log(result);
  })
  .catch((error) => console.error('Error in the chain:', error));
```

## Further reading

- [MDN Web Docs: async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
- [MDN Web Docs: Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [JavaScript.info: Error handling with promises](https://javascript.info/promise-error-handling)
