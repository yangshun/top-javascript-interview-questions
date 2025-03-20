---
title: What is `Object.freeze()` for?
---

## TL;DR

`Object.freeze()` is used to make an object immutable. Once an object is frozen, you cannot add, remove, or modify its properties. This is useful for creating constants or ensuring that an object remains unchanged throughout the program.

```js live
const obj = { name: 'John' };
Object.freeze(obj);
obj.name = 'Doe'; // This will not change the name property

console.log(obj); // { name: 'John' }
```

---

## What is `Object.freeze()` for?

`Object.freeze()` is a method in JavaScript that prevents modification of existing property values and the addition or removal of properties from an object. This method is useful for creating immutable objects, which can help in maintaining the integrity of data and avoiding unintended side effects.

### How to use `Object.freeze()`

To use `Object.freeze()`, simply pass the object you want to freeze as an argument to the method. Here is a basic example:

```js live
const obj = {
  name: 'John',
  age: 30,
};

Object.freeze(obj);

obj.name = 'Doe'; // This will not change the name property
obj.gender = 'male'; // This will not add a new property
delete obj.age; // This will not delete the age property

console.log(obj); // Output: { name: "John", age: 30 }
```

### Characteristics of a frozen object

1. **Immutability**: Once an object is frozen, its properties cannot be changed, added, or removed.
2. **Non-extensible**: A frozen object is also non-extensible, meaning you cannot add new properties to it.
3. **Non-configurable**: The properties of a frozen object become non-configurable, meaning you cannot change property descriptors.

### Use cases for `Object.freeze()`

1. **Constants**: When you want to create a constant object that should not be modified.
2. **Data integrity**: Ensuring that an object remains unchanged throughout the lifecycle of an application.
3. **Security**: Preventing accidental or malicious changes to critical objects.

### Limitations

- `Object.freeze()` only makes the object itself immutable. If the object contains nested objects, those nested objects are not frozen and can still be modified.
- To deeply freeze an object, you would need to recursively apply `Object.freeze()` to all nested objects.

```js live
const deepFreeze = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      deepFreeze(obj[key]);
    }
  });
  return Object.freeze(obj);
};

const nestedObj = {
  name: 'John',
  details: {
    age: 30,
    address: '123 Street',
  },
};

deepFreeze(nestedObj);

nestedObj.details.age = 31; // This will not change the age property
console.log(nestedObj); // Output: { name: "John", details: { age: 30, address: "123 Street" } }
```

## Further reading

- [MDN Web Docs on Object.freeze()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
- [JavaScript.info on property flags and descriptors](https://javascript.info/property-descriptors)
- [Deep freezing objects in JavaScript](https://medium.com/@saranshkataria/deep-freezing-objects-in-javascript-637f3d4d7d7)
