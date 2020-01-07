# Content
Generic content block.

Source file: [packages/component/content/_content.scss](https://github.com/kpn/kpn-style/blob/master/packages/component/content/_content.scss)

---

## Customizable variables

### Font size
```scss
$content-title-font-size: value;
```

--- 

## Styles

### Basic content
```html*example*dummy
<div class="content">
  <div class="content__header">
    <div class="content__title">Lorem ipsum</div>
  </div>
  <div class="content__body">
    Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, 
    sed do eiusmod tempor. 
    Nemo enim ipsam voluptatem quia,
    voluptas sit aspernatur aut,
    odit aut fugit.
  </div>
</div>
```

### Advanced content
```html*example*dummy
<div class="content">
  <div class="content__header">
    <h2 class="content__title">Lorem ipsum</h2>
  </div>
  <div class="content__body">
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
  </div>
  <div class="content__body">
    <p class="p">
      Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, 
      sed do eiusmod tempor. 
    </p>
  </div>
  <div class="content__footer">
    <ul class="content__list">
      <li><a class="a">Sed ut perspiciatis</a></li>
      <li><a class="a">Sed do eiusmod tempor</a></li>
      <li><a class="a">Odit aut fugit</a></li>
      <li><a class="a">Consectetur adipiscing</a></li>
  </div>
</div>
```
