# App layout
Give a structural layout to your application. The app layout classes will helps you to position layout parts like the [top bar](/#/layout/top-bar) and [side bar](/#/layout/side-bar). This layout will also help you with the scroll behavior. 

For websites there is the [web layout](/#/layout/web-layout).

Source file: [packages/layout/app-layout/_app-layout.scss](https://github.com/kpn/kpn-style/blob/master/packages/layout/app-layout/_app-layout.scss)

---

#### Table of contents
  * [Styles](#Styles)
    * [Overview of layout classes](#Overview-of-layout-classes)
    * [Chained classes](#Chained-classes)
    * [Parent and child](#Parent-and-child)
    * [Side bar detection](#Side-bar-detection)
    * [Activate side bar](#Activate-Side-bar)

---

## Styles
The class `app-body` is responsible for the grey background and margin reset. The other classes are responsible for the position of layout parts. Think of the fixed position of the [top bar](/#/layout/top-bar) as an example.

### Overview of layout classes
* `app-body` 
* `app-layout`
* `app-layout--has-side-bar`
* `app-layout--active-side-bar`
* `app-layout__top-bar`
* `app-layout__side-bar`
* `app-layout__main`
* `app-layout__title-bar`

### Chained classes
```html
<body class="app-body">

  <div class="app-layout">
    <nav class="app-layout__top-bar top-bar">
      ...
    </nav>

    <nav class="app-layout__side-bar side-bar">
      ...
    </nav>

    <main class="app-layout__main main">
      <div class="app-layout__title-bar title-bar">...</div>
      ...
    </main>
  </div>

</body>
```

### Parent and child
Or use layout as a parent. 

```html
<body class="app-body">

  <div class="app-layout">
    <div class="app-layout__side-bar">
      <nav class="side-bar">
        ...
      </nav>
    </div>
  </div>

</body>
```

### Side bar detection
App layout will automatically detect a side bar to make sure everything looks fine. If your side bar is not detected you can add the class `app-layout--has-side-bar`. 

```html
<body class="app-body">

  <div class="app-layout app-layout--has-side-bar">
    ...
  </div>

</body>
```

### Activate Side bar
When using the [side bar](/#/layout/side-bar), you can open (activate) the side bar with the class `app-layout--active-side-bar`. 

```html
<body class="app-body">

  <div class="app-layout app-layout--active-side-bar">
    <div class="app-layout__side-bar">
      <nav class="side-bar">
        ...
      </nav>
    </div>
  </div>

</body>
```
