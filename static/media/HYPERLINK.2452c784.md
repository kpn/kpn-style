# Hyperlink
Hyperlinks help the user to navigate through the website or app.

Source file: [packages/base/hyperlink/_hyperlink.scss](https://github.com/kpn/kpn-style/blob/master/packages/base/hyperlink/_hyperlink.scss)

---

## Mixins

### link()
Create a blue link with hover style.

#### Syntax
```
link()
```

#### Example 
```scss
span {
  @include link();
  font-size: 24px;
}
```

## Styles
Use the class `a` (anchor) to add the hyperlink style to an element. 

### Basic Hyperink
```html*example
Lorem <a class="a">ipsum dolor</a> sit amet.
```

### Disabled Hyperlink
```html*example
Lorem <a class="a a--disabled">ipsum dolor</a> sit amet.
```

### Hyperlink with UI icon
Please make sure that there is no white space between the UI icon and the text for proper underline styles. Because of the use of the CSS `i`-selector under the hood, the UI icon will only work properly with the `<i>` element.

```html*example
<p>
 <a class="a"><i class="ui-heart"></i>Consectetur adipiscing</a>
</p>
<p>
  <a class="a">Consectetur adipiscing<i class="ui-external-link"></i></a>
</p>
```

#### Hyperlink for navigation
```html*example
<a class="a a--left">Lorem</a> ipsum dolor sit <a class="a a--right">amet</a>
```
