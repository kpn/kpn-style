# Tooltip
Tooltips are made of two parts: specific, expansive information about one topic (related to a nearby element), and an `i`-icon that triggers this information.

Source file: [packages/component/tooltip/_tooltip.scss](https://github.com/kpn/kpn-style/blob/master/packages/component/tooltip/_tooltip.scss)

---

## Customizable variables

### Font size
```scss
$tooltip-trigger-size: value;
$tooltip-title-font-size: value;
```

---

## Styles

### Inactive tooltip
```html*example="tooltip"
<div class="tooltip">
  Lorem ipsum
  <button class="tooltip__trigger"></button>
  <div class="tooltip__body">
    Nemo enim ipsam voluptatem quia, 
    voluptas sit aspernatur aut 
    odit aut fugit sit amet.
  </div>  
</div>
```

### Active tooltip
```html*example="tooltip"
<div class="tooltip tooltip--active">
  Lorem ipsum
  <button class="tooltip__trigger"></button>
  <div class="tooltip__body">
    Nemo enim ipsam voluptatem quia, 
    voluptas sit aspernatur aut 
    odit aut fugit sit amet.
  </div>  
</div>
```

### Label with tooltip and input
A common example of a label with tooltip and text input is shown below.

```html*example="tooltip"
<form>
  <div class="tooltip tooltip--active">
    <label class="label">
      Lorem ipsum
      <span class="tooltip__trigger"></span>
    </label>

    <div class="tooltip__body">
      Nemo enim ipsam voluptatem quia, 
      voluptas sit aspernatur aut 
      odit aut fugit sit amet.
    </div>
  </div>

  <input class="input" type="text" placeholder="Lorem" />
</form>
```
