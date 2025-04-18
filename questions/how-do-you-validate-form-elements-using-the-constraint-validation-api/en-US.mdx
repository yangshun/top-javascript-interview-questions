---
title: How do you validate form elements using the Constraint Validation API?
---

## TL;DR

The Constraint Validation API provides a way to validate form elements in HTML. You can use properties like `validity`, `validationMessage`, and methods like `checkValidity()` and `setCustomValidity()`. For example, to check if an input is valid, you can use:

```js
const input = document.querySelector('input');
if (input.checkValidity()) {
  console.log('Input is valid');
} else {
  console.log(input.validationMessage);
}
```

---

## How do you validate form elements using the Constraint Validation API?

### Introduction

The Constraint Validation API is a set of methods and properties available on form elements that allow you to perform validation checks and provide feedback to users. This API is built into HTML5 and provides a way to validate form inputs without needing to write custom JavaScript validation logic.

### Key properties and methods

#### `checkValidity()`

The `checkValidity()` method checks if an element meets all its validation constraints. It returns `true` if the element is valid and `false` otherwise.

```js
const input = document.querySelector('input');
if (input.checkValidity()) {
  console.log('Input is valid');
} else {
  console.log('Input is invalid');
}
```

#### `reportValidity()`

The `reportValidity()` method works like `checkValidity()` but also displays the browser's default validation message if the element is invalid.

```js
const input = document.querySelector('input');
if (!input.reportValidity()) {
  console.log('Input is invalid');
}
```

#### `setCustomValidity()`

The `setCustomValidity()` method allows you to set a custom validation message. If a custom message is set, the element will be considered invalid.

```js
const input = document.querySelector('input');
input.setCustomValidity('This field is required');
if (!input.checkValidity()) {
  console.log(input.validationMessage); // Outputs: This field is required
}
```

#### `validity`

The `validity` property is an object that contains several boolean properties indicating the validity state of the element, such as `valid`, `valueMissing`, `typeMismatch`, etc.

```js
const input = document.querySelector('input');
if (input.validity.valueMissing) {
  console.log('Value is missing');
}
```

#### `validationMessage`

The `validationMessage` property returns the message that will be shown to the user if the element is invalid.

```js
const input = document.querySelector('input');
if (!input.checkValidity()) {
  console.log(input.validationMessage);
}
```

### Example

Here is a complete example that demonstrates how to use the Constraint Validation API to validate a form:

```html
<form id="myForm">
  <input type="text" id="username" required />
  <input type="submit" value="Submit" />
</form>

<script>
  const form = document.getElementById('myForm');
  const username = document.getElementById('username');

  form.addEventListener('submit', function (event) {
    if (!username.checkValidity()) {
      username.setCustomValidity('Username is required');
      username.reportValidity();
      event.preventDefault();
    } else {
      username.setCustomValidity(''); // Clear custom message
    }
  });
</script>
```

In this example, the form will not submit if the `username` input is empty, and a custom validation message will be displayed.

## Further reading

- [MDN Web Docs: Constraint Validation](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Constraint_validation)
- [MDN Web Docs: HTMLFormElement.checkValidity()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/checkValidity)
- [MDN Web Docs: HTMLObjectElement.setCustomValidity()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity)
