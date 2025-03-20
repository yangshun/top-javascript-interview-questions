---
title: How do you make an HTTP request using the Fetch API?
---

## TL;DR

To make an HTTP request using the Fetch API, you can use the `fetch` function, which returns a promise. You can handle the response using `.then()` and `.catch()` for error handling. Here's a basic example of a GET request:

```js live
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));
```

For a POST request, you can pass an options object as the second argument to `fetch`:

```js live
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));
```

---

## Making an HTTP request using the Fetch API

### Basic GET request

To make a basic GET request, you can use the `fetch` function with the URL of the resource you want to fetch. The `fetch` function returns a promise that resolves to the `Response` object representing the response to the request.

```js live
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));
```

### Handling different response types

The `Response` object has several methods to handle different types of responses, such as `.json()`, `.text()`, `.blob()`, and `.arrayBuffer()`.

```js live
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.text())
  .then((text) => console.log(text))
  .catch((error) => console.error('Error:', error));
```

### Making a POST request

To make a POST request, you need to pass an options object as the second argument to `fetch`. This object can include the HTTP method, headers, and body of the request.

```js live
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));
```

### Handling errors

Error handling in the Fetch API can be done using the `.catch()` method. It's also a good practice to check the `response.ok` property to ensure the request was successful.

```js live
fetch('https://jsonplaceholder.tyicode.com/posts/1/comments') // Typo in the URL
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));
```

### Using async/await

You can also use the Fetch API with `async/await` for a more synchronous-looking code.

```js live
async function fetchData() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1',
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
```

## Further reading

- [MDN Web Docs: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN Web Docs: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [JavaScript.info: Fetch](https://javascript.info/fetch)
