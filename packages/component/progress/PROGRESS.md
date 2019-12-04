# Progress
Progress indicators are mainly used to show the user that the application is busy and that waiting is required. The motion of the indicator implies that the application has not completely crashed and is, in fact, busy. Some progress indicators we supply do not show the amount of progress (progress spinner), some do (progress bar).

Source file: [packages/component/progress/_progress.scss](https://github.com/kpn/kpn-style/blob/master/packages/component/progress/_progress.scss)

---

## Styles

### Progress spinner

#### Normal progress spinner
```html*example
<div class="progress-spinner"></div>
```

#### White progress spinner
```html*example
<div class="progress-spinner progress-spinner--white"></div>
```

#### Progress spinner with text helper
```html*example="progress-spinner-text"
<div class="progress-spinner">
  <div class="progress-spinner__text">
    Please wait
  </div>
</div>
```

### Button with progress spinner
Also see the [button](/#/component/button) page for explanation on implementing a button with a progress spinner.

#### Blocking progress spinner
```html*example
<div class="progress-spinner progress-spinner--blocking">
  <article class="card">
    <div class="card__body">
      Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt,
      ut labore et dolore magna.
      Aliqua ut enim ad minim veniam, 
      quis nostrud exercitation ullamco,
      laboris nisi ut aliquip ex ea, 
      commodo consequat. 
    <div>
  </article>
</div>
```

### Progress bar

#### Normal Progress bar
Add (inline styled) value in percentage to move the meter.

```html*example="progress-bar"
<div class="progress-bar">
  <div class="progress-bar__meter">
    <div class="progress-bar__value" style="width: 38%;"></div>
  </div>
</div>
```

#### Progress bar with text helper
```html*example="progress-bar-text"
<div class="progress-bar">
  <div class="progress-bar__meter">
    <div class="progress-bar__value" style="width: 56%;"></div>
  </div>

  <div class="progress-bar__text">
    Please wait
  </div>
</div>
```

#### Blocking Progress bar
```html*example
<div class="progress-bar progress-bar--blocking">
  <div class="progress-bar__meter">
    <div class="progress-bar__value" style="width: 73%;"></div>
  </div>

  <article class="card">
    <div class="card__body">
      Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt,
      ut labore et dolore magna.
      Aliqua ut enim ad minim veniam, 
      quis nostrud exercitation ullamco,
      laboris nisi ut aliquip ex ea, 
      commodo consequat. 
    <div>
  </article>
</div>
```
