---
title: What is the Decorator pattern and how is it used?
---

## TL;DR

The Decorator pattern is a structural design pattern that allows behavior to be added to individual objects, dynamically, without affecting the behavior of other objects from the same class. It is used to extend the functionalities of objects by wrapping them with additional behavior. In JavaScript, this can be achieved using higher-order functions or classes.

For example, if you have a `Car` class and you want to add features like `GPS` or `Sunroof` without modifying the `Car` class itself, you can create decorators for these features.

```js live
class Car {
  drive() {
    return 'Driving';
  }
}

class CarDecorator {
  constructor(car) {
    this.car = car;
  }

  drive() {
    return this.car.drive();
  }
}

class GPSDecorator extends CarDecorator {
  drive() {
    return `${super.drive()} with GPS`;
  }
}

const myCar = new Car();
const myCarWithGPS = new GPSDecorator(myCar);
console.log(myCarWithGPS.drive()); // "Driving with GPS"
```

---

## What is the Decorator pattern and how is it used?

### Definition

The Decorator pattern is a structural design pattern that allows you to dynamically add behavior and responsibilities to objects without modifying their code. This pattern creates a set of decorator classes that are used to wrap concrete components.

### Use cases

- **Adding functionalities**: When you need to add functionalities to objects without altering their structure.
- **Flexible and reusable code**: When you want to create flexible and reusable code by composing behaviors.
- **Single Responsibility Principle**: When you want to adhere to the Single Responsibility Principle by dividing functionalities into different classes.

### Implementation in JavaScript

#### Using classes

In JavaScript, the Decorator pattern can be implemented using classes. Here is an example:

```js live
class Car {
  drive() {
    return 'Driving';
  }
}

class CarDecorator {
  constructor(car) {
    this.car = car;
  }

  drive() {
    return this.car.drive();
  }
}

class GPSDecorator extends CarDecorator {
  drive() {
    return `${super.drive()} with GPS`;
  }
}

class SunroofDecorator extends CarDecorator {
  drive() {
    return `${super.drive()} with Sunroof`;
  }
}

const myCar = new Car();
const myCarWithGPS = new GPSDecorator(myCar);
const myCarWithGPSAndSunroof = new SunroofDecorator(myCarWithGPS);

console.log(myCarWithGPSAndSunroof.drive()); // "Driving with GPS with Sunroof"
```

#### Using higher-order functions

Another way to implement the Decorator pattern in JavaScript is by using higher-order functions:

```js live
function car() {
  return {
    drive: () => 'Driving',
  };
}

function gpsDecorator(car) {
  return {
    drive: () => `${car.drive()} with GPS`,
  };
}

function sunroofDecorator(car) {
  return {
    drive: () => `${car.drive()} with Sunroof`,
  };
}

let myCar = car();
myCar = gpsDecorator(myCar);
myCar = sunroofDecorator(myCar);

console.log(myCar.drive()); // "Driving with GPS with Sunroof"
```

### Advantages

- **Open/Closed Principle**: Classes are open for extension but closed for modification.
- **Flexible**: Allows for the dynamic composition of behaviors.
- **Reusable**: Decorators can be reused across different objects.

### Disadvantages

- **Complexity**: Can lead to a large number of small classes or functions.
- **Debugging**: Can be harder to debug due to the added layers of abstraction.

## Further reading

- [Decorator Pattern on Wikipedia](https://en.wikipedia.org/wiki/Decorator_pattern)
- [MDN Web Docs: Decorators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#class_decorators)
- [Refactoring Guru: Decorator Pattern](https://refactoring.guru/design-patterns/decorator)
