---
title: How can you avoid problems related to hoisting?
---

## TL;DR

To avoid problems related to hoisting, always declare variables at the top of their scope using `let` or `const` instead of `var`. This ensures that variables are block-scoped and not hoisted to the top of their containing function or global scope. Additionally, declare functions before they are called to avoid issues with function hoisting.

```js live
// Use let or const
let x = 10;
const y = 20;
console.log(x, y); // Output: 10 20

// Declare functions before calling them
function myFunction() {
  console.log('Hello, world!');
}
myFunction(); // Output: 'Hello, world!'
```

---

## How can you avoid problems related to hoisting?

### Understand hoisting

Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (script or function). This can lead to unexpected results if not properly managed.

### Use `let` and `const` instead of `var`

`let` and `const` are block-scoped, meaning they are only accessible within the block they are defined. This prevents them from being hoisted to the top of the function or global scope, reducing the risk of unexpected behavior.

```js live
console.log(x); // undefined. (Hoisted but uninitialized, risk of unexpected behavior)
console.log(y); // ReferenceError: Cannot access 'y' before initialization. (Not hoisted)
console.log(z); // ReferenceError: Cannot access 'z' before initialization. (Not hoisted)

// Avoid using var
var x = 10; // Hoisted to the top of the function or global scope

// Use let or const
let y = 20; // Block-scoped, not hoisted to the top
const z = 30; // Block-scoped, not hoisted to the top
```

### Declare variables at the top of their scope

To avoid confusion and potential errors, always declare your variables at the top of their scope. This makes it clear where the variables are coming from and ensures they are initialized before use.

```js live
function example() {
  let a = 1;
  const b = 2;

  // Now use a and b
  console.log(a + b);
}
example(); // Output: 3
```

### Declare functions before calling them

Function declarations are hoisted, but function expressions are not. To avoid issues, always declare functions before calling them.

```js live
// Function declaration (hoisted)
function myFunction() {
  console.log('Hello, world!');
}
myFunction(); // No issues here

// Function expression (not hoisted)
const anotherFunction = function () {
  console.log('Hello again!');
};
anotherFunction(); // No issues here
```

### Avoid using undeclared variables

Using undeclared variables can lead to unexpected behavior due to hoisting. Always declare your variables before using them.

```js live
// Avoid this
function badExample() {
  x = 10; // ReferenceError in strict mode
  console.log(x);
}

// Do this instead
function goodExample() {
  let x = 10; // x is declared
  console.log(x);
}

goodExample();
badExample();
```

## Further reading

- [MDN Web Docs: Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [MDN Web Docs: var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
- [MDN Web Docs: let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN Web Docs: const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
