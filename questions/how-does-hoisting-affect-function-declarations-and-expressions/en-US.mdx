---
title: How does hoisting affect function declarations and expressions?
---

## TL;DR

Hoisting in JavaScript means that function declarations are moved to the top of their containing scope during the compile phase, making them available throughout the entire scope. This allows you to call a function before it is defined in the code. However, function expressions are not hoisted in the same way. If you try to call a function expression before it is defined, you will get an error because the variable holding the function is hoisted but not its assignment.

```js live
// Function declaration
console.log(foo()); // Works fine
function foo() {
  return 'Hello';
}

// Function expression
console.log(bar()); // Throws TypeError: bar is not a function
var bar = function () {
  return 'Hello';
};
```

---

## Hoisting in JavaScript

### Function declarations

Function declarations are hoisted to the top of their containing scope. This means you can call the function before it is defined in the code.

```js live
console.log(foo()); // Works fine
function foo() {
  return 'Hello';
}
```

In the example above, the function `foo` is hoisted to the top of its scope, so calling `foo()` before its definition works without any issues.

### Function expressions

Function expressions, on the other hand, are not hoisted in the same way. The variable that holds the function is hoisted, but its assignment is not. This means that if you try to call a function expression before it is defined, you will get an error.

```js live
console.log(bar()); // Throws TypeError: bar is not a function
var bar = function () {
  return 'Hello';
};
```

In this example, the variable `bar` is hoisted to the top of its scope, but the assignment `function() { return 'Hello'; }` is not. Therefore, calling `bar()` before the assignment results in a `TypeError`.

### Differences between `var`, `let`, and `const`

It's also important to note the differences in hoisting behavior between `var`, `let`, and `const` when used with function expressions.

- `var`: The variable is hoisted and initialized with `undefined`.
- `let` and `const`: The variables are hoisted but not initialized, leading to a `ReferenceError` if accessed before initialization.

```js live
console.log(baz); // undefined
var baz = function () {
  return 'Hello';
};

console.log(qux); // ReferenceError: Cannot access 'qux' before initialization
let qux = function () {
  return 'Hello';
};

console.log(quux); // ReferenceError: Cannot access 'quux' before initialization
const quux = function () {
  return 'Hello';
};
```

## Further reading

- [MDN Web Docs on Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [JavaScript.info on Hoisting](https://javascript.info/var#var-hoisting)
- [MDN Web Docs on Function Declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
- [MDN Web Docs on Function Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)
