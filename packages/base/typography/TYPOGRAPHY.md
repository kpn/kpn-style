# Typography
Typography styles define the size, spacing, and shape of text.

Source file: [packages/base/typography/_typography.scss](https://github.com/kpn/kpn-style/blob/master/packages/base/typography/_typography.scss)

---

## Customizable variables

### Font family
The font family variables are widely used by KPN Style and will affect other components.

```scss
$font-family-heading: default value for headings and titles;
$font-family-text: default value for text;
```

### Font size
The font size variables are widely used by KPN Style and will affect other components.

```scss
$font-size-s: value for small text;
$font-size-m: value for medium text;
$font-size-l: value for large text;
```

### Line height
```scss
$line-height-s: value for small line height;
$line-height-m: value for medium line height;
$line-height-l: value for large line height;
```

### Heading
The heading variables are available from `h1` to `h4`. In KPN Style, the different sizes are applied within breakpoints `xs`, `s` and `m`.

```scss
$h1-font-size-xs: value for extra small heading;
$h1-font-size-s: value for small heading;
$h1-font-size-m: value for medium heading;
```

---

## Mixins

### font-face()
Set font face properties for `eot`, `woff`, `ttf` and `svg` file types.

#### Syntax

```scss
font-face(
  font-family: string, 
  font-style: value, 
  font-weight: value, 
  folder: string, 
  file: string *filename without extention
)
```

#### Example
KPN Style is using `KPN Metric` as font for titles and headings from `h1` to `h3`. The font files for KPN Metric are available in the `typography` folder. For all other text, KPN Style will use your local system font.

```scss
// font-face(font family name, style, weight, path, filename without extension);
@include font-face('kpn-metric', normal, 700, '../node_modules/@kpn-style/bundle/base/typography', 'kpn-metric-bold');
```

---

## Style

### Heading with paragraph
The `h1` headings are KPN green by default.

```html*example
<h1 class="h1 h1--impassive">Lorem ipsum dolor</h1>
<p class="p">
  Lorem ipsum dolor sit amet, 
  consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt.
</p>
```

### More headings with paragraph
```html*example
<h2 class="h2">Heading 2</h2>
<p class="p p--large">
  Lorem ipsum dolor sit amet.
</p>

<h3 class="h3">Heading 3</h3>
<p class="p">
  Consectetur adipiscing elit.
</p>

<h4 class="h4">Heading 4</h4>
<p class="p p--small">
  Sed do eiusmod tempor.
</p>
```

### Impassive headings
Heading font sizes will not change on different screen sizes if your headings are impassive.

```html*example
<h1 class="h1 h1--impassive">Lorem ipsum dolor</h1>
<h2 class="h2 h2--impassive">Lorem ipsum dolor</h2>
<h3 class="h3 h3--impassive">Lorem ipsum dolor</h3>
<h4 class="h4 h4--impassive">Lorem ipsum dolor</h4>
```

### Strong headings
Make headings (except h1) stronger with a striking color. 
```html*example
<h2 class="h2 h2--strong">Lorem ipsum dolor</h2>
<h3 class="h3 h3--strong">Lorem ipsum dolor</h3>
<h4 class="h4 h4--strong">Lorem ipsum dolor</h4>
```

### Calm headings
```html*example
<!-- Font-weight: 300 (light) -->
<h1 class="h1 h1--calm">Lorem ipsum dolor</h1>
<h2 class="h2 h2--calm">Lorem ipsum dolor</h2>
<h3 class="h3 h3--calm">Lorem ipsum dolor</h3>

<!-- Font-weight: 400 (normal) -->
<h4 class="h4 h4--calm">Lorem ipsum dolor</h4>
```

Calm headings need the light (300) KPN Metric font: 

```scss
@include font-face('kpn-metric', normal, 300, '../node_modules/@kpn-style/bundle/base/typography', 'kpn-metric-light');
@include font-face('kpn-metric', normal, 400, '../node_modules/@kpn-style/bundle/base/typography', 'kpn-metric-normal');
```

### Other elements
```html*example
<!-- Blockquote -->
<blockquote class="blockquote">
  Lorem ipsum dolor sit amet,
  consectetur adipiscing elit.
</blockquote>

<!-- Horizontal rule -->
<hr class="hr" />
```

### Default KPN Style
All typography styles are also available without any special overriding classes on a per-element basis when the outer parent element has `kpn-style` as its class.
```html*example
<div class="kpn-style">
  <h1>Lorem ipsum dolor</h1>
  <p>
    Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt.
  </p>
</div>
```
