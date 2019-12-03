# Space
Default spacing inside and between elements. Most commonly used for padding and margin. Nearly all of the designs that UX Lab provides are based on spaces that are multiples of 8 pixels.

Source file: [packages/base/space/_space.scss](https://github.com/kpn/kpn-style/blob/master/packages/base/space/_space.scss)

---

## Customizable variables

### $space-base
Variable that is used in the function `space`. By default one spacing is `8px`.

```scss
$space-base: value;
```

---

## Functions

### space()
Get space from the variable `$space` multiplied by input. The default multiplier is `1`. Negative numbers are allowed, as well as non-integers such as `0.5`.

#### Syntax 
```scss
space($multiplier: number)
```

#### Examples
```scss
div {
  margin-top: space(0.5);
  margin-bottom: space(); // same as space(1)
  padding: space(2);
  & > .exception {
    margin: space(-2);
  }
}
```
