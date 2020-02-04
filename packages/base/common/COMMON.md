# Common
Common variables, functions, mixins and styles (helper classes). Many of these are not meant for daily usage, but rather for situations where one might want to customize KPN style, run into an edge case, or work on KPN style itself.

Source file: [packages/base/common/_common.scss](https://github.com/kpn/kpn-style/blob/master/packages/base/common/_common.scss)

---

## Customizable variables

### $selector-prefix
Variable with prefix for all CSS classes in KPN Style (except icons). By default the variable is undefined. We discourage changing the prefix, as it can cause confusion when collaborating with others. You might still want to override the prefix when getting into naming conflicts with (legacy) code.

#### Example
```html
<!-- Class name when prefix is undefined -->
<button class="button">Lorem ipsum</button>
```

```scss
$selector-prefix: 'kpn-';
```

```html
<!-- Class name when prefix is defined with "kpn-" -->
<button class="kpn-button">Lorem ipsum</button>
```

---

## Functions

### selector()
Generate a class name with a defined or undefined `$selector-prefix` prefix.

#### Syntax
```
selector(class-name: string)
```

#### Example
```scss
$button: selector(button);

#{$button} {
  color: blue;
}
```

---

## Mixins

### Overview of common style mixins
* `border`
* `border-bottom`
* `border-left`
* `border-right`
* `border-top`
* `border-radius`

* `shadow(1)` or just `shadow` (adds shadow level 1)
* `shadow(2)` (adds shadow level 2)
* `shadow(3)` (adds shadow level 3)

* `box` (box with border-radius and shadow)
* `ellipsis` (truncate overflowing text)
* `trim-child-margin`

#### Example
```scss
div {
  // Adds border radius and truncates text
  @include border-radius;
  @include ellipsis;
}

section {
  // Adds shadow level 1 
  @include shadow;
}

nav {
  // Adds shadow level 2
  @include shadow(2);
}

div {
  // Removes margin bottom of last child 
  @include trim-child-margin;

  p {
    // The last p element would have no margin botton 
  }
}
```

### Overview of reset mixins
Reset style of corresponding element.
* `reset-a`
* `reset-button`
* `reset-dl`
* `reset-ul`

```scss
button {
  @include reset-button;
  background-color: blue;
}
```

---

## Styles
Helper classes with common styles.

### Display
* `display-inline`
* `display-inline-block`
* `display-block`
* `display-flex`
* `display-table`

### Shown and hidden
Responsive display helpers serve to show or hide elements based on the screen width.

* `shown`
* `shown-xs`
* `shown-s`
* `shown-m`
* `shown-l`
* `hidden`
* `hidden-xs`
* `hidden-s`
* `hidden-m`
* `hidden-l`

```html*example="display-helpers"
<div class="hidden">I'm always hidden.</div>
<div class="hidden-xs">I'm hidden on extra small screens.</div>
<div class="hidden-l">I'm hidden on large screens.</div>

<div class="shown">I'm always shown.</div>
<div class="shown-xs">I'm shown on extra small screens.</div>
<div class="shown-l">I'm shown on large screens.</div>
```

### Text
* `text-align-center`
* `text-align-left`
* `text-align-right`
* `text-bold`
* `text-italic`
* `text-underline`

#### Example
```html*example
<div class="text-align-right text-underline">
  Lorem ipsum dolor
</div>
```


### Margin and padding
For margin and padding there are helper classes from space 0 till space 4. [Read more about spaces here](/#/base/space). They are available for all sides and `top`, `right`, `bottom` and `left`. Only for margin there is also the class `margin-auto` that has the property `margin-left` and `margin-right` with `auto`.

* `margin-auto`
* `margin-0`
* `margin-0-5`
* `margin-1`
* `margin-2`
* `margin-3`
* `margin-4`

* `margin-top-0-5`
* `...`

#### Example
```html
<div class="foo margin-bottom-1">
  Lorem ipsum dolor
</div>

<div class="bar padding-2">
  Sit amet
</div>
```

### Scroll
* `scroll-x`
* `scroll-y`
