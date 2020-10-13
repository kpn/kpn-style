# List
Create generic ordered and unordered lists, as well as some specific styling variants.

Source file: [packages/component/list/_list.scss](https://github.com/kpn/kpn-style/blob/master/packages/component/list/_list.scss)

---

## Styles

### Unordered list
```html*example
<ul class="ul">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit sed do</li>
  <li>Eiusmod tempor incididunt ut labore</li>
  <li>Et dolore magna aliqua</li>
  <li>Ut enim ad minim veniam quis</li>
</ul>
```

### Unordered list with hyperlinks
```html*example
<ul class="ul">
  <li><a class="a">Sed quia consequuntur</a></li>
  <li><a class="a">Dolores eos qui</a></li>
  <li><a class="a">Voluptatem sequi nesciunt</a></li>
</ul>
```

### Ordered list
```html*example
<ol class="ol">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit sed do</li>
  <li>Eiusmod tempor incididunt ut labore</li>
  <li>Et dolore magna aliqua</li>
  <li>Ut enim ad minim veniam quis</li>
</ol>
```

### Description list
```html*example
<dl class="dl">
  <dt>Name</dt>
  <dd>John</dd>
  <dt>Last name</dt>
  <dd>Doe</dd>
  <dt>Gender</dt>
  <dd>Male</dd>
  <dt>Date of birth</dt>
  <dd>03-05-1941</dd>      
</dl>
```

### Check list
```html*example
<ul class="check-list">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit sed do</li>
  <li>Eiusmod tempor incididunt ut labore</li>
  <li>Et dolore magna aliqua</li>
  <li>Ut enim ad minim veniam quis</li>
</ul>
```

### Inverted check list
On certain background colors you can use the inverted colored check list.

```html*example
<div class="pitch pitch--green">
  <div class="pitch__body">

    <ul class="check-list check-list--inverted">
      <li>Lorem ipsum dolor sit amet</li>
      <li>Consectetur adipiscing elit sed do</li>
      <li>Eiusmod tempor incididunt ut labore</li>
      <li>Et dolore magna aliqua</li>
      <li>Ut enim ad minim veniam quis</li>
    </ul>

  </div>
</div>
```
