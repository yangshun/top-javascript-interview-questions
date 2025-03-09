---
title: What are the differences between JavaScript ES2015 classes and ES5 function constructors?
---

## TL;DR

ES2015 introduces a new way of creating classes, which provides a more intuitive and concise way to define and work with objects and inheritance compared to the ES5 function constructor syntax. Here's an example of each:

```js
// ES5 function constructor
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

For simple constructors, they look pretty similar. The main difference in the constructor comes when using inheritance. If we want to create a `Student` class that subclasses `Person` and add a `studentId` field, this is what we have to do.

```js live
// ES5 inheritance
// Superclass
function Person1(name) {
  this.name = name;
}

// Subclass
function Student1(name, studentId) {
  // Call constructor of superclass to initialize superclass-derived members.
  Person1.call(this, name);

  // Initialize subclass's own members.
  this.studentId = studentId;
}
Student1.prototype = Object.create(Person1.prototype);
Student1.prototype.constructor = Student1;

const student1 = new Student1('John', 1234);
console.log(student1.name, student1.studentId); // "John" 1234

// ES2015 inheritance
// Superclass
class Person2 {
  constructor(name) {
    this.name = name;
  }
}

// Subclass
class Student2 extends Person2 {
  constructor(name, studentId) {
    super(name);
    this.studentId = studentId;
  }
}

const student2 = new Student2('Alice', 5678);
console.log(student2.name, student2.studentId); // "Alice" 5678
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

---

## ES5 function constructor vs ES2015 classes

ES5 function constructors and ES2015 classes are two different ways of defining classes in JavaScript. They both serve the same purpose, but they have different syntax and behavior.

### ES5 function constructors

In ES5, you define a class-like structure using a function constructor and prototypes. Here's an example:

```js live
// ES5 function constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(
    'Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.',
  );
};

// Creating an instance
var person1 = new Person('John', 30);
person1.greet(); // Hello, my name is John and I am 30 years old.
```

### ES2015 classes

ES2015 introduced the `class` syntax, which simplifies the definition of classes and supports more features such as static methods and subclassing. Here's the same example using ES2015:

```js live
// ES2015 Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  }
}

// Creating an instance
const person1 = new Person('John', 30);
person1.greet(); // Hello, my name is John and I am 30 years old.
```

### Key Differences

1. **Syntax and Readability**:

   - **ES5**: Uses function constructors and prototypes, which can be less intuitive and harder to read.
   - **ES2015**: Uses the `class` keyword, making the code more concise and easier to understand.

2. **Static Methods**:

   - **ES5**: Static methods are added directly to the constructor function.
   - **ES2015**: Static methods are defined within the class using the `static` keyword.

   ```js live
   // ES5
   function Person1(name, age) {
     this.name = name;
     this.age = age;
   }

   Person1.sayHi = function () {
     console.log('Hi from ES5!');
   };

   Person1.sayHi(); // Hi from ES5!

   // ES2015
   class Person2 {
     static sayHi() {
       console.log('Hi from ES2015!');
     }
   }
   Person2.sayHi(); // Hi from ES2015!
   ```

3. **Inheritance**

   - **ES5**: Inheritance is achieved using `Object.create()` and manually setting the prototype chain.
   - **ES2015**: Inheritance is much simpler and more intuitive with the extends keyword.

   ```js live
   // ES5 Inheritance

   // ES5 function constructor
   function Person1(name, age) {
     this.name = name;
     this.age = age;
   }

   Person1.prototype.greet = function () {
     console.log(
       `Hello, my name is ${this.name} and I am ${this.age} years old.`,
     );
   };

   function Student1(name, age, grade) {
     Person1.call(this, name, age);
     this.grade = grade;
   }

   Student1.prototype = Object.create(Person1.prototype);
   Student1.prototype.constructor = Student1;

   Student1.prototype.study = function () {
     console.log(this.name + ' is studying.');
   };

   var student1 = new Student1('John', 22, 'B+');
   student1.greet(); // Hello, my name is John and I am 22 years old.
   student1.study(); // John is studying.

   // ES2015 Inheritance

   // ES2015 Class
   class Person2 {
     constructor(name, age) {
       this.name = name;
       this.age = age;
     }

     greet() {
       console.log(
         `Hello, my name is ${this.name} and I am ${this.age} years old.`,
       );
     }
   }

   class Student2 extends Person2 {
     constructor(name, age, grade) {
       super(name, age);
       this.grade = grade;
     }

     study() {
       console.log(`${this.name} is studying.`);
     }
   }

   const student2 = new Student2('Alice', 20, 'A');
   student2.greet(); // Hello, my name is Alice and I am 20 years old.
   student2.study(); // Alice is studying.
   ```

4. `super` calls:

   - **ES5**: Manually call the parent constructor function.
   - **ES2015**: Use the `super` keyword to call the parent class's constructor and methods.

### Conclusion

While both ES5 and ES2015 approaches can achieve the same functionality, ES2015 classes provide a clearer and more concise way to define and work with object-oriented constructs in JavaScript, which makes the code easier to write, read, and maintain. If you are working with modern JavaScript, it is generally recommended to use ES2015 classes over ES5 function constructors.

## Resources

- [Classes - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Inheritance- MDN ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#inheritance)
- [The Secret Life Of Objects](https://eloquentjavascript.net/06_object.html)
- [ES2015 vs ES5](https://www.educative.io/courses/learn-object-oriented-programming-in-javascript/es2015-vs-es5)
