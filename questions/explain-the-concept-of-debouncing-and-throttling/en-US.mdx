---
title: Explain the concept of debouncing and throttling
---

## TL;DR

Debouncing and throttling are techniques used to control the rate at which a function is executed. Debouncing ensures that a function is only called after a specified delay has passed since the last time it was invoked. Throttling ensures that a function is called at most once in a specified time interval.

Debouncing delays the execution of a function until a certain amount of time has passed since it was last called. This is useful for scenarios like search input fields where you want to wait until the user has stopped typing before making an API call.

```js live
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

const debouncedHello = debounce(() => console.log('Hello world!'), 2000);
debouncedHello(); // Prints 'Hello world!' after 2 seconds
```

Throttling ensures that a function is called at most once in a specified time interval. This is useful for scenarios like window resizing or scrolling where you want to limit the number of times a function is called.

```js live
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

const handleResize = throttle(() => {
  // Update element positions
  console.log('Window resized at', new Date().toLocaleTimeString());
}, 2000);

// Simulate rapid calls to handleResize every 100ms
let intervalId = setInterval(() => {
  handleResize();
}, 100);
// 'Window resized' is outputted only every 2 seconds due to throttling
```

---

## Debouncing and throttling

### Debouncing

Debouncing is a technique used to ensure that a function is only executed after a certain amount of time has passed since it was last invoked. This is particularly useful in scenarios where you want to limit the number of times a function is called, such as when handling user input events like keypresses or mouse movements.

#### Example use case

Imagine you have a search input field and you want to make an API call to fetch search results. Without debouncing, an API call would be made every time the user types a character, which could lead to a large number of unnecessary calls. Debouncing ensures that the API call is only made after the user has stopped typing for a specified amount of time.

#### Code example

```js
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Usage
const handleSearch = debounce((query) => {
  // Make API call
  console.log('API call with query:', query);
}, 300);

document.getElementById('searchInput').addEventListener('input', (event) => {
  handleSearch(event.target.value);
});
```

### Throttling

Throttling is a technique used to ensure that a function is called at most once in a specified time interval. This is useful in scenarios where you want to limit the number of times a function is called, such as when handling events like window resizing or scrolling.

#### Example use case

Imagine you have a function that updates the position of elements on the screen based on the window size. Without throttling, this function could be called many times per second as the user resizes the window, leading to performance issues. Throttling ensures that the function is only called at most once in a specified time interval.

#### Code example

```js live
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Usage
const handleResize = throttle(() => {
  // Update element positions
  console.log('Window resized');
}, 100);

window.addEventListener('resize', handleResize);
```

## Further reading

- [Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/)
- [Understanding the Difference Between Debounce and Throttle](https://www.freecodecamp.org/news/javascript-debounce-example/)
- [Lodash Documentation for Debounce and Throttle](https://lodash.com/docs/4.17.15#debounce)
