# Top JavaScript Interview Questions

Top JavaScript interview questions for acing your front end interviews.

<!-- TABLE_OF_CONTENTS:START -->
<!-- TABLE_OF_CONTENTS:END -->

<!-- QUESTIONS:START -->

## Describe event bubbling

<!-- Source: /questions/describe-event-bubbling/en-US.mdx -->

Event bubbling is a DOM event propagation mechanism where an event (e.g. a click), starts at the target element and bubbles up to the root of the document. This allows ancestor elements to also respond to the event.

Event bubbling is essential for event delegation, where a single event handler manages events for multiple child elements, enhancing performance and code simplicity. While convenient, failing to manage event propagation properly can lead to unintended behavior, such as multiple handlers firing for a single event.

<!-- Source: /questions/describe-event-bubbling/en-US.mdx -->

## Describe event capturing

<!-- Source: /questions/describe-event-capturing/en-US.mdx -->

Event capturing is a lesser-used counterpart to [event bubbling](/questions/quiz/describe-event-bubbling) in the DOM event propagation mechanism. It follows the opposite order, where an event triggers first on the ancestor element and then travels down to the target element.

Event capturing is rarely used as compared to event bubbling, but it can be used in specific scenarios where you need to intercept events at a higher level before they reach the target element. It is disabled by default but can be enabled through an option on `addEventListener()`.

<!-- Source: /questions/describe-event-capturing/en-US.mdx -->

## Describe the difference between a cookie, `sessionStorage` and `localStorage`.

<!-- Source: /questions/describe-the-difference-between-a-cookie-sessionstorage-and-localstorage/en-US.mdx -->

All of the following are mechanisms of storing data on the client, the user's browser in this case. `localStorage` and `sessionStorage` both implement the [Web Storage API interface](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API).

- **Cookies**: Suitable for server-client communication, small storage capacity, can be persistent or session-based, domain-specific. Sent to the server on every request.
- **`localStorage`**: Suitable for long-term storage, data persists even after the browser is closed, accessible across all tabs and windows of the same origin, highest storage capacity among the three.
- **`sessionStorage`**: Suitable for temporary data within a single page session, data is cleared when the tab or window is closed, has a higher storage capacity compared to cookies.

Here's a table summarizing the 3 client storage mechanisms.

| Property | Cookie | `localStorage` | `sessionStorage` |
| --- | --- | --- | --- |
| Initiator | Client or server. Server can use `Set-Cookie` header | Client | Client |
| Lifespan | As specified | Until deleted | Until tab is closed |
| Persistent across browser sessions | If a future expiry date is set | Yes | No |
| Sent to server with every HTTP request | Yes, sent via `Cookie` header | No | No |
| Total capacity (per domain) | 4kb | 5MB | 5MB |
| Access | Across windows/tabs | Across windows/tabs | Same tab |
| Security | JavaScript cannot access `HttpOnly` cookies | None | None |

<!-- Source: /questions/describe-the-difference-between-a-cookie-sessionstorage-and-localstorage/en-US.mdx -->

## Difference between: `function Person(){}`, `const person = Person()`, and `const person = new Person()`?

<!-- Source: /questions/difference-between-function-person-var-person-person-and-var-person-new-person/en-US.mdx -->

- `function Person(){}`: A function declaration in JavaScript. It can be used as a regular function or as a constructor.
- `const person = Person()`: Calls `Person` as a regular function, not a constructor. If `Person` is intended to be a constructor, this will lead to unexpected behavior.
- `const person = new Person()`: Creates a new instance of `Person`, correctly utilizing the constructor function to initialize the new object.

| Aspect | `function Person(){}` | `const person = Person()` | `const person = new Person()` |
| --- | --- | --- | --- |
| Type | Function declaration | Function call | Constructor call |
| Usage | Defines a function | Invokes `Person` as a regular function | Creates a new instance of `Person` |
| Instance Creation | No instance created | No instance created | New instance created |
| Common Mistake | N/A | Misusing as constructor leading to `undefined` | None (when used correctly) |

<!-- Source: /questions/difference-between-function-person-var-person-person-and-var-person-new-person/en-US.mdx -->

## Explain AJAX in as much detail as possible

<!-- Source: /questions/explain-ajax-in-as-much-detail-as-possible/en-US.mdx -->

AJAX (Asynchronous JavaScript and XML) facilitates asynchronous communication between the client and server, enabling dynamic updates to web pages without reloading. It uses techniques like `XMLHttpRequest` or the `fetch()` API to send and receive data in the background. In modern web applications, the `fetch()` API is more commonly used to implement AJAX.

**Using `XMLHttpRequest`**

```js
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error('Request failed: ' + xhr.status);
    }
  }
};
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
xhr.send();
```

**Using `fetch()`**

```js
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error('Fetch error:', error));
```

<!-- Source: /questions/explain-ajax-in-as-much-detail-as-possible/en-US.mdx -->

## Explain event delegation

<!-- Source: /questions/explain-event-delegation/en-US.mdx -->

Event delegation is a technique in JavaScript where a single event listener is attached to a parent element instead of attaching event listeners to multiple child elements. When an event occurs on a child element, the event bubbles up the DOM tree, and the parent element's event listener handles the event based on the target element.

Event delegation provides the following benefits:

- **Improved performance**: Attaching a single event listener is more efficient than attaching multiple event listeners to individual elements, especially for large or dynamic lists. This reduces memory usage and improves overall performance.
- **Simplified event handling**: With event delegation, you only need to write the event handling logic once in the parent element's event listener. This makes the code more maintainable and easier to update.
- **Dynamic element support**: Event delegation automatically handles events for dynamically added or removed elements within the parent element. There's no need to manually attach or remove event listeners when the DOM structure changes

However, do note that:

- It is important to identify the target element that triggered the event.
- Not all events can be delegated because they are not bubbled. Non-bubbling events include: `focus`, `blur`, `scroll`, `mouseenter`, `mouseleave`, `resize`, etc.

<!-- Source: /questions/explain-event-delegation/en-US.mdx -->

## Explain `Function.prototype.bind`

<!-- Source: /questions/explain-function-prototype-bind/en-US.mdx -->

`Function.prototype.bind` is a method in JavaScript that allows you to create a new function with a specific `this` value and optional initial arguments. It's primary purpose is to:

- **Binding `this` value to preserve context**: The primary purpose of `bind` is to bind the `this` value of a function to a specific object. When you call `func.bind(thisArg)`, it creates a new function with the same body as `func`, but with `this` permanently bound to `thisArg`.
- **Partial application of arguments**: `bind` also allows you to pre-specify arguments for the new function. Any arguments passed to `bind` after `thisArg` will be prepended to the arguments list when the new function is called.
- **Method borrowing**: `bind` allows you to borrow methods from one object and apply them to another object, even if they were not originally designed to work with that object.

The `bind` method is particularly useful in scenarios where you need to ensure that a function is called with a specific `this` context, such as in event handlers, callbacks, or method borrowing.

<!-- Source: /questions/explain-function-prototype-bind/en-US.mdx -->

## Explain "hoisting"

<!-- Source: /questions/explain-hoisting/en-US.mdx -->

- **Variable declarations (`var`)**: Declarations are hoisted, but not initializations. The value of the variable is `undefined` if accessed before initialization.
- **Variable declarations (`let` and `const`)**: Declarations are hoisted, but not initialized. Accessing them results in `ReferenceError` until the actual declaration is encountered.
- **Function expressions (`var`)**: Declarations are hoisted, but not initializations. The value of the variable is `undefined` if accessed before initialization.
- **Function declarations (`function`)**: Both declaration and definition are fully hoisted.
- **Class declarations (`class`)**: Declarations are hoisted, but not initialized. Accessing them results in `ReferenceError` until the actual declaration is encountered.
- **Import declarations (`import`)**: Declarations are hoisted, and side effects of importing the module are executed before the rest of the code.

The following behavior summarizes the result of accessing the variables before they are declared.

| Declaration                    | Accessing before declaration |
| ------------------------------ | ---------------------------- |
| `var foo`                      | `undefined`                  |
| `let foo`                      | `ReferenceError`             |
| `const foo`                    | `ReferenceError`             |
| `class Foo`                    | `ReferenceError`             |
| `var foo = function() { ... }` | `undefined`                  |
| `function foo() { ... }`       | Normal                       |
| `import`                       | Normal                       |

<!-- Source: /questions/explain-hoisting/en-US.mdx -->

## Explain how prototypal inheritance works

<!-- Source: /questions/explain-how-prototypal-inheritance-works/en-US.mdx -->

Prototypical inheritance in JavaScript is a way for objects to inherit properties and methods from other objects. Every JavaScript object has a special hidden property called `[[Prototype]]` (commonly accessed via `__proto__` or using `Object.getPrototypeOf()`) that is a reference to another object, which is called the object's "prototype". When a property is accessed on an object and if the property is not found on that object, the JavaScript engine looks at the object's `__proto__`, and the `__proto__`'s `__proto__` and so on, until it finds the property defined on one of the `__proto__`s or until it reaches the end of the prototype chain. This behavior simulates classical inheritance, but it is really more of [delegation than inheritance](https://davidwalsh.name/javascript-objects).

## Example of Prototypal Inheritance

```js
// Parent object constructor.
function Animal(name) {
  this.name = name;
}

// Add a method to the parent object's prototype.
Animal.prototype.makeSound = function () {
  console.log('The ' + this.constructor.name + ' makes a sound.');
};

// Child object constructor.
function Dog(name) {
  Animal.call(this, name); // Call the parent constructor.
}

// Set the child object's prototype to be the parent's prototype.
Object.setPrototypeOf(Dog.prototype, Animal.prototype);

// Add a method to the child object's prototype.
Dog.prototype.bark = function () {
  console.log('Woof!');
};

// Create a new instance of Dog.
const bolt = new Dog('Bolt');

// Call methods on the child object.
console.log(bolt.name); // "Bolt"
bolt.makeSound(); // "The Dog makes a sound."
bolt.bark(); // "Woof!"
```

Things to note are:

- `.makeSound` is not defined on `Dog`, so the JavaScript engine goes up the prototype chain and finds `.makeSound` on the inherited `Animal`.
- Using `Object.create()` to build the inheritance chain is no longer recommended. Use `Object.setPrototypeOf()` instead.

<!-- Source: /questions/explain-how-prototypal-inheritance-works/en-US.mdx -->

## Explain the difference between mutable and immutable objects

<!-- Source: /questions/explain-the-difference-between-mutable-and-immutable-objects/en-US.mdx -->

**Mutable objects** allow for modification of properties and values after creation, which is the default behavior for most objects.

```js
const mutableObject = {
  name: 'John',
  age: 30,
};

// Modify the object
mutableObject.name = 'Jane';

// The object has been modified
console.log(mutableObject); // Output: { name: 'Jane', age: 30 }
```

**Immutable objects** cannot be directly modified after creation. Its content cannot be changed without creating an entirely new value.

```js
const immutableObject = Object.freeze({
  name: 'John',
  age: 30,
});

// Attempt to modify the object
immutableObject.name = 'Jane';

// The object remains unchanged
console.log(immutableObject); // Output: { name: 'John', age: 30 }
```

The key difference between mutable and immutable objects is modifiability. Immutable objects cannot be modified after they are created, while mutable objects can be.

<!-- Source: /questions/explain-the-difference-between-mutable-and-immutable-objects/en-US.mdx -->

## Explain the difference between synchronous and asynchronous functions

<!-- Source: /questions/explain-the-difference-between-synchronous-and-asynchronous-functions/en-US.mdx -->

Synchronous functions are blocking while asynchronous functions are not. In synchronous functions, statements complete before the next statement is run. As a result, programs containing only synchronous code are evaluated exactly in order of the statements. The execution of the program is paused if one of the statements take a very long time.

```js
function sum(a, b) {
  console.log('Inside sum function');
  return a + b;
}

const result = sum(2, 3); // The program waits for sum() to complete before assigning the result
console.log('Result: ', result); // Output: 5

// Console output:
// Inside sum function
// Result: 5
```

Asynchronous functions usually accept a callback as a parameter and execution continue on to the next line immediately after the asynchronous function is invoked. The callback is only invoked when the asynchronous operation is complete and the call stack is empty. Heavy duty operations such as loading data from a web server or querying a database should be done asynchronously so that the main thread can continue executing other operations instead of blocking until that long operation to complete (in the case of browsers, the UI will freeze).

```js
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: 'John', age: 30 };
    callback(data); // Calling the callback function with data
  }, 2000); // Simulating a 2-second delay
}

console.log('Fetching data...');
fetchData((data) => {
  console.log(data); // Output: { name: 'John', age: 30 } (after 2 seconds)
});

console.log('Call made to fetch data'); // Output: This will be printed first

// Console output:
// Fetching data...
// Call made to fetch data
// { name: 'John', age: 30 }
```

<!-- Source: /questions/explain-the-difference-between-synchronous-and-asynchronous-functions/en-US.mdx -->

## Explain the differences between CommonJS modules and ES modules

<!-- Source: /questions/explain-the-differences-between-commonjs-modules-and-es-modules/en-US.mdx -->

In JavaScript, modules are reusable pieces of code that encapsulate functionality, making it easier to manage, maintain, and structure your applications. Modules allow you to break down your code into smaller, manageable parts, each with its own scope.

**CommonJS** is an older module system that was initially designed for server-side JavaScript development with Node.js. It uses the `require()` function to load modules and the `module.exports` or `exports` object to define the exports of a module.

```js
// my-module.js
const value = 42;
module.exports = { value };

// main.js
const myModule = require('./my-module.js');
console.log(myModule.value); // 42
```

**ES Modules** (ECMAScript Modules) are the standardized module system introduced in ES6 (ECMAScript 2015). They use the `import` and `export` statements to handle module dependencies.

```js
// my-module.js
export const value = 42;

// main.js
import { value } from './my-module.js';
console.log(value); // 42
```

**CommonJS vs ES modules**

| Feature | CommonJS | ES modules |
| --- | --- | --- |
| Module Syntax | `require()` for importing `module.exports` for exporting | `import` for importing `export` for exporting |
| Environment | Primarily used in Node.js for server-side development | Designed for both browser and server-side JavaScript (Node.js) |
| Loading | Synchronous loading of modules | Asynchronous loading of modules |
| Structure | Dynamic imports, can be conditionally called | Static imports/exports at the top level |
| File extensions | `.js` (default) | `.mjs` or `.js` (with `type: "module"` in `package.json`) |
| Browser support | Not natively supported in browsers | Natively supported in modern browsers |
| Optimization | Limited optimization due to dynamic nature | Allows for optimizations like tree-shaking due to static structure |
| Compatibility | Widely used in existing Node.js codebases and libraries | Newer standard, but gaining adoption in modern projects |

<!-- Source: /questions/explain-the-differences-between-commonjs-modules-and-es-modules/en-US.mdx -->

## Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`

<!-- Source: /questions/explain-the-differences-on-the-usage-of-foo-between-function-foo-and-var-foo-function/en-US.mdx -->

`function foo() {}` a function declaration while the `var foo = function() {}` is a function expression. The key difference is that function declarations have its body hoisted but the bodies of function expressions are not (they have the same hoisting behavior as `var`-declared variables).

If you try to invoke a function expression before it is declared, you will get an `Uncaught TypeError: XXX is not a function` error.

Function declarations can be called in the enclosing scope even before they are declared.

```js
foo(); // 'FOOOOO'
function foo() {
  console.log('FOOOOO');
}
```

Function expressions if called before they are declared will result in an error.

```js
foo(); // Uncaught TypeError: foo is not a function
var foo = function () {
  console.log('FOOOOO');
};
```

Another key difference is in the scope of the function name. Function expressions can be named by defining it after the `function` and before the parenthesis. However when using named function expressions, the function name is only accessible within the function itself. Trying to access it outside will result in an error or `undefined`.

```js
const myFunc = function namedFunc() {
  console.log(namedFunc); // Works
};
console.log(namedFunc); // undefined
```

**Note**: The examples uses `var` due to legacy reasons. Function expressions can be defined using `let` and `const` and the key difference is in the hoisting behavior of those keywords.

<!-- Source: /questions/explain-the-differences-on-the-usage-of-foo-between-function-foo-and-var-foo-function/en-US.mdx -->

## How do you abort a web request using `AbortController`?

<!-- Source: /questions/how-do-you-abort-a-web-request-using-abortcontrollers/en-US.mdx -->

`AbortController` is used to cancel ongoing asynchronous operations like fetch requests.

```js
const controller = new AbortController();
const signal = controller.signal;

fetch('https://jsonplaceholder.typicode.com/todos/1', { signal })
  .then((response) => {
    // Handle response
  })
  .catch((error) => {
    if (error.name === 'AbortError') {
      console.log('Request aborted');
    } else {
      console.error('Error:', error);
    }
  });

// Call abort() to abort the request
controller.abort();
```

Aborting web requests is useful for:

- Canceling requests based on user actions.
- Prioritizing the latest requests in scenarios with multiple simultaneous requests.
- Canceling requests that are no longer needed, e.g. after the user has navigated away from the page.

<!-- Source: /questions/how-do-you-abort-a-web-request-using-abortcontrollers/en-US.mdx -->

## How does JavaScript garbage collection work?

<!-- Source: /questions/how-does-javascript-garbage-collection-work/en-US.mdx -->

Garbage collection in JavaScript is an automatic memory management mechanism that reclaims memory occupied by objects and variables that are no longer in use by the program. The two most common algorithms are mark-and-sweep and generational garbage collection.

**Mark-and-sweep**

The most common garbage collection algorithm used in JavaScript is the Mark-and-sweep algorithm. It operates in two phases:

- **Marking phase**: The garbage collector traverses the object graph, starting from the root objects (global variables, currently executing functions, etc.), and marks all reachable objects as "in-use".
- **Sweeping phase**: The garbage collector sweeps through memory, removing all unmarked objects, as they are considered unreachable and no longer needed.

This algorithm effectively identifies and removes objects that have become unreachable, freeing up memory for new allocations.

**Generational garbage collection**

Leveraged by modern JavaScript engines, objects are divided into different generations based on their age and usage patterns. Frequently accessed objects are moved to younger generations, while less frequently used objects are promoted to older generations. This optimization reduces the overhead of garbage collection by focusing on the younger generations, where most objects are short-lived.

Different JavaScript engines (differs according to browsers) implement different garbage collection algorithms and there's no standard way of doing garbage collection.

<!-- Source: /questions/how-does-javascript-garbage-collection-work/en-US.mdx -->

## What advantage is there for using the arrow syntax for a method in a constructor?

<!-- Source: /questions/what-advantage-is-there-for-using-the-arrow-syntax-for-a-method-in-a-constructor/en-US.mdx -->

The main advantage of using an arrow function as a method inside a constructor is that the value of `this` gets set at the time of the function creation and can't change after that. When the constructor is used to create a new object, `this` will always refer to that object.

For example, let's say we have a `Person` constructor that takes a first name as an argument has two methods to `console.log()` that name, one as a regular function and one as an arrow function:

```js
const Person = function (name) {
  this.name = name;
  this.sayName1 = function () {
    console.log(this.name);
  };
  this.sayName2 = () => {
    console.log(this.name);
  };
};

const john = new Person('John');
const dave = new Person('Dave');

john.sayName1(); // John
john.sayName2(); // John

// The regular function can have its `this` value changed, but the arrow function cannot
john.sayName1.call(dave); // Dave (because `this` is now the dave object)
john.sayName2.call(dave); // John

john.sayName1.apply(dave); // Dave (because `this` is now the dave object)
john.sayName2.apply(dave); // John

john.sayName1.bind(dave)(); // Dave (because `this` is now the dave object)
john.sayName2.bind(dave)(); // John

const sayNameFromWindow1 = john.sayName1;
sayNameFromWindow1(); // undefined (because `this` is now the window object)

const sayNameFromWindow2 = john.sayName2;
sayNameFromWindow2(); // John
```

The main takeaway here is that `this` can be changed for a normal function, but `this` always stays the same for an arrow function. So even if you are passing around your arrow function to different parts of your application, you wouldn't have to worry about the value of `this` changing.

<!-- Source: /questions/what-advantage-is-there-for-using-the-arrow-syntax-for-a-method-in-a-constructor/en-US.mdx -->

## What are iterators and generators and what are they used for?

<!-- Source: /questions/what-are-iterators-and-generators-and-what-are-they-used-for/en-US.mdx -->

In JavaScript, iterators and generators are powerful tools for managing sequences of data and controlling the flow of execution in a more flexible way.

**Iterators** are objects that define a sequence and potentially a return value upon its termination. It adheres to a specific interface:

- An iterator object must implement a `next()` method.
- The `next()` method returns an object with two properties:
  - `value`: The next value in the sequence.
  - `done`: A boolean that is `true` if the iterator has finished its sequence, otherwise `false`.

```js
const iterator = {
  current: 0,
  last: 5,
  next() {
    if (this.current <= this.last) {
      return { value: this.current++, done: false };
    } else {
      return { value: undefined, done: true };
    }
  },
};

let result = iterator.next();
while (!result.done) {
  console.log(result.value); // Logs 0, 1, 2, 3, 4, 5
  result = iterator.next();
}
```

**Generators** are a special functions that **can pause execution and resume at a later point**. It uses the `function*` syntax and the `yield` keyword to control the flow of execution. When you call a generator function, it doesn't execute completely like a regular function. Instead, it returns an iterator object. Calling the `next()` method on the returned iterator advances the generator to the next `yield` statement, and the value after `yield` becomes the return value of `next()`.

```js
function* numberGenerator() {
  let num = 0;
  while (num <= 5) {
    yield num++;
  }
}

const gen = numberGenerator();
console.log(gen.next()); // { value: 0, done: false }
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: 4, done: false }
console.log(gen.next()); // { value: 5, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

Generators are powerful for creating iterators on-demand, especially for infinite sequences or complex iteration logic. They can be used for:

- Lazy evaluation – processing elements only when needed, improving memory efficiency for large datasets.
- Implementing iterators for custom data structures.
- Creating asynchronous iterators for handling data streams.

<!-- Source: /questions/what-are-iterators-and-generators-and-what-are-they-used-for/en-US.mdx -->

## What are JavaScript object getters and setters for?

<!-- Source: /questions/what-are-javascript-object-getters-and-setters-for/en-US.mdx -->

JavaScript object getters and setters are used to control access to an object's properties. They provide a way to encapsulate the implementation details of a property and define custom behavior when getting or setting its value.

Getters and setters are defined using the `get` and `set` keywords, respectively, followed by a function that is executed when the property is accessed or assigned a new value.

Here's a code example demonstrating the use of getters and setters:

```js
const person = {
  _name: 'John Doe', // Private property

  get name() {
    // Getter
    return this._name;
  },

  set name(newName) {
    // Setter
    if (newName.trim().length > 0) {
      this._name = newName;
    } else {
      console.log('Invalid name');
    }
  },
};

// Accessing the name property using the getter
console.log(person.name); // Output: 'John Doe'

// Setting the name property using the setter
person.name = 'Jane Smith'; // Setter is called
console.log(person.name); // Output: 'Jane Smith'

person.name = ''; // Setter is called, but the value is not set due to validation
console.log(person.name); // Output: 'Jane Smith'
```

<!-- Source: /questions/what-are-javascript-object-getters-and-setters-for/en-US.mdx -->

## What are JavaScript object property flags and descriptors?

<!-- Source: /questions/what-are-javascript-object-property-flags-and-descriptors/en-US.mdx -->

In JavaScript, property flags and descriptors manage the behavior and attributes of object properties.

**Property flags**

Property flags are used to specify the behavior of a property on an object. Here are the available flags:

- `writable`: Specifies whether the property can be written to. Defaults to `true`.
- `enumerable`: Specifies whether the property is enumerable. Defaults to `true`.
- `configurable`: Specifies whether the property can be deleted or its attributes changed. Default is `true`.

**Property descriptors**

These provide detailed information about an object's property, including its value and flags. They are retrieved using `Object.getOwnPropertyDescriptor()` and set using `Object.defineProperty()`.

The use cases of property descriptors are as follows:

- Making a property non-writable by setting `writable: false` to ensure data consistency.
- Hiding a property from enumeration by setting `enumerable: false`.
- Preventing property deletion and modification by setting `configurable: false`.
- Freezing or sealing objects to prevent modifications globally.

<!-- Source: /questions/what-are-javascript-object-property-flags-and-descriptors/en-US.mdx -->

## What are JavaScript polyfills for?

<!-- Source: /questions/what-are-javascript-polyfills-for/en-US.mdx -->

Polyfills in JavaScript are pieces of code that provide modern functionality to older browsers that lack native support for those features. They bridge the gap between the JavaScript language features and APIs available in modern browsers and the limited capabilities of older browser versions.

They can be implemented manually or included through libraries and are often used in conjunction with feature detection.

Common use cases include:

- **New JavaScript Methods**: For example, `Array.prototype.includes()`, `Object.assign()`, etc.
- **New APIs**: Such as `fetch()`, `Promise`, `IntersectionObserver`, etc. Modern browsers support these now but for a long time they have to be polyfilled.

Libraries and services for polyfills:

- **`core-js`**: A modular standard library for JavaScript which includes polyfills for a wide range of ECMAScript features.

  ```js
  import 'core-js/actual/array/flat-map'; // With this, Array.prototype.flatMap is available to be used.

  [1, 2].flatMap((it) => [it, it]); // => [1, 1, 2, 2]
  ```

- **Polyfill.io**: A service that provides polyfills based on the features and user agents specified in the request.

  ```js
  <script src="https://polyfill.io/v3/polyfill.min.js"></script>
  ```

<!-- Source: /questions/what-are-javascript-polyfills-for/en-US.mdx -->

## What are server-sent events?

<!-- Source: /questions/what-are-server-sent-events/en-US.mdx -->

[Server-sent events (SSE)](https://html.spec.whatwg.org/multipage/comms.html#the-eventsource-interface) is a standard that allows a web page to receive automatic updates from a server via an HTTP connection. Server-sent events are used with `EventSource` instances that opens a connection with a server and allows client to receive events from the server. Connections created by server-sent events are persistent (similar to the `WebSocket`s), however there are a few differences:

| Property | `WebSocket` | `EventSource` |
| --- | --- | --- |
| Direction | Bi-directional – both client and server can exchange messages | Unidirectional – only server sends data |
| Data type | Binary and text data | Only text |
| Protocol | WebSocket protocol (`ws://`) | Regular HTTP (`http://`) |

**Creating an event source**

```js
const eventSource = new EventSource('/sse-stream');
```

**Listening for events**

```js
// Fired when the connection is established.
eventSource.addEventListener('open', () => {
  console.log('Connection opened');
});

// Fired when a message is received from the server.
eventSource.addEventListener('message', (event) => {
  console.log('Received message:', event.data);
});

// Fired when an error occurs.
eventSource.addEventListener('error', (error) => {
  console.error('Error occurred:', error);
});
```

**Sending events from server**

```js
const express = require('express');
const app = express();

app.get('/sse-stream', (req, res) => {
  // `Content-Type` need to be set to `text/event-stream`.
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // Each message should be prefixed with data.
  const sendEvent = (data) => res.write(`data: ${data}\n\n`);

  sendEvent('Hello from server');

  const intervalId = setInterval(() => sendEvent(new Date().toString()), 1000);

  res.on('close', () => {
    console.log('Client closed connection');
    clearInterval(intervalId);
  });
});

app.listen(3000, () => console.log('Server started on port 3000'));
```

In this example, the server sends a "Hello from server" message initially, and then sends the current date every second. The connection is kept alive until the client closes it

<!-- Source: /questions/what-are-server-sent-events/en-US.mdx -->

## What are `Symbol`s used for?

<!-- Source: /questions/what-are-symbols-used-for/en-US.mdx -->

`Symbol`s in JavaScript are a new primitive data type introduced in ES6 (ECMAScript 2015). They are unique and immutable identifiers that is primarily for object property keys to avoid name collisions. These values can be created using `Symbol(...)` function, and each `Symbol` value is guaranteed to be unique, even if they have the same key/description. `Symbol` properties are not enumerable in `for...in` loops or `Object.keys()`, making them suitable for creating private/internal object state.

```js
let sym1 = Symbol();
let sym2 = Symbol('myKey');

console.log(typeof sym1); // "symbol"
console.log(sym1 === sym2); // false, because each symbol is unique

let obj = {};
let sym = Symbol('uniqueKey');

obj[sym] = 'value';
console.log(obj[sym]); // "value"
```

**Note**: The `Symbol()` function must be called without the `new` keyword. It is not exactly a constructor because it can only be called as a function instead of with `new Symbol()`.

<!-- Source: /questions/what-are-symbols-used-for/en-US.mdx -->

## What are the advantages and disadvantages of using AJAX?

<!-- Source: /questions/what-are-the-advantages-and-disadvantages-of-using-ajax/en-US.mdx -->

AJAX (Asynchronous JavaScript and XML) is a technique in JavaScript that allows web pages to send and retrieve data asynchronously from servers without refreshing or reloading the entire page.

**Advantages**

- **Smoother User Experience**: Updates happen without full page reloads, like in mail and chat applications.
- **Lighter server Load**: Only necessary data is fetched via AJAX, reducing server load and improving perceived performance of webpages.
- **Maintains client state**: User interactions and any client states are persisted within the page.

**Disadvantages**

- **Reliance on JavaScript**: If disabled, Ajax functionality breaks.
- **Bookmarking issues**: Dynamic content makes bookmarking specific page states difficult.
- **SEO Challenges**: Search engines may struggle to index dynamic content.
- **Performance Concerns**: Processing Ajax data on low-end devices can be slow.

<!-- Source: /questions/what-are-the-advantages-and-disadvantages-of-using-ajax/en-US.mdx -->

## What are the benefits of using spread syntax and how is it different from rest syntax?

<!-- Source: /questions/what-are-the-benefits-of-using-spread-syntax-and-how-is-it-different-from-rest-syntax/en-US.mdx -->

**Spread syntax** (`...`) allows an iterable (like an array or string) to be expanded into individual elements. This is often used as a convenient and modern way to create new arrays or objects by combining existing ones.

| Operation      | Traditional                     | Spread                 |
| -------------- | ------------------------------- | ---------------------- |
| Array cloning  | `arr.slice()`                   | `[...arr]`             |
| Array merging  | `arr1.concat(arr2)`             | `[...arr1, ...arr2]`   |
| Object cloning | `Object.assign({}, obj)`        | `{ ...obj }`           |
| Object merging | `Object.assign({}, obj1, obj2)` | `{ ...obj1, ...obj2 }` |

**Rest syntax** is the opposite of what spread syntax does. It collects a variable number of arguments into an array. This is often used in function parameters to handle a dynamic number of arguments.

```js
// Using rest syntax in a function
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
```

<!-- Source: /questions/what-are-the-benefits-of-using-spread-syntax-and-how-is-it-different-from-rest-syntax/en-US.mdx -->

## What are the differences between ES2015 classes and ES5 function constructors?

<!-- Source: /questions/what-are-the-differences-between-es6-class-and-es5-function-constructors/en-US.mdx -->

ES2015 introduces a new way of creating classes, which provides a more intuitive and concise way to define and work with objects and inheritance compared to the ES5 function constructor syntax. Here's an example of each:

```js
// ES5 Function Constructor
function Person(name) {
  this.name = name;
}

// ES2015 Class
class Person {
  constructor(name) {
    this.name = name;
  }
}
```

For simple constructors, they look pretty similar. The main difference in the constructor comes when using inheritance. If we want to create a `Student` class that subclasses `Person` and add a `studentId` field, this is what we have to do in addition to the above.

```js
// ES5 Function Constructor
function Student(name, studentId) {
  // Call constructor of superclass to initialize superclass-derived members.
  Person.call(this, name);

  // Initialize subclass's own members.
  this.studentId = studentId;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// ES2015 Class
class Student extends Person {
  constructor(name, studentId) {
    super(name);
    this.studentId = studentId;
  }
}
```

It's much more verbose to use inheritance in ES5 and the ES2015 version is easier to understand and remember.

**Comparison of ES5 function constructors vs ES2015 classes**

| Feature | ES5 Function Constructor | ES2015 Class |
| --- | --- | --- |
| Syntax | Uses function constructors and prototypes | Uses `class` keyword |
| Constructor | Function with properties assigned using `this` | `constructor` method inside the class |
| Method Definition | Defined on the prototype | Defined inside the class body |
| Static Methods | Added directly to the constructor function | Defined using the `static` keyword |
| Inheritance | Uses `Object.create()` and manually sets prototype chain | Uses `extends` keyword and `super` function |
| Readability | Less intuitive and more verbose | More concise and intuitive |

<!-- Source: /questions/what-are-the-differences-between-es6-class-and-es5-function-constructors/en-US.mdx -->

## What are the differences between `Map`/`Set` vs `WeakMap`/`WeakSet`?

<!-- Source: /questions/what-are-the-differences-between-map-set-and-weakmap-weakset/en-US.mdx -->

The primary difference between `Map`/`Set` and `WeakMap`/`WeakSet` in JavaScript lies in how they handle keys. Here's a breakdown:

**`Map` vs. `WeakMap`**

`Map`s allows any data type (strings, numbers, objects) as keys. The key-value pairs remain in memory as long as the `Map` object itself is referenced. Thus they are suitable for general-purpose key-value storage where you want to maintain references to both keys and values. Common use cases include storing user data, configuration settings, or relationships between objects.

`WeakMap`s only allows objects as keys. However, these object keys are held weakly. This means the garbage collector can remove them from memory even if the `WeakMap` itself still exists, as long as there are no other references to those objects. `WeakMap`s are ideal for scenarios where you want to associate data with objects without preventing those objects from being garbage collected. This can be useful for things like:

- Caching data based on objects without preventing garbage collection of the objects themselves.
- Storing private data associated with DOM nodes without affecting their lifecycle.

**`Set` vs. `WeakSet`**

Similar to `Map`, `Set`s allow any data type as keys. The elements within a `Set` must be unique. `Set`s are useful for storing unique values and checking for membership efficiently. Common use cases include removing duplicates from arrays or keeping track of completed tasks.

On the other hand, `WeakSet` only allows objects as elements, and these object elements are held weakly, similar to `WeakMap` keys. `WeakSet`s are less commonly used, but applicable when you want a collection of unique objects without affecting their garbage collection. This might be necessary for:

- Tracking DOM nodes that have been interacted with without affecting their memory management.
- Implementing custom object weak references for specific use cases.

**Here's a table summarizing the key differences:**

| Feature | Map | WeakMap | Set | WeakSet |
| --- | --- | --- | --- | --- |
| Key Types | Any data type | Objects (weak references) | Any data type (unique) | Objects (weak references, unique) |
| Garbage Collection | Keys and values are not garbage collected | Keys can be garbage collected if not referenced elsewhere | Elements are not garbage collected | Elements can be garbage collected if not referenced elsewhere |
| Use Cases | General-purpose key-value storage | Caching, private DOM node data | Removing duplicates, membership checks | Object weak references, custom use cases |

**Choosing between them**

- Use `Map` and `Set` for most scenarios where you need to store key-value pairs or unique elements and want to maintain references to both the keys/elements and the values.
- Use `WeakMap` and `WeakSet` cautiously in specific situations where you want to associate data with objects without affecting their garbage collection. Be aware of the implications of weak references and potential memory leaks if not used correctly.

<!-- Source: /questions/what-are-the-differences-between-map-set-and-weakmap-weakset/en-US.mdx -->

## What are the differences between variables created using `let`, `var` or `const`?

<!-- Source: /questions/what-are-the-differences-between-variables-created-using-let-var-or-const/en-US.mdx -->

In JavaScript, `let`, `var`, and `const` are all keywords used to declare variables, but they differ significantly in terms of scope, initialization rules, whether they can be redeclared or reassigned and the behavior when they are accessed before declaration:

| Behavior | `var` | `let` | `const` |
| --- | --- | --- | --- |
| Scope | Function or Global | Block | Block |
| Initialization | Optional | Optional | Required |
| Redeclaration | Yes | No | No |
| Reassignment | Yes | Yes | No |
| Accessing before declaration | `undefined` | `ReferenceError` | `ReferenceError` |

<!-- Source: /questions/what-are-the-differences-between-variables-created-using-let-var-or-const/en-US.mdx -->

## What are the differences between `XMLHttpRequest` and `fetch()`?

<!-- Source: /questions/what-are-the-differences-between-xmlhttprequest-and-fetch/en-US.mdx -->

`XMLHttpRequest` (XHR) and `fetch()` API are both used for asynchronous HTTP requests in JavaScript (AJAX). `fetch()` offers a cleaner syntax, promise-based approach, and more modern feature set compared to XHR. However, there are some differences:

- `XMLHttpRequest` event callbacks, while `fetch()` utilizes promise chaining.
- `fetch()` provides more flexibility in headers and request bodies.
- `fetch()` support cleaner error handling with `catch()`.
- Handling caching with `XMLHttpRequest` is difficult but caching is supported by `fetch()` by default in the `options.cache` object (`cache` value of second parameter) to `fetch()` or `Request()`.
- `fetch()` requires an `AbortController` for cancelation, while for `XMLHttpRequest`, it provides `abort()` property.
- `XMLHttpRequest` has god support for progress tracking, which `fetch()` lacks.
- `XMLHttpRequest` is only available in the browser and not natively supported in Node.js environments. On the other hand `fetch()` is part of the JavaScript language and is supported on all modern JavaScript runtimes.

These days `fetch()` is preferred for its cleaner syntax and modern features.

<!-- Source: /questions/what-are-the-differences-between-xmlhttprequest-and-fetch/en-US.mdx -->

## What are the pros and cons of using Promises instead of callbacks?

<!-- Source: /questions/what-are-the-pros-and-cons-of-using-promises-instead-of-callbacks/en-US.mdx -->

Promises offer a cleaner alternative to callbacks, helping to avoid callback hell and making asynchronous code more readable. They facilitate writing sequential and parallel asynchronous operations with ease. However, using promises may introduce slightly more complex code.

<!-- Source: /questions/what-are-the-pros-and-cons-of-using-promises-instead-of-callbacks/en-US.mdx -->

## What are the various data types in JavaScript?

<!-- Source: /questions/what-are-the-various-data-types-in-javascript/en-US.mdx -->

In JavaScript, data types can be categorized into `primitive` and `non-primitive` types:

**Primitive data types**

- **Number**: Represents both integers and floating-point numbers.
- **String**: Represents sequences of characters.
- **Boolean**: Represents `true` or `false` values.
- **Undefined**: A variable that has been declared but not assigned a value.
- **Null**: Represents the intentional absence of any object value.
- **Symbol**: A unique and immutable value used as object property keys. Read more in our [deep dive on `Symbol`s](/questions/quiz/what-are-symbols-used-for)
- **BigInt**: Represents integers with arbitrary precision.

**Non-primitive (Reference) data types**

- **Object**: Used to store collections of data.
- **Array**: An ordered collection of data.
- **Function**: A callable object.
- **Date**: Represents dates and times.
- **RegExp**: Represents regular expressions.
- **Map**: A collection of keyed data items.
- **Set**: A collection of unique values.

The primitive types store a single value, while non-primitive types can store collections of data or complex entities.

<!-- Source: /questions/what-are-the-various-data-types-in-javascript/en-US.mdx -->

## What are the various ways to create objects in JavaScript?

<!-- Source: /questions/what-are-the-various-ways-to-create-objects-in-javascript/en-US.mdx -->

Creating objects in JavaScript offers several methods:

- **Object literals (`{}`)**: Simplest and most popular approach. Define key-value pairs within curly braces.
- **`Object()` constructor**: Use `new Object()` with dot notation to add properties.
- **`Object.create()`**: Create new objects using existing objects as prototypes, inheriting properties and methods.
- **Constructor functions**: Define blueprints for objects using functions, creating instances with `new`.
- **ES2015 classes**: Structured syntax similar to other languages, using `class` and `constructor` keywords.

<!-- Source: /questions/what-are-the-various-ways-to-create-objects-in-javascript/en-US.mdx -->

## What are workers in JavaScript used for?

<!-- Source: /questions/what-are-workers-in-javascript-used-for/en-US.mdx -->

Workers in JavaScript are background threads that allow you to run scripts in parallel with the main execution thread, without blocking or interfering with the user interface. Their key features include:

- **Parallel processing**: Workers run in a separate thread from the main thread, allowing your web page to remain responsive to user interactions while the worker performs its tasks. It's useful for moving CPU-intensive work off the main thread and be free from JavaScript's single-threaded nature.
- **Communication**: Uses `postMessage()` and `onmessage`/ `'message'` event for messaging.
- **Access to web APIs**: Workers have access to various Web APIs, including `fetch()`, IndexedDB, and Web Storage, allowing them to perform tasks like data fetching and persisting data independently.
- **No DOM access**: Workers cannot directly manipulate the DOM, thus cannot interact with the UI, ensuring they don't accidentally interfere with the main thread's operation.

There are three main types of workers in JavaScript:

- **Web workers / Dedicated workers**
  - Run scripts in background threads, separate from the main UI thread.
  - Useful for CPU-intensive tasks like data processing, calculations, etc.
  - Cannot directly access or manipulate the DOM.
- **Service workers**
  - Act as network proxies, handling requests between the app and network.
  - Enable offline functionality, caching, and push notifications.
  - Runs independently of the web page, even when it's closed.
- **Shared workers**
  - Can be shared by multiple scripts running in different windows or frames, as long as they're in the same domain.
  - Scripts communicate with the shared worker by sending and receiving messages.
  - Useful for coordinating tasks across different parts of a web page.

<!-- Source: /questions/what-are-workers-in-javascript-used-for/en-US.mdx -->

## What is event loop?

<!-- Source: /questions/what-is-event-loop-what-is-the-difference-between-call-stack-and-task-queue/en-US.mdx -->

The event loop is concept within the browser runtime environment regarding how asynchronous operations are executed within JavaScript engines. It works as such:

1. The JavaScript engine starts executing scripts, placing synchronous operations on the call stack.
2. When an asynchronous operation is encountered (e.g., `setTimeout()`, HTTP request), it is offloaded to the respective Web API or Node.js API to handle the operation in the background.
3. Once the asynchronous operation completes, its callback function is placed in the respective queues – task queues (also known as macrotask queues / callback queues) or microtask queues. We will refer to "task queue" as "macrotask queue" from here on to better differentiate from the microtask queue.
4. The event loop continuously monitors the call stack and executes items on the call stack. If/when the call stack is empty:
   1. Microtask queue is processed. Microtasks include promise callbacks (`then`, `catch`, `finally`), `MutationObserver` callbacks, and calls to `queueMicrotask()`. The event loop takes the first callback from the microtask queue and pushes it to the call stack for execution. This repeats until the microtask queue is empty.
   2. Macrotask queue is processed. Macrotasks include web APIs like `setTimeout()`, HTTP requests, user interface event handlers like clicks, scrolls, etc. The event loop dequeues the first callback from the macrotask queue and pushes it onto the call stack for execution. However, after a macrotask queue callback is processed, the event loop does not proceed with the next macrotask yet! The event loop first checks the microtask queue. Checking the microtask queue is necessary as microtasks have higher priority than macrotask queue callbacks. The macrotask queue callback that was just executed could have added more microtasks!
      1. If the microtask queue is non-empty, process them as per the previous step.
      2. If the microtask queue is empty, the next macrotask queue callback is processed. This repeats until the macrotask queue is empty.
5. This process continues indefinitely, allowing the JavaScript engine to handle both synchronous and asynchronous operations efficiently without blocking the call stack.

The unfortunate truth is that it is extremely hard to explain the event loop well using only text. We recommend checking out one of the following excellent videos explaining the event loop:

- [JavaScript Visualized - Event Loop, Web APIs, (Micro)task Queue](https://www.youtube.com/watch?v=eiC58R16hb8) (2024): Lydia Hallie is a popular educator on JavaScript and this is the best recent videos explaining the event loop. There's also an [accompanying blog post](https://www.lydiahallie.com/blog/event-loop) for those who prefer detailed text-based explanations.
- [In the Loop](https://www.youtube.com/watch?v=cCOL7MC4Pl0) (2018): Jake Archibald previously from the Chrome team provides a visual demonstration of the event loop during JSConf 2018, accounting for different types of tasks.
- [What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ) (2014): Philip Robert's gave this epic talk at JSConf 2014 and it is one of the most viewed JavaScript videos on YouTube.

We recommend watching [Lydia's video](https://www.youtube.com/watch?v=eiC58R16hb8) as it is the most modern and concise explanation standing at only 13 minutes long whereas the other videos are at least 30 minutes long. Her video is sufficient for the purpose of interviews.

<!-- Source: /questions/what-is-event-loop-what-is-the-difference-between-call-stack-and-task-queue/en-US.mdx -->

## What is the definition of a higher-order function?

<!-- Source: /questions/what-is-the-definition-of-a-higher-order-function/en-US.mdx -->

A higher-order function is any function that takes one or more functions as arguments, which it uses to operate on some data, and/or returns a function as a result.

Higher-order functions are meant to abstract some operation that is performed repeatedly. The classic example of this is `Array.prototype.map()`, which takes an array and a function as arguments. `Array.prototype.map()` then uses this function to transform each item in the array, returning a new array with the transformed data. Other popular examples in JavaScript are `Array.prototype.forEach()`, `Array.prototype.filter()`, and `Array.prototype.reduce()`. A higher-order function doesn't just need to be manipulating arrays as there are many use cases for returning a function from another function. `Function.prototype.bind()` is an example that returns another function.

Imagine a scenario where we have an array of names that we need to transform to uppercase.

```js
const names = ['irish', 'daisy', 'anna'];
```

The imperative way will be as such:

```js
function transformNamesToUppercase(names) {
  const results = [];
  for (let i = 0; i < names.length; i++) {
    results.push(names[i].toUpperCase());
  }
  return results;
}

transformNamesToUppercase(names); // ['IRISH', 'DAISY', 'ANNA']
```

Using `Array.prototype.map(transformerFn)` makes the code shorter and more declarative.

```js
function transformNamesToUppercase(names) {
  return names.map((name) => name.toUpperCase());
}

transformNamesToUppercase(names); // ['IRISH', 'DAISY', 'ANNA']
```

<!-- Source: /questions/what-is-the-definition-of-a-higher-order-function/en-US.mdx -->

## What is the difference between `==` and `===` in JavaScript?

<!-- Source: /questions/what-is-the-difference-between-double-equal-and-triple-equal/en-US.mdx -->

`==` is the abstract equality operator while `===` is the strict equality operator. The `==` operator will compare for equality after doing any necessary type conversions. The `===` operator will not do type conversion, so if two values are not the same type `===` will simply return `false`.

| Operator | `==` | `===` |
| --- | --- | --- |
| Name | (Loose) Equality operator | Strict equality operator |
| Type coercion | Yes | No |
| Compares value and type | No | Yes |

<!-- Source: /questions/what-is-the-difference-between-double-equal-and-triple-equal/en-US.mdx -->

## What is `"use strict";`?

<!-- Source: /questions/what-is-use-strict-what-are-the-advantages-and-disadvantages-to-using-it/en-US.mdx -->

`'use strict'` is a statement used to enable strict mode to entire scripts or individual functions. Strict mode is a way to opt into a restricted variant of JavaScript.

**Advantages**

- Makes it impossible to accidentally create global variables.
- Makes assignments which would otherwise silently fail to throw an exception.
- Makes attempts to delete undeletable properties throw an exception (where before the attempt would simply have no effect).
- Requires that function parameter names be unique.
- `this` is `undefined` in the global context.
- It catches some common coding bloopers, throwing exceptions.
- It disables features that are confusing or poorly thought out.

**Disadvantages**

- Many missing features that some developers might be used to.
- No more access to `function.caller` and `function.arguments`.
- Concatenation of scripts written in different strict modes might cause issues.

Overall, the benefits outweigh the disadvantages and there is not really a need to rely on the features that strict mode prohibits. We should all be using strict mode by default.

<!-- Source: /questions/what-is-use-strict-what-are-the-advantages-and-disadvantages-to-using-it/en-US.mdx -->

## What language constructions do you use for iterating over object properties and array items?

<!-- Source: /questions/what-language-constructs-do-you-use-for-iterating-over-object-properties-and-array-items/en-US.mdx -->

There are multiple ways to iterate over object properties as well as array in JavaScript. The following are a few of them:

### Iterating over object properties

#### Good old `for...in` loop

The `for...in` loop iterates over all enumerable properties of an object, including inherited enumerable properties. So it is important to have a check if you only want to iterate over object's own properties

```js
const obj = {
  a: 1,
  b: 2,
  c: 3,
};

for (const key in obj) {
  // Optional: to avoid iterating over inherited properties
  if (obj.hasOwn(obj, key)) {
    console.log(`${key}: ${obj[key]}`);
  }
}
```

#### Using `Object.keys()`

`Object.keys()` returns an array of the object's own enumerable property names. You can then use a for...of loop or forEach to iterate over this array.

```js
const obj = {
  a: 1,
  b: 2,
  c: 3,
};

Object.keys(obj).forEach((key) => {
  console.log(`${key}: ${obj[key]}`);
});
```

### Iterating over array

Most common ways to iterate over array are using `for` loop and `Array.prototype.forEach` method.

#### Using `for` loop

```js
let array = [1, 2, 3, 4, 5, 6];
for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}
```

#### Using `Array.prototype.forEach` Method:

```js
let array = [1, 2, 3, 4, 5, 6];
array.forEach((number, index) => {
  console.log(`${number} at index ${index}`);
});
```

#### Using `for...of` loop

This method is the newest and most convenient way to iterate over arrays. It automatically iterates over each element without requiring you to manage the index.

```js
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(number);
}
```

There are also other inbuilt methods available which are suitable for specific scenarios for example:

- `Array.prototype.filter`: You can use the `filter` method to create a new array containing only the elements that satisfy a certain condition.
- `Array.prototype.map`: You can use the `map` method to create a new array based on the existing one, transforming each element with a provided function.
- `Array.prototype.reduce`: You can use the `reduce` method to combine all elements into a single value by repeatedly calling a function that takes two arguments: the accumulated value and the current element.

<!-- Source: /questions/what-language-constructs-do-you-use-for-iterating-over-object-properties-and-array-items/en-US.mdx -->

## What's a typical use case for anonymous functions?

<!-- Source: /questions/whats-a-typical-use-case-for-anonymous-functions/en-US.mdx -->

Anonymous function in Javascript is a function that does not have any name associated with it. They are typically used as arguments to other functions or assigned to variables.

```js
// The filter method is passed an anonymous function.
arr.filter((x) => x > 1);
```

They are often used as arguments to other functions, known as higher-order functions, which can take functions as input and return a function as output. Anonymous functions can access variables from the outer scope, a concept known as closures, allowing them to "close over" and remember the environment in which they were created.

```js
// Encapsulating Code
(function () {
  // Some code here.
})();

// Callbacks
setTimeout(function () {
  console.log('Hello world!');
}, 1000);

// Functional programming constructs
const arr = [1, 2, 3];
const double = arr.map(function (el) {
  return el * 2;
});
console.log(double); // [2, 4, 6]
```

<!-- Source: /questions/whats-a-typical-use-case-for-anonymous-functions/en-US.mdx -->

## What's the difference between a variable that is: `null`, `undefined` or undeclared?

<!-- Source: /questions/whats-the-difference-between-a-variable-that-is-null-undefined-or-undeclared-how-would-you-go-about-checking-for-any-of-these-states/en-US.mdx -->

| Trait | `null` | `undefined` | Undeclared |
| --- | --- | --- | --- |
| Meaning | Explicitly set by the developer to indicate that a variable has no value | Variable has been declared but not assigned a value | Variable has not been declared at all |
| Type | `object` | `undefined` | Throws a `ReferenceError` |
| Equality Comparison | `null == undefined` is `true` | `undefined == null` is `true` | Throws a `ReferenceError` |

<!-- Source: /questions/whats-the-difference-between-a-variable-that-is-null-undefined-or-undeclared-how-would-you-go-about-checking-for-any-of-these-states/en-US.mdx -->

## Why is extending built-in JavaScript objects not a good idea?

<!-- Source: /questions/why-is-extending-built-in-javascript-objects-not-a-good-idea/en-US.mdx -->

Extending a built-in/native JavaScript object means adding properties/functions to its `prototype`. While this may seem like a good idea at first, it is dangerous in practice. Imagine your code uses a few libraries that both extend the `Array.prototype` by adding the same `contains` method, the implementations will overwrite each other and your code will have unpredictable behavior if these two methods do not work the same way.

The only time you may want to extend a native object is when you want to create a polyfill, essentially providing your own implementation for a method that is part of the JavaScript specification but might not exist in the user's browser due to it being an older browser.

<!-- Source: /questions/why-is-extending-built-in-javascript-objects-not-a-good-idea/en-US.mdx -->

## Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?

<!-- Source: /questions/why-is-it-in-general-a-good-idea-to-leave-the-global-scope-of-a-website-as-is-and-never-touch-it/en-US.mdx -->

JavaScript that is executed in the browser has access to the global scope (the `window` object). In general it's a good software engineering practice to not pollute the global namespace unless you are working on a feature that truly needs to be global – it is needed by the entire page. Several reasons to avoid touching the global scope:

- **Naming conflicts**: Sharing the global scope across scripts can cause conflicts and bugs when new global variables or changes are introduced.
- **Cluttered global namespace**: Keeping the global namespace minimal avoids making the codebase hard to manage and maintain.
- **Scope leaks**: Unintentional references to global variables in closures or event handlers can cause memory leaks and performance issues.
- **Modularity and encapsulation**: Good design promotes keeping variables and functions within their specific scopes, enhancing organization, reusability, and maintainability.
- **Security concerns**: Global variables are accessible by all scripts, including potentially malicious ones, posing security risks, especially if sensitive data is stored there.
- **Compatibility and portability**: Heavy reliance on global variables reduces code portability and integration ease with other libraries or frameworks.

Follow these best practices to avoid global scope pollution:

- **Use local variables**: Declare variables within functions or blocks using `var`, `let`, or `const` to limit their scope.
- **Pass variables as function parameters**: Maintain encapsulation by passing variables as parameters instead of accessing them globally.
- **Use immediately invoked function expressions (IIFE)**: Create new scopes with IIFEs to prevent adding variables to the global scope.
- **Use modules**: Encapsulate code with module systems to maintain separate scopes and manageability.

<!-- Source: /questions/why-is-it-in-general-a-good-idea-to-leave-the-global-scope-of-a-website-as-is-and-never-touch-it/en-US.mdx -->

## Why might you want to create static class members?

<!-- Source: /questions/why-you-might-want-to-create-static-class-members/en-US.mdx -->

Static class members (properties/methods) has a `static` keyword prepended. Such members cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.

```js
class Car {
  static noOfWheels = 4;
  static compare() {
    return 'Static method has been called.';
  }
}

console.log(Car.noOfWheels); // 4
```

Static members are useful under the following scenarios:

- **Namespace organization**: Static properties can be used to define constants or configuration values that are specific to a class. This helps organize related data within the class namespace and prevents naming conflicts with other variables. Examples include `Math.PI`, `Math.SQRT2`.
- **Helper functions**: Static methods can be used as helper functions that operate on the class itself or its instances. This can improve code readability and maintainability by separating utility logic from the core functionality of the class. Examples of frequently used static methods include `Object.assign()`, `Math.max()`.
- **Singleton pattern**: In some rare cases, static properties and methods can be used to implement a singleton pattern, where only one instance of a class ever exists. However, this pattern can be tricky to manage and is generally discouraged in favor of more modern dependency injection techniques.

<!-- Source: /questions/why-you-might-want-to-create-static-class-members/en-US.mdx -->


<!-- QUESTIONS:END -->
