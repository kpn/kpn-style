# Action menu
Compact context menu.

Source file: [packages/component/action-menu/_action-menu.scss](https://github.com/kpn/kpn-style/blob/master/packages/component/action-menu/_action-menu.scss)

---

## Styles
You can use the action menu inside the [card component](/#/component/card) and [table component](/#/component/table).

### Inactive action menu
```html*example
<div class="action-menu">
  <a class="action-menu__trigger"></a>
  <ul class="action-menu__list">
    <li class="action-menu__item"><a class="action-menu__link">Edit user</a></li>
    <li class="action-menu__item"><a class="action-menu__link">Send email</a></li>
    <li class="action-menu__item"><a class="action-menu__link">Change role</a></li>
    <li class="action-menu__item"><a class="action-menu__link">Delete user</a></li>
  </ul>
</div>
```

### Active action menu
```html*example="action-menu"
<div class="action-menu action-menu--active">
  <a class="action-menu__trigger"></a>
  <ul class="action-menu__list">
    <li class="action-menu__item"><a class="action-menu__link">Edit user</a></li>
    <li class="action-menu__item"><a class="action-menu__link">Send email</a></li>
    <li class="action-menu__item"><a class="action-menu__link">Change role</a></li>
    <li class="action-menu__item"><a class="action-menu__link">Delete user</a></li>
  </ul>
</div>
```

### Right action menu list
```html*example="action-menu"
<div class="action-menu action-menu--right action-menu--active">
  <a class="action-menu__trigger"></a>
  <ul class="action-menu__list">
    <li class="action-menu__item"><a class="action-menu__link">Edit user</a></li>
    <li class="action-menu__item"><a class="action-menu__link">Send email</a></li>
    <li class="action-menu__item"><a class="action-menu__link">Change role</a></li>
    <li class="action-menu__item"><a class="action-menu__link">Delete user</a></li>
  </ul>
</div>
```
