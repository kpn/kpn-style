# Style
Source file: [packages/component/button/_button.scss](https://github.com/kpn/kpn-style/blob/master/packages/component/button/_button.scss)

---

## HTML/CSS examples

### Primary button
```html*example
<button class="button">Primary button</button>
```

### Buttons in group
Wrap a series of buttons together in a group.

```html*example
<div class="button-group">
  <button class="button">Primary button</button>
  <button class="button button--secondary">Secondary button</button>
  <button class="button button--link">Link button</button>
</div>
```

### Disabled buttons
```html*example
<div class="button-group">
  <button class="button" disabled>Primary button</button>
  <button class="button button--secondary button--disabled">Secondary button</button>
  <button class="button button--link button--disabled">Link button</button>
</button>
```

### Button with icon
```html*example
<button class="button"><i class="ui-delete"></i>Remove item</button>
```

### Button with Progress spinner
See also [Progress spinner](/#/component/progress).

```html*example
<button class="button button--spinner">Loading</button>
```

### Button sizes
On the 12 column grid there is a maximum width of 4/12 you should use for buttons. This is made easy with the helper classes below.

```html*example
<div class="button-group">
  <button class="button button--1">1</button>
  <button class="button button--2">2</button>
  <button class="button button--3">3</button>
  <button class="button button--4">4</button>
</div>
```

There are three different button sizes available.
<div class="notification notification--caution margin-bottom-2">
  <div class="notification__header">
    Button sizes small and large are deprecated and will be removed in an upcoming major version release of KPN Style. Please avoid using differing button sizes, or override the CSS in your own project.
  </div>
</div>

```html*example
<div class="button-group">
  <button class="button button--small">Small button</button>
  <span class="button">Medium button</span>
  <div class="button button--large">Large button</div>
</div>
```

### Fluid button
Make buttons fill the full width of the containing element. You can add the fluid modifier class to all button variations that you wish to span the full width of its container.

```html*example
<button class="button button--fluid">Fluid button</button>
```

### Advanced group

#### Responsive buttons
Responsive buttons will span the full width of their container (like fluid buttons) automatically on `xs` screen sizes.

```html*example
<div class="button-group button-group--respond">
  <button class="button">Primary</button>
  <button class="button button--secondary">Secondary</button>
</div>
```

#### Right aligned buttons
```html*example
<div class="button-group button-group--right">
  <button class="button">Primary</button>
  <button class="button button--secondary">Secondary</button>
</div>
```

#### Reversed buttons
Reversed buttons will be shown from last to first (based on the HTML definition).

```html*example
<div class="button-group button-group--reverse">
  <button class="button">Primary</button>
  <button class="button button--secondary">Secondary</button>
</div>
```

---

## Sass
### Customizable variables

#### Font size
```scss
$button-font-size-s: [value for small button];
$button-font-size-m: [value for medium button];
$button-font-size-l: [value for large button];
```

#### Height
```scss
$button-height-s: [value for small button];
$button-height-m: [value for medium button];
$button-height-l: [value for large button];
```
