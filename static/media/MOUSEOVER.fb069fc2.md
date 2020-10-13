# Mouseover
A mouseover (or rather, the popover that it spawns) gives some short information if a term or other element is unclear. This is different from a tooltip, since this is shorter and simpler, and does not show or rely on an `i`-icon.

Source file: [packages/component/mouseover/_mouseover.scss](https://github.com/kpn/kpn-style/blob/master/packages/component/mouseover/_mouseover.scss)

---

## Styles
The hover has a delay of 1 second and is not available for mobile format screens.

### Hover example
```html*example="mouseover"
<p>
  <span class="mouseover">
    Hover me
    <span class="mouseover__body">
        Lorem ipsum dolor sit amet consectetur
    </span>
  </span>
</p>
```

### Class example
Add the class `mouseover--no-hover` to prevent the hover action. With the class `mouseover--active`, you can force the popover to be active.

```html*example="mouseover"
<p>
  <span class="mouseover mouseover--no-hover mouseover--active">
    Hover me
    <span class="mouseover__body">
        Lorem ipsum dolor sit amet consectetur
    </span>
  </span>
</p>
