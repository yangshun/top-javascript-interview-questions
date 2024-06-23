---
title: How can you test asynchronous code in JavaScript?
---

## TL;DR

To test asynchronous code in JavaScript, you can use testing frameworks like Jest or Mocha. These frameworks provide built-in support for handling asynchronous operations. You can use `async`/`await` or return promises in your test functions. For example, in Jest, you can write:

```js
test('fetches data successfully', async () => {
  const data = await fetchData();
  expect(data).toBeDefined();
});
```

Alternatively, you can use callbacks and the `done` function to signal the end of an asynchronous test.

---

## How can you test asynchronous code in JavaScript?

Testing asynchronous code in JavaScript can be challenging, but modern testing frameworks like Jest and Mocha provide robust support for handling asynchronous operations. Here are some common methods to test asynchronous code:

### Using `async`/`await`

One of the most straightforward ways to test asynchronous code is by using `async`/`await`. This approach makes your test code look synchronous, which can be easier to read and write.

#### Example with Jest

```js
// fetchData.js
export const fetchData = async () => {
  const response = await fetch('https://api.example.com/data');
  return response.json();
};

// fetchData.test.js
import { fetchData } from './fetchData';

test('fetches data successfully', async () => {
  const data = await fetchData();
  expect(data).toBeDefined();
});
```

### Returning a promise

Another way to handle asynchronous tests is by returning a promise from your test function. Jest and Mocha will wait for the promise to resolve before finishing the test.

#### Example with Jest

```js
// fetchData.js
export const fetchData = () => {
  return fetch('https://api.example.com/data').then((response) =>
    response.json(),
  );
};

// fetchData.test.js
import { fetchData } from './fetchData';

test('fetches data successfully', () => {
  return fetchData().then((data) => {
    expect(data).toBeDefined();
  });
});
```

### Using callbacks

For older codebases or specific scenarios, you might need to use callbacks. In Jest, you can use the `done` function to signal the end of an asynchronous test.

#### Example with Jest

```js
// fetchData.js
export const fetchData = (callback) => {
  fetch('https://api.example.com/data')
    .then((response) => response.json())
    .then((data) => callback(null, data))
    .catch((error) => callback(error));
};

// fetchData.test.js
import { fetchData } from './fetchData';

test('fetches data successfully', (done) => {
  fetchData((error, data) => {
    expect(error).toBeNull();
    expect(data).toBeDefined();
    done();
  });
});
```

### Using Mocha

Mocha also supports `async`/`await`, returning promises, and using callbacks. Here is an example using `async`/`await` with Mocha:

```js
// fetchData.js
export const fetchData = async () => {
  const response = await fetch('https://api.example.com/data');
  return response.json();
};

// fetchData.test.js
import { fetchData } from './fetchData';
import { expect } from 'chai';

describe('fetchData', () => {
  it('fetches data successfully', async () => {
    const data = await fetchData();
    expect(data).to.be.an('object');
  });
});
```

## Further reading

- [Jest documentation on testing asynchronous code](https://jestjs.io/docs/asynchronous)
- [Mocha documentation on testing asynchronous code](https://mochajs.org/#asynchronous-code)
- [MDN Web Docs on async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
- [Chai assertion library](https://www.chaijs.com/)
