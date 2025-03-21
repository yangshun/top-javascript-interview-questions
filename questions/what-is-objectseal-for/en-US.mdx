---
title: What is `Object.seal()` for?
---

## TL;DR

`Object.seal()` is used to prevent new properties from being added to an object and to mark all existing properties as non-configurable. This means you can still modify the values of existing properties, but you cannot delete them or add new ones. Doing so will throw errors in strict mode but fail silently in non-strict mode. In the following examples, you can uncomment the 'use strict' comment to see this.

```js live
// 'use strict'

const obj = { name: 'John' };
Object.seal(obj);

obj.name = 'Jane'; // Allowed
obj.age = 30; // Not allowed, throws an error in strict mode
delete obj.name; // Not allowed, throws an error in strict mode

console.log(obj); // { name: 'Jane } (unchanged)
```

---

## What is `Object.seal()` for?

`Object.seal()` is a method in JavaScript that seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. This means that while you can still modify the values of existing properties, you cannot delete them or add new properties.

### Syntax

```js
Object.seal(obj);
```

- `obj`: The object to be sealed.

### Behavior

1. **Preventing new properties**: Once an object is sealed, you cannot add new properties to it.
2. **Non-configurable properties**: All existing properties become non-configurable, meaning you cannot delete them or change their property descriptors (e.g., making them non-writable).
3. **Modifiable values**: You can still change the values of existing properties as long as they are writable.

### Example

```js live
// 'use strict'

const person = {
  name: 'Alice',
  age: 25,
};

Object.seal(person);

person.name = 'Bob'; // Allowed
person.age = 30; // Allowed

person.gender = 'female'; // Not allowed, throws an error in strict mode
delete person.name; // Not allowed, throws an error in strict mode

console.log(person); // { name: 'Bob', age: 30 } (unchanged)
```

### Use cases

- **Data integrity**: Ensuring that an object structure remains unchanged, which can be useful in scenarios where the object represents a fixed schema.
- **Security**: Preventing accidental or malicious modifications to an object, especially in shared or global contexts.

### Checking if an object is sealed

You can check if an object is sealed using the `Object.isSealed()` method.

```js live
const obj = { name: 'John' };
Object.seal(obj);

console.log(Object.isSealed(obj)); // true
```

## Further reading

- [MDN Web Docs on Object.seal()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal)
- [MDN Web Docs on Object.isSealed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed)
- [JavaScript.info on property flags and descriptors](https://javascript.info/property-descriptors)
