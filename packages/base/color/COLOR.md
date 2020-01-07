# Color
Beyond our logo, color is the most recognizable aspect of our brand identity.

Source file: [packages/base/color/_color.scss](https://github.com/kpn/kpn-style/blob/master/packages/base/color/_color.scss)

---

## Variables

### $colors
Under the hood, there are two maps, respectively called `$color-names` and `$color-types`. They are merged into one map with the name `$colors`.

---

## Functions

### color()
Get value from the variable `$colors` (Sass map). When no shade is specified, it will use the **default** color from the given group.

#### Syntax
```
color(group: string, shade: string *optional)
```

#### Example
```scss
h1 {
  color: color(orange, dark);
}

h2 {
  color: color(green, default);
}

// You can skip the second parameter for the default shades
p {
  color: color(green);
}
```

---

## Available colors

### Green
<div class="example-color">
  <div class="example-color__green-subtle"><code>color(green, subtle)</code> <code>#f4fa43</code></div>
  <div class="example-color__green-light"><code>color(green, light)</code> <code>#ccdd77</code></div>
  <div class="example-color__green-bright"><code>color(green, bright)</code> <code>#99cc00</code></div>
  <div class="example-color__green-default"><code>color(green)</code> <code>#009900</code></div>
  <div class="example-color__green-dark"> <code>color(green, dark)</code> <code>#007700</code></div>
  <div class="example-color__green-darkest"><code>color()</code> <code>#005500</code></div>
</div>

### Blue
<div class="example-color">
  <div class="example-color__blue-subtle"><code>color(blue, subtle)</code> <code>#dbecf9</code></div>
  <div class="example-color__blue-light"><code>color(blue, light)</code> <code>#99ccff</code></div>
  <div class="example-color__blue-default"><code>color(blue)</code> <code>#0099ff</code></div>
  <div class="example-color__blue-dark"><code>color(blue, dark)</code> <code>#0077cc</code></div>
  <div class="example-color__blue-darkest"><code>color(blue, darkest)</code> <code>#005599</code></div>
</div>

### Orange
<div class="example-color">
  <div class="example-color__orange-subtle"><code>color(orange, subtle)</code> <code>#feeacc</code></div>
  <div class="example-color__orange-light"><code>color(orange, light)</code> <code>#ffbb55</code></div>
  <div class="example-color__orange-default"><code>color(orange)</code> <code>#ff9900</code></div>
  <div class="example-color__orange-dark"><code>color(orange, dark)</code> <code>#ee7700</code></div>
</div>

### Red
<div class="example-color">
  <div class="example-color__red-default"><code>color(red)</code> <code>#ff3333</code></div>
  <div class="example-color__red-dark"><code>color(red, dark)</code> <code>#e52e2e</code></div>
</div>

### Grey
<div class="example-color">
  <div class="example-color__grey-white"><code>color(grey, white)</code> <code>#ffffff</code></div>
  <div class="example-color__grey-subtle"><code>color(grey, subtle)</code> <code>#f3f3f3</code></div>
  <div class="example-color__grey-light"><code>color(grey, light)</code> <code>#e3e3e3</code></div>
  <div class="example-color__grey-light-silver"><code>color(grey, light-silver)</code> <code>#d3d3d3</code></div>
  <div class="example-color__grey-silver"><code>color(grey, silver)</code> <code>#b3b3b3</code></div>
  <div class="example-color__grey-medium"><code>color(grey, medium)</code> <code>#939393</code></div>
  <div class="example-color__grey-default"><code>color(grey)</code> <code>#737373</code></div>
  <div class="example-color__grey-dove"><code>color(grey, dove)</code> <code>#535353</code></div>
  <div class="example-color__grey-dark"><code>color(grey, dark)</code> <code>#333333</code></div>
  <div class="example-color__grey-black"><code>color(grey, black)</code> <code>#131313</code></div>
</div>

### Types
Certain functionally named style colors that are frequently used are also available through the color function.

* `color(border)` 
* `color(shadow)` 
* `color(text)`

* `color(informative)`
* `color(informative ,light)`

* `color(error)` 
* `color(error, light)` 

* `color(caution)`
* `color(caution, light)`

* `color(success)`
* `color(success, light)`
