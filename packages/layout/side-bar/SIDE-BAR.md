# Side bar
Collapsable navigation with icons and text. 

The side bar is intended for applications. It must not be combined with the [mega menu](/layout/mega-menu) which is intended for websites. Use [app layout](/layout/app-layout) to give your application the right structure.

Source file: [packages/layout/side-bar/_side-bar.scss](https://github.com/kpn/kpn-style/blob/master/packages/layout/side-bar/_side-bar.scss)

---

## Customizable variables

### Font size
```scss
$side-bar-font-size: value;
```

---

### Basic side bar
```html*example="side-bar"
<nav class="side-bar">
  <ul class="side-bar__menu">
    <li>
      <a class="side-bar__link side-bar__link--active">
        <i class="ui-home"></i> Link title
      </a>
    </li>
    <li>
      <a class="side-bar__link">
        <i class="ui-info"></i> Link title
      </a>
    </li>
  </ul>
</nav>
```

### Side bar with collapsed submenu
```html*example="side-bar"
<nav class="side-bar">
  <ul class="side-bar__menu">
    <li>
      <a class="side-bar__link side-bar__link--active">
        <i class="ui-home"></i> Link title
      </a>
    </li>
    <li>
      <span class="side-bar__link side-bar__link--collapsed">
        <i class="ui-info"></i> Group title
      </span>
      <ul class="side-bar__sub-menu">
        <li><a class="side-bar__link">Link title</a></li>
        <li><a class="side-bar__link">Link title</a></li>
      </ul>
    </li>
  </ul>
</nav>
```

### Side bar with expanded submenu
```html*example="side-bar"
<nav class="side-bar">
  <ul class="side-bar__menu">
    <li>
      <a class="side-bar__link">
        <i class="ui-home"></i> Link title
      </a>
    </li>
    <li>
      <span class="side-bar__link side-bar__link--active side-bar__link--expanded">
        <i class="ui-info"></i> Group title
      </span>
      <ul class="side-bar__sub-menu side-bar__sub-menu--visible">
        <li><a class="side-bar__link side-bar__link--active">Link title</a></li>
        <li><a class="side-bar__link">Link title</a></li>
      </ul>
    </li>
  </ul>
</nav>
```

### Mobile Side bar
We recommend to use the trigger (hamburger/menu icon) from the [top bar](/#/layout/top-bar) to activate the mobile side bar. The [app layout](/#/layout/app-layout) will handle the positioning of the side bar when it is open (active) or closed.

The mobile side bar will show (only on small screens) a green action bar with room for a link and a button to close the side bar. 

```html*example="side-bar"
<nav class="side-bar">
  <div class="side-bar__action-bar">
    <a class="side-bar__link"><i class="ui-account"></i> John Doe</a>
    <button class="side-bar__close">Close</button>
  </div>

  <ul class="side-bar__menu">
    <li>
      <a class="side-bar__link">My account</a>
    </li>
    <li>
      <a class="side-bar__link">Change password</a>
    </li>    
  </ul>
  
  <div class="container margin-top-2 hidden-m hidden-l">
    <button class="button button--secondary button--fluid">Log out</button>
  </div>
</nav>
```
