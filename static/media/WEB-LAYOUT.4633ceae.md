# Web layout
Give structural layout to your website. The web layout classes will help you to position layout parts like the [mega menu](/#/layout/mega-menu) and the `main` element.

For applications, there is the [app layout](/#/layout/app-layout).

Source file: [packages/layout/web-layout/_web-layout.scss](https://github.com/kpn/kpn-style/blob/master/packages/layout/web-layout/_web-layout.scss)

---

## Styles
The class `web-body` is responsible for the white background and margin reset. The other classes are responsible for the positioning of layout parts. Think of the fixed position of the [mega menu](/#/layout/mega-menu) as an example.

### Overview of layout classes
* `web-body` 
* `web-layout` 
* `web-layout--active-side-bar`
* `web-layout__mega-menu`
* `web-layout__main`

### Chained classes 
```html
<body class="web-body web-layout">

  <nav class="app-layout__mega-menu mega-menu">
    ...
  </nav>

  <main class="app-layout__main main">
    ...
  </main>

</body>
```

### Activate mega menu
When using the 'primary menu' of the [mega menu](/#/layout/mega-menu), you can open (activate) the [mega menu](/#/layout/mega-menu) with the class `web-layout--active-mega-menu`. 

```html
<body class="web-body">

  <div class="web-layout web-layout--active-mega-menu">
    <nav class="web-layout__mega-menu mega-menu">
      ...
    </nav>
  </div>

</body>
```
