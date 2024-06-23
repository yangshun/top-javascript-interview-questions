---
title: How do you write unit tests for JavaScript code?
---

## TL;DR

To write unit tests for JavaScript code, you typically use a testing framework like Jest or Mocha. First, you set up your testing environment by installing the necessary libraries. Then, you write test cases using functions like `describe`, `it`, or `test` to define your tests. Each test case should focus on a small, isolated piece of functionality. You use assertions to check if the output of your code matches the expected result.

Example using Jest:

```js
// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// sum.test.js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

---

## Setting up the testing environment

### Installing Jest

To get started with Jest, you need to install it via npm:

```bash
npm install --save-dev jest
```

### Configuring Jest

Add a script to your `package.json` to run Jest:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

## Writing test cases

### Basic structure

A test file typically contains one or more `describe` blocks, which group related tests, and `it` or `test` blocks, which define individual test cases.

Example:

```js
// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// sum.test.js
const sum = require('./sum');

describe('sum function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds -1 + 1 to equal 0', () => {
    expect(sum(-1, 1)).toBe(0);
  });
});
```

### Using assertions

Assertions are used to check if the output of your code matches the expected result. Jest provides various assertion methods like `toBe`, `toEqual`, `toBeNull`, etc.

Example:

```js
test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
```

## Mocking dependencies

Sometimes, you need to mock dependencies to isolate the unit of code you are testing. Jest provides functions like `jest.fn()` and `jest.mock()` for this purpose.

Example:

```js
// fetchData.js
const fetch = require('node-fetch');

async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}
module.exports = fetchData;

// fetchData.test.js
const fetchData = require('./fetchData');
const fetch = require('node-fetch');

jest.mock('node-fetch');

test('fetches data from API', async () => {
  const mockResponse = { data: '12345' };
  fetch.mockResolvedValueOnce({
    json: async () => mockResponse,
  });

  const data = await fetchData('https://api.example.com/data');
  expect(data).toEqual(mockResponse);
});
```

## Running the tests

To run your tests, use the following command:

```bash
npm test
```

## Further reading

- [Jest documentation](https://jestjs.io/docs/getting-started)
- [Mocha documentation](https://mochajs.org/)
- [Chai documentation](https://www.chaijs.com/)
- [Sinon documentation](https://sinonjs.org/)
