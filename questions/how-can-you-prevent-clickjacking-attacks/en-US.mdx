---
title: How can you prevent clickjacking attacks?
---

## TL;DR

To prevent clickjacking attacks, you can use the `X-Frame-Options` HTTP header to control whether your site can be embedded in iframes. Set it to `DENY` to prevent all framing, or `SAMEORIGIN` to allow framing only from the same origin. Additionally, you can use the `Content-Security-Policy` (CSP) header with the `frame-ancestors` directive to specify which origins are allowed to frame your content.

```http
X-Frame-Options: DENY
```

```http
Content-Security-Policy: frame-ancestors 'self'
```

---

## What is clickjacking?

Clickjacking is a type of attack where a malicious site tricks users into clicking on something different from what the user perceives, potentially leading to unauthorized actions or information disclosure. This is often achieved by embedding the target site in an invisible iframe and overlaying it with deceptive content.

## How to prevent clickjacking attacks

### Using the `X-Frame-Options` header

The `X-Frame-Options` HTTP header can be used to control whether a browser should be allowed to render a page in a `<frame>`, `<iframe>`, `<embed>`, or `<object>`. This header has three possible values:

- `DENY`: Prevents the page from being displayed in a frame, regardless of the site attempting to do so.
- `SAMEORIGIN`: Allows the page to be displayed in a frame on the same origin as the page itself.
- `ALLOW-FROM uri`: Allows the page to be displayed in a frame only on the specified origin.

Example:

```http
X-Frame-Options: DENY
```

### Using the `Content-Security-Policy` header

The `Content-Security-Policy` (CSP) header provides a more flexible and modern approach to prevent clickjacking. The `frame-ancestors` directive specifies valid parents that may embed a page using `<frame>`, `<iframe>`, `<object>`, `<embed>`, or `<applet>` tags.

Example:

```http
Content-Security-Policy: frame-ancestors 'self'
```

This directive can also specify multiple origins or use wildcards for more complex scenarios.

Example:

```http
Content-Security-Policy: frame-ancestors 'self' https://trusted.com
```

### Combining both headers

For maximum compatibility and security, it is recommended to use both `X-Frame-Options` and `Content-Security-Policy` headers together.

Example:

```http
X-Frame-Options: SAMEORIGIN
Content-Security-Policy: frame-ancestors 'self'
```

## Further reading

- [MDN Web Docs: X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)
- [MDN Web Docs: Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [OWASP: Clickjacking Defense Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html)
