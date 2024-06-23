---
title: How do `<iframe>` on a page communicate?
---

## TL;DR

`<iframe>` elements on a page can communicate using the `postMessage` API. This allows for secure cross-origin communication between the parent page and the iframe. The `postMessage` method sends a message, and the `message` event listener receives it. Here's a simple example:

```js
// In the parent page
const iframe = document.querySelector('iframe');
iframe.contentWindow.postMessage('Hello from parent', '*');

// In the iframe
window.addEventListener('message', (event) => {
  console.log(event.data); // 'Hello from parent'
});
```

---

## How do `<iframe>` on a page communicate?

### Using the `postMessage` API

The `postMessage` API is the most common and secure way for iframes to communicate with each other or with their parent page. This method allows for cross-origin communication, which is essential for modern web applications.

#### Sending a message

To send a message from the parent page to the iframe, you can use the `postMessage` method. Here’s an example:

```js
// In the parent page
const iframe = document.querySelector('iframe');
iframe.contentWindow.postMessage('Hello from parent', '*');
```

In this example, the parent page selects the iframe and sends a message to it. The second parameter, `'*'`, is the target origin. It specifies the origin of the target window. Using `'*'` means the message can be received by any origin, but for security reasons, it's better to specify the exact origin.

#### Receiving a message

To receive a message in the iframe, you need to add an event listener for the `message` event:

```js
// In the iframe
window.addEventListener('message', (event) => {
  console.log(event.data); // 'Hello from parent'
});
```

The `event` object contains the `data` property, which holds the message sent by the parent page.

### Security considerations

When using `postMessage`, it's crucial to consider security:

- **Specify the target origin**: Instead of using `'*'`, specify the exact origin to ensure that only messages from trusted sources are received.
- **Validate the message**: Always validate the message content to prevent malicious data from being processed.

### Example with target origin

Here’s an example with a specified target origin:

```js
// In the parent page
const iframe = document.querySelector('iframe');
const targetOrigin = 'https://example.com';
iframe.contentWindow.postMessage('Hello from parent', targetOrigin);

// In the iframe
window.addEventListener('message', (event) => {
  if (event.origin === 'https://parent.com') {
    console.log(event.data); // 'Hello from parent'
  }
});
```

In this example, the parent page sends a message only to `https://example.com`, and the iframe processes the message only if it comes from `https://parent.com`.

## Further reading

- [MDN Web Docs: Window.postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)
- [HTML Living Standard: postMessage](https://html.spec.whatwg.org/multipage/web-messaging.html#dom-window-postmessage)
- [Cross-document messaging](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage#cross-document_messaging)
