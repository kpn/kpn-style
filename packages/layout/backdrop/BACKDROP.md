# Backdrop
Add a fullscreen and fixed backdrop.

Source file: [packages/component/backdrop/_backdrop.scss](https://github.com/kpn/kpn-style/blob/master/packages/layout/backdrop/_backdrop.scss)

---

## Styles
The backdrop is useful in situations where [dialogs](/#/component/dialog) are used. It is recommended to place the backdrop element before the closing tag of the `body`.

### Example
This is an static example of the backdrop. The `position` property has been overridden for demo purposes.

```html*example="backdrop"
<body>
  <h1>Lorem ipsum dolor</h1>
  <p>
    Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt.
  </p>

  <div class="backdrop backdrop--active"></div>
</body>
```
