---
title: What is the prototype chain and how does it work?
---

## TL;DR

The prototype chain is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects. When you try to access a property on an object, JavaScript will first look for the property on the object itself. If it doesn't find it, it will look at the object's prototype, and then the prototype's prototype, and so on, until it either finds the property or reaches the end of the chain, which is `null`.

```js live
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const alice = new Person('Alice');
alice.greet(); // "Hello, my name is Alice"
```

In this example, `alice` inherits the `greet` method from `Person.prototype`.

---

## What is the prototype chain and how does it work?

### Understanding prototypes

In JavaScript, every object has a prototype. A prototype is also an object, and it can have its own prototype, forming a chain. This chain is known as the prototype chain.

### How the prototype chain works

When you try to access a property or method on an object, JavaScript will:

1. Look for the property or method on the object itself.
2. If it doesn't find it, it will look at the object's prototype.
3. If it still doesn't find it, it will look at the prototype's prototype.
4. This process continues until it either finds the property or method or reaches the end of the chain, which is `null`.

### Example

```js live
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const alice = new Person('Alice');
alice.greet(); // "Hello, my name is Alice"
```

In this example:

1. `alice` is an instance of `Person`.
2. `alice` does not have a `greet` method directly on it.
3. JavaScript looks at `alice`'s prototype, which is `Person.prototype`.
4. `Person.prototype` has a `greet` method, so JavaScript calls it.

### Prototype chain in built-in objects

JavaScript's built-in objects also use the prototype chain. For example, arrays inherit from `Array.prototype`, which in turn inherits from `Object.prototype`.

```js live
const arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"
```

In this example:

1. `arr` is an instance of `Array`.
2. `arr` does not have a `toString` method directly on it.
3. JavaScript looks at `arr`'s prototype, which is `Array.prototype`.
4. `Array.prototype` has a `toString` method, so JavaScript calls it.

### Modifying prototypes

You can add properties and methods to an object's prototype, and all instances of that object will have access to those properties and methods.

```js live
function Person(name) {
  this.name = name;
}

const alice = new Person('Alice');

Person.prototype.sayGoodbye = function () {
  console.log(`Goodbye from ${this.name}`);
};

alice.sayGoodbye(); // "Goodbye from Alice"
```

In this example, we added a `sayGoodbye` method to `Person.prototype`, and now `alice` can use it.

## Further reading

- [MDN Web Docs: Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [JavaScript.info: Prototypes](https://javascript.info/prototype-inheritance)
- [Eloquent JavaScript: Prototypes](https://eloquentjavascript.net/06_object.html#h_jl8p9u9e2d)
