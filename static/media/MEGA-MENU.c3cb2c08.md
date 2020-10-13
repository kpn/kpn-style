# Mega menu
Menu for logo and items.

The mega menu is intended for websites. It must not be combined with the [top bar](/layout/top-bar) and [side bar](/layout/side-bar) which are intended for applications. Use [web layout](/layout/web-layout) to give your website the right structure.

Source file: [packages/layout/mega-menu/_mega-menu.scss](https://github.com/kpn/kpn-style/blob/master/packages/layout/mega-menu/_mega-menu.scss)

---

## Customizable variables

### Font size and height
```scss
$mega-menu-font-size: value;
$mega-menu-height: value;
```

---

## Styles

### Basic mega menu with logo
Use the basic mega menu if you don't need a mobile menu that slides in and out.

```html*example="mega-menu"
<nav class="mega-menu">
  <a class="mega-menu__logo">
    <img alt="Logo image" src="/dummy/logo-kpn.png" />
  </a>

  <ul class="mega-menu__menu">
    <li class="mega-menu__item">
      <a class="mega-menu__link mega-menu__link--active">Lorem</a>
    </li>
    <li class="mega-menu__item">
      <a class="mega-menu__link">Ipsum</a>
    </li>    
    <li class="mega-menu__item">
      <a class="mega-menu__link">Dolor</a>
    </li>            
  </ul> 
</nav>
```

### Mega menu with primary and secondary menu
Allows you to distinguish between a primary and secondary menu. The primary menu is displayed on a small screen as a menu that slides in and out.

Use the (menu) trigger to activate the primary menu. In the section 'mobile mega menu', you can read more about the mobile menu.

```html*example="mega-menu"
<nav class="mega-menu">
  <div class="mega-menu__primary">
    <ul class="mega-menu__menu">
      <li class="mega-menu__item">
        <a class="mega-menu__link mega-menu__link--active">Lorem</a>
      </li>
      <li class="mega-menu__item">
        <a class="mega-menu__link">Ipsum</a>
      </li>               
    </ul>
  </div>

  <div class="mega-menu__secondary">
    <ul class="mega-menu__menu">
      <li class="mega-menu__item">
        <a class="mega-menu__link"><i class="ui-account"></i> My Environment</a>
      </li>
      <li class="mega-menu__item">
        <a class="mega-menu__link"><i class="ui-envelop"></i></a>
      </li>
      <li class="mega-menu__item mega-menu__item--trigger">
        Menu
      </li>                      
    </ul>  
  </div>   
</nav>
```

### Mega menu with submenu containing groups
Hover over the second item ('Group title') to show the sub items (except on `xs` screen sizes).

```html*example="mega-menu-sub-menu"
<nav class="mega-menu">
  <div class="mega-menu__primary">
    <ul class="mega-menu__menu">
      <li class="mega-menu__item">
        <a class="mega-menu__link mega-menu__link--active">Link title</a>
      </li>    
      <li class="mega-menu__item">
        <span class="mega-menu__link">Group title</span>
        <div class="mega-menu__sub-menu">
          <ul class="mega-menu__group">
            <li><a class="mega-menu__link">Group link</a></li>
            <li><a class="mega-menu__link">Group link</a></li>
          </ul> 
          <ul class="mega-menu__group">
            <li><a class="mega-menu__link">Group link</a></li>
            <li><a class="mega-menu__link">Group link</a></li>
          </ul>         
        </div>      
      </li>              
    </ul>    
  </div>  

  <div class="mega-menu__secondary">
    <ul class="mega-menu__menu">
      <li class="mega-menu__item">
        <a class="mega-menu__link"><i class="ui-account"></i> My Environment</a>
      </li>
      <li class="mega-menu__item">
        <a class="mega-menu__link"><i class="ui-envelop"></i></a>
      </li>
      <li class="mega-menu__item mega-menu__item--trigger">
        Menu
      </li>                  
    </ul>
  </div>
</nav>
```

### Hide items
Use the hide [display helper classes](/#/base/common) to hide items.

```html*example="mega-menu"
<nav class="mega-menu">
  <div class="mega-menu__secondary">
    <ul class="mega-menu__menu">
      <li class="mega-menu__item top-bar__item hidden-xs hidden-s">
        <a class="mega-menu__link"><i class="ui-account"></i> My Environment</a>
      </li>
      <li class="mega-menu__item">
        <a class="mega-menu__link"><i class="ui-envelop"></i></a>
      </li>                    
    </ul>  
  </div>   
</nav>
```

### Mobile mega menu
Use the trigger (hamburger/menu icon) to activate the (primary) menu. The [web layout](/#/layout/web-layout) will handle the positioning of the menu when it is open (active) or closed.

The mobile mega menu will show a green action bar with room for a link and a button to close the menu *.

Note: The mobile submenu with groups is not yet supported.

\* Only on small / `xs` screens in combination with [web layout](/#/layout/web-layout)

```html*example="mega-menu-mobile"
<nav class="mega-menu">
  <div class="mega-menu__primary">
    <div class="mega-menu__action-bar">
      <a class="mega-menu__link"><i class="ui-account"></i> John Doe</a>
      <button class="mega-menu__close">Close</button>
    </div>
    <ul class="mega-menu__menu">
      <li class="mega-menu__item">
        <a class="mega-menu__link">Lorem</a>
      </li>
      <li class="mega-menu__item">
        <a class="mega-menu__link">Ipsum</a>
      </li>               
    </ul>   
  </div>

  <div class="mega-menu__secondary">
    <ul class="mega-menu__menu">
      <li class="mega-menu__item hidden-xs hidden-s">
        <a class="mega-menu__link"><i class="ui-account"></i> My Environment</a>
      </li>
      <li class="mega-menu__item mega-menu__item--trigger">
        Menu
      </li>               
    </ul>  
  </div>   
</nav>
```
