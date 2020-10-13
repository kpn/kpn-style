# Container
Consistent and responsive padding for sections.

Source file: [packages/base/container/_container.scss](https://github.com/kpn/kpn-style/blob/master/packages/base/container/_container.scss)

---

## Mixins

### container()
Create a responsive container with vertical and/or horizontal padding.

#### Syntax
```
container($padding-axis: string *optional, $limit-width: string *optional)
```

Available axis values: `x`, `y` and `both`.

#### Example 
```scss
div {
  @include container();
}

nav {
  // Container with horizontal padding (x)
  // and limited width for small screens (s)
  @include container(x, s);
}
```

## Styles
The blue background is just to visualize the padding inside the container.

### Basic container
```html*example="container"
<article class="container">
  Lorem ipsum dolor sit amet
</article>
```

### Centered container 
Container that is centered in the middle.

```html*example="container"
<section
  class="container container--centered"
  style="max-width: 160px;">
  Lorem ipsum
</section>
```

### Limited container 
Container with maximum width of 1200 pixels.

```html*example="container"
<main class="container container--limited">
  Lorem ipsum dolor sit amet
</main>
```

### Tall container
Container with more vertical padding.

```html*example="container"
<article class="container container--tall">
  Lorem ipsum dolor sit amet
</article>
```

### Main container
Combination of a limited and a tall container.

```html*example="container"
<article class="container container--main">
  Lorem ipsum dolor sit amet
</article>
```
