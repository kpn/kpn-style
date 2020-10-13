# Grid
Mobile-first 12 column grid system.

Source file: [packages/layout/grid/_grid.scss](https://github.com/kpn/kpn-style/blob/master/packages/layout/grid/_grid.scss)

---

## Styles

### Basic columns 
```html*example="grid"
<div class="row">
  <div class="col col--12"><span>12/12</span></div>
</div>
<div class="row">
  <div class="col col--1"><span>1/12</span></div>
  <div class="col col--11"><span>11/11</span></div>
</div>
<div class="row">
  <div class="col col--2"><span>2/12</span></div>
  <div class="col col--10"><span>10/12</span></div>
</div>
<div class="row">
  <div class="col col--3"><span>3/12</span></div>
  <div class="col col--9"><span>9/12</span></div>
</div>
<div class="row">
  <div class="col col--4"><span>4/12</span></div>
  <div class="col col--8"><span>8/12</span></div>
</div>
<div class="row">
  <div class="col col--5"><span>5/12</span></div>
  <div class="col col--7"><span>7/12</span></div>
</div>
<div class="row">
  <div class="col col--6"><span>6/6</span></div>
  <div class="col col--6"><span>6/6</span></div>
</div>
```

### Responsive columns
Resize your screen to see the (mobile-first) behavior of the columns. For example, the style from class `col--m-4` will be applied when the screen will match the minimum width of a medium screen format. 

Under the hood, this grid is using [breakpoint](/#/base/screen) mixins like `@include breakpoint(m)`.

```html*example="grid"
<div class="row">
  <div class="col col--s-4">
    <span>From small screen 4/12</span>
  </div>
  <div class="col col--m-4">
    <span>From medium screen 4/12</span>
  </div>
  <div class="col col--l-4">
    <span>From large screen 4/12</span>
  </div>
</div>
```

### Auto columns
Let the grid automatically calculate the width of the columns from any screen size.

```html*example="grid"
<div class="row">
  <div class="col col--xs">
    <span>Auto</span>
  </div>
  <div class="col col--s">
    <span>Auto</span>
  </div>
  <div class="col col--m">
    <span>Auto</span>
  </div>  
</div>
```

### Spread columns in row
```html*example="grid"
<div class="row row--spread">
  <div class="col col--5">
    <span>5/12</span>
  </div>
  <div class="col col--5">
    <span>5/12</span>
  </div>
</div>
```

### Reverse columns
```html*example="grid"
<div class="row row--reverse">
  <div class="col col--6">
    <span>1. Lorem</span>
  </div>
  <div class="col col--6">
    <span>2. Ipsum</span>
  </div>
</div>
```

### Responsive reverse
Reverse columns, but only for medium sized screens. This prevents reversing on small screens.

```html*example="grid"
<div class="row row--reverse-m">
  <div class="col col--6">
    <span>1. Lorem</span>
  </div>
  <div class="col col--6">
    <span>2. Ipsum</span>
  </div>
</div>
```
