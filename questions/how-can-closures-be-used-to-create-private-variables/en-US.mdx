---
title: How can closures be used to create private variables?
---

## TL;DR

Closures in JavaScript can be used to create private variables by defining a function within another function. The inner function has access to the outer function's variables, but those variables are not accessible from outside the outer function. This allows you to encapsulate and protect the variables from being accessed or modified directly.

```js live
function createCounter() {
  let count = 0; // private variable

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.getCount()); // 1
console.log(counter.count); // undefined
```

---

## How can closures be used to create private variables?

### Understanding closures

A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables. This includes:

- Variables declared within the outer function's scope
- Parameters of the outer function
- Variables from the global scope

### Creating private variables

To create private variables using closures, you can define a function that returns an object containing methods. These methods can access and modify the private variables, but the variables themselves are not accessible from outside the function.

### Example

Here's a detailed example to illustrate how closures can be used to create private variables:

```js live
function createCounter() {
  let count = 0; // private variable

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1
console.log(counter.count); // undefined
```

### Explanation

1. **Outer function**: `createCounter` is the outer function that defines a private variable `count`.
2. **Inner functions**: The object returned by `createCounter` contains methods (`increment`, `decrement`, and `getCount`) that form closures. These methods have access to the `count` variable.
3. **Encapsulation**: The `count` variable is not accessible directly from outside the `createCounter` function. It can only be accessed and modified through the methods provided.

### Benefits

- **Encapsulation**: Private variables help in encapsulating the state and behavior of an object, preventing unintended interference.
- **Data integrity**: By restricting direct access to variables, you can ensure that they are modified only through controlled methods.

## Further reading

- [MDN Web Docs: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [JavaScript.info: Closures](https://javascript.info/closure)
- [Eloquent JavaScript: Functions and Closures](https://eloquentjavascript.net/03_functions.html#h_jxlmhe5yFI)
