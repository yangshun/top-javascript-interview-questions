---
title: How do you handle errors using `try...catch` blocks?
---

## TL;DR

To handle errors using `try...catch` blocks, you wrap the code that might throw an error inside a `try` block. If an error occurs, the control is transferred to the `catch` block where you can handle the error. Optionally, you can use a `finally` block to execute code regardless of whether an error occurred or not.

```js
try {
  // Code that may throw an error
} catch (error) {
  // Handle the error
} finally {
  // Code that will run regardless of an error
}
```

---

## How do you handle errors using `try...catch` blocks?

### Basic structure

The `try...catch` statement consists of a `try` block, a `catch` block, and optionally a `finally` block.

```js
try {
  // Code that may throw an error
} catch (error) {
  // Handle the error
} finally {
  // Code that will run regardless of an error
}
```

### Example

Here is an example of using `try...catch` to handle errors:

```js live
function riskyOperation() {
  const invalidJsonString = '{"name": "John}'; // Try changing this to a valid JSON string
  return JSON.parse(invalidJsonString);
}

try {
  let result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error('An error occurred:', error.message);
} finally {
  console.log('This will run regardless of an error');
}
```

### Explanation

- **`try` block**: Contains code that might throw an error. If an error occurs, the control is transferred to the `catch` block.
- **`catch` block**: Contains code to handle the error. The `error` object contains information about the error.
- **`finally` block**: Contains code that will run regardless of whether an error occurred or not. This is useful for cleanup tasks.

### Nested `try...catch` blocks

You can nest `try...catch` blocks to handle different levels of errors:

```js live
function anotherRiskyOperation() {
  const person = undefined;
  console.log(person.name);
}

try {
  try {
    anotherRiskyOperation();
  } catch (innerError) {
    // Error (if any) for anotherRiskyOperation caught here
    console.error('Inner error:', innerError.message);
  }
} catch (outerError) {
  // Inner error does not reach here
  console.error('Outer error:', outerError.message);
}
```

### Re-throwing errors

You can re-throw an error from the `catch` block if you want it to be handled by an outer `try...catch` block:

```js live
function yetAnotherRiskyOperation() {
  const numerator = 10;
  const denominator = 0;
  if (denominator === 0) {
    throw new Error('Cannot divide by zero');
  }

  return numerator / denominator;
}

try {
  try {
    const result = yetAnotherRiskyOperation();
    console.log('Divisinon result:', result);
  } catch (innerError) {
    console.error('Inner error:', innerError.message);
    throw innerError; // Re-throw the error
  }
} catch (outerError) {
  console.error('Outer error:', outerError.message);
}
```

### Using `finally` for cleanup

The `finally` block is useful for cleanup tasks, such as closing a file or releasing resources:

```js
// openFile() and closeFile() are custom implementations
try {
  let file = openFile('example.txt');
  // Perform operations on the file
} catch (error) {
  console.error('An error occurred:', error.message);
} finally {
  closeFile(file); // Ensure the file is closed
}
```

## Further reading

- [MDN Web Docs: try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [JavaScript.info: Error handling, "try...catch"](https://javascript.info/try-catch)
- [MDN Web Docs: Error object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
