---
title: What are the different ways to copy an object or an array?
---

## TL;DR

To copy an object or an array in JavaScript, you can use several methods. For shallow copies, you can use the spread operator (`...`) or `Object.assign()`. For deep copies, you can use `JSON.parse(JSON.stringify())` or libraries like Lodash's `_.cloneDeep()`.

```js live
// Shallow copy of an array
const originalArray = [1, 2, 3];
const shallowCopyArray = [...originalArray];
console.log(shallowCopyArray); // [1, 2, 3]

// Shallow copy of an object
const originalObject = { a: 1, b: 2 };
const shallowCopyObject = { ...originalObject };
console.log(shallowCopyObject); // { a: 1, b: 2 };

// Deep copy using JSON methods
const deepCopyObject = JSON.parse(JSON.stringify(originalObject));
console.log(deepCopyObject); // { a: 1, b: 2 };
```

---

## Different ways to copy an object or an array

### Shallow copy

#### Using the spread operator

The spread operator (`...`) is a concise way to create a shallow copy of an array or an object.

```js live
// Shallow copy of an array
const originalArray = [1, 2, 3];
const shallowCopyArray = [...originalArray];
console.log(shallowCopyArray); // [1, 2, 3]

// Shallow copy of an object
const originalObject = { a: 1, b: 2 };
const shallowCopyObject = { ...originalObject };
console.log(shallowCopyObject); // { a: 1, b: 2 };
```

#### Using `Object.assign()`

`Object.assign()` can also be used to create a shallow copy of an object.

```js live
const originalObject = { a: 1, b: 2 };
const shallowCopyObject = Object.assign({}, originalObject);
console.log(shallowCopyObject); // { a: 1, b: 2 };
```

### Deep copy

#### Using `JSON.parse(JSON.stringify())`

This method is a simple way to create a deep copy of an object or an array. However, it has limitations, such as not handling functions, `undefined`, or circular references.

```js live
const originalObject = { a: 1, b: { c: 2 } };
const deepCopyObject = JSON.parse(JSON.stringify(originalObject));
console.log(deepCopyObject); // { a: 1, b: { c: 2 } }
```

#### Using Lodash's `_.cloneDeep()`

Lodash is a popular utility library that provides a `_.cloneDeep()` method for deep copying objects and arrays.

```js
const _ = require('lodash');
const originalObject = { a: 1, b: { c: 2 } };
const deepCopyObject = _.cloneDeep(originalObject); // { a: 1, b: { c: 2 } }
```

### Other methods

#### Using recursion

For custom deep copy logic, you can implement a recursive function.

```js live
function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item));
  }

  const copy = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}

const originalObject = { a: 1, b: { c: 2 } };
const deepCopyObject = deepCopy(originalObject);
console.log(deepCopyObject); // { a: 1, b: { c: 2 } }
```

## Further reading

- [MDN Web Docs: Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [MDN Web Docs: Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [Lodash documentation: \_.cloneDeep](https://lodash.com/docs/4.17.15#cloneDeep)
- [MDN Web Docs: JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- [MDN Web Docs: JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
