# Screen
Responsive utility with a mobile-first mindset.

Source file: [packages/base/screen/_screen.scss](https://github.com/kpn/kpn-style/blob/master/packages/base/screen/_screen.scss)

By default there are four screen sizes available within KPN Style:

* `xs` (extra small)
* `s` (small)
* `m` (medium)
* `l` (large)


---

## Customizable variables

### $screen
Sass map with minimum width for specific device screen sizes. This map is used in the function `screen` and mixin `breakpoint`.

```scss
 $screen: (
  xs: 0,
  s: 768,
  m: 992,
  l: 1200,
  unit: px
);
```

---

## Functions

### screen()
Get the minimum width for a specific device screen size from the map `$screen`.

#### Syntax
```scss
screen($size: value)
```

#### Example
```scss
div {
  min-width: screen(s);
}

article {
  max-width: screen(l);
}
```

---

## Mixins

### breakpoint()
Get a media query based on value(s) from the map `$screen`.

#### Syntax
```scss
breakpoint($min-width: value, $max-width: value *optional) { @content }
```

#### Example
```scss
div {
  width: 200px;

  @include breakpoint(s, m) { 
    width: 320px; 
  }

  @include breakpoint(m) { 
    width: auto; 
  }  
}
```
