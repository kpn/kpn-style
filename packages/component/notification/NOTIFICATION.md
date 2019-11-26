# Notification
Notifications are being used to show important information to the user in a conspicuous way. This can have varying goals, for instance to inform or to warn to user.

Source file: [packages/component/notification/_notification.scss](https://github.com/kpn/kpn-style/blob/master/packages/component/notification/_notification.scss)

---

## Styles

### Informative notification
```html*example
<div class="notification notification--informative">
  <div class="notification__header">
    Lorem ipsum dolor sit amet consectetur, 
    adipiscing elit sed do eiusmod tempor incididunt.
  </div>
</div>
```

### Notification with close button
```html*example
<div class="notification notification--informative">
  <div class="notification__header">
    Lorem ipsum dolor sit amet consectetur, 
    adipiscing elit sed do eiusmod tempor incididunt.
  </div>

  <div class="notification__close"></div>
</div>
```

### Other notifications
```html*example
<div class="notification notification--error">
  <div class="notification__header">
    Duis aute irure dolor in reprehenderit in,
    voluptate velit esse cillum dolore eu fugiat.
  </div>
</div>

<div class="notification notification--caution">
  <div class="notification__header">
    Ut enim ad minim veniam quis 
    <a class="a">nostrud exercitation</a>.
  </div>
</div>

<div class="notification notification--success">
  <div class="notification__header">
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  </div>
</div>
```

### Notification with body content
```html*example
<div class="notification notification--error">
  <div class="notification__header">
    Lorem ipsum dolor sit amet consectetur, 
    adipiscing elit sed do eiusmod tempor incididunt.
  </div>

  <div class="notification__body">
    <p class="p">
      Adipiscing elit sed do eiusmod:
    </p>
    <ul class="ul">
      <li>Duis aute irure dolor in reprehenderit</li>
      <li>Voluptate velit esse cillum dolore</li>
      <li>Ut enim ad minim veniam quis</li>
    </ul>
  </div>
</div>
```
