---
title: How do you reliably determine whether an object is empty?
---

## TL;DR

To reliably determine whether an object is empty, you can use `Object.keys()` to check if the object has any enumerable properties. If the length of the array returned by `Object.keys()` is zero, the object is empty.

```js live
const isEmpty = (obj) => Object.keys(obj).length === 0;

const obj = {};
console.log(isEmpty(obj)); // true
```

---

## How do you reliably determine whether an object is empty?

### Using `Object.keys()`

The most common and reliable way to check if an object is empty is by using `Object.keys()`. This method returns an array of the object's own enumerable property names. If the length of this array is zero, the object is empty.

```js live
const isEmpty = (obj) => Object.keys(obj).length === 0;

const obj1 = {};
const obj2 = { key: 'value' };

console.log(isEmpty(obj1)); // true
console.log(isEmpty(obj2)); // false
```

### Using `Object.entries()`

Another method is to use `Object.entries()`, which returns an array of the object's own enumerable property `[key, value]` pairs. If the length of this array is zero, the object is empty.

```js live
const isEmpty = (obj) => Object.entries(obj).length === 0;

const obj1 = {};
const obj2 = { key: 'value' };

console.log(isEmpty(obj1)); // true
console.log(isEmpty(obj2)); // false
```

### Using `Object.values()`

Similarly, you can use `Object.values()`, which returns an array of the object's own enumerable property values. If the length of this array is zero, the object is empty.

```js live
const isEmpty = (obj) => Object.values(obj).length === 0;

const obj1 = {};
const obj2 = { key: 'value' };

console.log(isEmpty(obj1)); // true
console.log(isEmpty(obj2)); // false
```

### Using a `for...in` loop

You can also use a `for...in` loop to check if an object has any properties. If the loop doesn't iterate over any properties, the object is empty.

```js live
const isEmpty = (obj) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};

const obj1 = {};
const obj2 = { key: 'value' };
const childObj = Object.create(obj2); // Inherit from obj2

console.log(isEmpty(obj1)); // true
console.log(isEmpty(obj2)); // false
console.log(isEmpty(childObj)); // true (has no own properties)
console.log(childObj.key); // Output: 'value' (still has the inherited property)
```

### Edge cases

- **Prototype properties**: The methods above only check for the object's own properties, not properties inherited from its prototype.
- **Non-enumerable properties**: These methods do not account for non-enumerable properties.

## Further reading

- [MDN Web Docs: Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [MDN Web Docs: Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
- [MDN Web Docs: Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
- [MDN Web Docs: for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
