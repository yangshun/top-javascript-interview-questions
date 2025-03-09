---
title: Explain the difference between shallow copy and deep copy
---

## TL;DR

A shallow copy duplicates the top-level properties of an object, but nested objects are still referenced. A deep copy duplicates all levels of an object, creating entirely new instances of nested objects. For example, using `Object.assign()` creates a shallow copy, while using libraries like `Lodash` or `structuredClone()` in modern JavaScript can create deep copies.

```js live
// Shallow copy example
let obj1 = { a: 1, b: { c: 2 } };
let shallowCopy = Object.assign({}, obj1);
shallowCopy.b.c = 3;
console.log(shallowCopy.b.c); // Output: 3
console.log(obj1.b.c); // Output: 3 (original nested object changed too!)

// Deep copy example
let obj2 = { a: 1, b: { c: 2 } };
let deepCopy = JSON.parse(JSON.stringify(obj2));
deepCopy.b.c = 4;
console.log(deepCopy.b.c); // Output: 4
console.log(obj2.b.c); // Output: 2 (original nested object remains unchanged)
```

---

## Difference between shallow copy and deep copy

### Shallow copy

A shallow copy creates a new object and copies the values of the original object's top-level properties into the new object. However, if any of these properties are references to other objects, only the reference is copied, not the actual object. This means that changes to nested objects in the copied object will affect the original object.

#### Example

```js live
let obj1 = { a: 1, b: { c: 2 } };
let shallowCopy = Object.assign({}, obj1);
shallowCopy.b.c = 3;
console.log(shallowCopy.b.c); // Output: 3
console.log(obj1.b.c); // Output: 3 (original nested object changed too!)
```

In this example, `shallowCopy` is a shallow copy of `obj1`. Changing `shallowCopy.b.c` also changes `obj1.b.c` because `b` is a reference to the same object in both `obj1` and `shallowCopy`.

### Deep copy

A deep copy creates a new object and recursively copies all properties and nested objects from the original object. This means that the new object is completely independent of the original object, and changes to nested objects in the copied object do not affect the original object.

#### Example

```js live
let obj1 = { a: 1, b: { c: 2 } };
let deepCopy = JSON.parse(JSON.stringify(obj1));
deepCopy.b.c = 4;
console.log(deepCopy.b.c); // Output: 4
console.log(obj1.b.c); // Output: 2 (original nested object remains unchanged)
```

In this example, `deepCopy` is a deep copy of `obj1`. Changing `deepCopy.b.c` does not affect `obj1.b.c` because `b` is a completely new object in `deepCopy`.

### Methods to create shallow and deep copies

#### Shallow copy methods

- `Object.assign()`
- Spread operator (`...`)

#### Deep copy methods

- `JSON.parse(JSON.stringify())`
- `structuredClone()` (modern JavaScript)
- Libraries like `Lodash` (`_.cloneDeep`)

## Further reading

- [MDN Web Docs: Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [MDN Web Docs: JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- [MDN Web Docs: structuredClone()](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)
- [Lodash Documentation: \_.cloneDeep](https://lodash.com/docs/4.17.15#cloneDeep)
