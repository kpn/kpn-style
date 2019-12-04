# Slider
Sliders let users select from a range of values by moving the slider thumb.

Source file: [packages/component/slider/_slider.scss](https://github.com/kpn/kpn-style/blob/master/packages/component/slider/_slider.scss)

---

## Customizable variables

### Font size
```scss
$slider-thumb-size: value;
$slider-scale-font-size: value;
```

---

## Styles

### Basic slider
```html*example="slider"
<div class="slider">
  <div class="slider__track">
    <div class="slider__fill"></div>
    <div class="slider__thumb"></div>
  </div>
</div>
```

### Slider with moved thumb
Both the `slider__fill` and `slider__thumb` need JavaScript to control their behavior.

```html*example="slider"
<div class="slider">
  <div class="slider__track">
    <div class="slider__fill" style="width: 60%;"></div>
    <div class="slider__thumb" style="left: 60%;"></div>
  </div>
</div>
```

### Disabled slider
```html*example="slider"
<div class="slider slider--disabled">
  <div class="slider__track">
    <div class="slider__fill" style="width: 60%;"></div>
    <div class="slider__thumb" style="left: 60%;"></div>
  </div>
</div>
```

### Slider with range
Add the class `slider--range` for an extra double filled track.

```html*example="slider"
<div class="slider slider--range">
  <div class="slider__track">
    <div class="slider__fill" style="left: 10%; width: 20%;"></div>
    <div class="slider__thumb" style="left: 10%;"></div>
    <div class="slider__thumb" style="left: 30%;"></div>
  </div>
</div>
```

### Slider with scale
To align the `slider__scale` properly you need JavaScript to calculate the correct horizontal margin. The formula is as follows:

Negative scale width `divided` by the ((total amount of ticks `minus` 1) `times` 2)

In the example below the corresponding formula is: 
```
-100 / ((5 - 1) * 2) = -12.5
```

Use the [text helper classes](/#/base/common) to highlight the included ticks.

```html*example="slider"
<div class="slider">
  <div class="slider__track">
    <div class="slider__fill" style="width: 25%;"></div>
    <div class="slider__thumb" style="left: 25%;"></div>
  </div>
  <ul class="slider__scale" style="margin: 0 -12.5%;">
    <li class="text-bold">0</li>
    <li class="text-bold">100</li>
    <li>200</li>
    <li>300</li>
    <li>400</li>
  </ul>
</div>
```
