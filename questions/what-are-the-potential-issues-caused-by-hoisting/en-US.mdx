---
title: What are the potential issues caused by hoisting?
---

## TL;DR

Hoisting can lead to unexpected behavior in JavaScript because variable and function declarations are moved to the top of their containing scope during the compilation phase. This can result in `undefined` values for variables if they are used before their declaration and can cause confusion with function declarations and expressions. For example:

```js live
console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
```

---

## Potential issues caused by hoisting

### Variables being `undefined`

When using `var`, the variable is hoisted to the top of its scope but not initialized. This means you can reference the variable before its declaration, but it will be `undefined` until the assignment is executed.

```js live
console.log(a); // undefined
var a = 5;
```

### Temporal dead zone with `let` and `const`

Variables declared with `let` and `const` are also hoisted, but they are not initialized. Accessing them before their declaration results in a `ReferenceError` due to the temporal dead zone.

```js live
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
```

### Function declarations vs. function expressions

Function declarations are hoisted entirely, meaning you can call the function before its declaration. However, function expressions are not hoisted in the same way, leading to potential `TypeError` if called before they are defined.

```js live
foo(); // Works fine
function foo() {
  console.log('Hello');
}

bar(); // TypeError: bar is not a function
var bar = function () {
  console.log('Hello');
};
```

### Redeclaration issues with `var`

Using `var` can lead to unintentional redeclarations, which can cause bugs that are hard to track down.

```js live
var x = 1;
if (true) {
  var x = 2; // Same variable as above
}
console.log(x); // 2
```

## Further reading

- [MDN Web Docs on Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [JavaScript.info on Hoisting](https://javascript.info/var)
- [Understanding the Temporal Dead Zone](https://medium.com/@rajeshnaroth/understanding-temporal-dead-zone-in-javascript-let-and-const-5c3d2f8e0e68)
