# Top bar
Bar for logo, title and menu.

The top bar is intended for applications. It must not be combined with the [mega menu](/layout/mega-menu) which is intended for websites. Use [app layout](/layout/app-layout) to give your application the right structure.

Source file: [packages/layout/top-bar/_top-bar.scss](https://github.com/kpn/kpn-style/blob/master/packages/layout/top-bar/_top-bar.scss)

---

## Customizable variables

### Font size and height
```scss
$top-bar-font-size: value;
$top-bar-height: value;
```

---

## Styles

### Basic top bar with logo
```html*example="top-bar"
<nav class="top-bar">
  <a class="top-bar__logo">
    <img alt="Logo image" src="/dummy/logo-kpn.png" />
  </a>
  <div class="top-bar__title">App Title</div>
</nav>
```

### Top bar with menu
```html*example="top-bar"
<nav class="top-bar">
  <ul class="top-bar__menu">
    <li class="top-bar__item">
      <a class="top-bar__link"><i class="ui-help"></i></a>
    </li>
    <li class="top-bar__item">
      <a class="top-bar__link"><i class="ui-chat"></i></a>
    </li>    
    <li class="top-bar__item">
      <a class="top-bar__link top-bar__link--active"><i class="ui-search"></i></a>
    </li>            
  </ul>
</nav>
```

### Top bar with trigger
Use the (menu) trigger to activate a menu like the mobile [side bar](/#/layout/side-bar). The trigger is only shown on small screens.

```html*example="top-bar"
<nav class="top-bar">
  <ul class="top-bar__menu">
    <li class="top-bar__item">
      <a class="top-bar__link"><i class="ui-help"></i></a>
    </li>
    <li class="top-bar__item">
      <a class="top-bar__link"><i class="ui-chat"></i></a>
    </li>    
    <li class="top-bar__item top-bar__item--trigger">
      Menu
    </li>            
  </ul>
</nav>
```

### Top bar with action menu

#### Collapsed action menu
```html*example="top-bar"
<nav class="top-bar">
  <ul class="top-bar__menu">
    <li class="top-bar__item">
      <span class="top-bar__link top-bar__link--collapsed">
        <i class="ui-account"></i>
        John Doe
      </span>
      <ul class="top-bar__action-menu">
        <li><a class="top-bar__link">Lorem ipsum</a></li>
        <li><a class="top-bar__link">Dolor</a></li>
      </ul>
    </li>           
  </ul>
</nav>
```

#### Expanded action menu
```html*example="top-bar"
<nav class="top-bar">
  <ul class="top-bar__menu">
    <li class="top-bar__item">
      <span class="top-bar__link top-bar__link--expanded">
        <i class="ui-account"></i>
        John Doe
      </span>
      <ul class="top-bar__action-menu top-bar__action-menu--visible">
        <li><a class="top-bar__link">Profile</a></li>
        <li><a class="top-bar__link">Sign out</a></li>
      </ul>
    </li>           
  </ul>
</nav>
```

### Hide items
Use the [display helper classes](/#/base/common) to hide items.

```html*example="top-bar"
<nav class="top-bar">
  <ul class="top-bar__menu">
    <li class="top-bar__item">
      <a class="top-bar__link"><i class="ui-help"></i></a>
    </li>
    <li class="top-bar__item hidden-xs hidden-s">
      <span class="top-bar__link top-bar__link--collapsed">
        <i class="ui-account"></i>
        John Doe
      </span>
    </li>                 
  </ul>
</nav>
```
