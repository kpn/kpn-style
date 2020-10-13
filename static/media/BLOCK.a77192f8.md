# Block
Clear and simple block that attracts attention.

Source file: [packages/component/block/_block.scss](https://github.com/kpn/kpn-style/blob/master/packages/component/block/_block.scss)

---

## Customizable variables

### Font size
```scss
$block-font-size: value;
$block-title-font-size: value;
```

---

## Styles

### Basic block
```html*example="block"
<div class="block">
  <div class="block__body">
    <h2 class="block__title">
      Lorem ipsum dolor
    </h2>
    Nemo enim ipsam voluptatem quia, 
    voluptas sit aspernatur aut, 
    odit aut fugit sit amet, 
    consectetur adipiscing elit.
  </div>
</div>
```

### Block with advanced content
```html*example="block"
<div class="block block--blue">
  <div class="block__body">
    <h2 class="block__title">
      Lorem ipsum dolor
    </h2>
    <p class="p">
      Nemo enim ipsam voluptatem quia, 
      voluptas sit aspernatur aut.
    </p>
    <p class="p">
      Odit aut fugit sit amet, 
      consectetur adipiscing.
    </p>
    <a class="block__link">Lorem ipsum</a>    
  </div>
</div>
```

### Block aside other content
With the class `block--stretch` you can make blocks as high as the adjacent (grid) columns.

```html*example="block"
<section class="row">
  <div class="col col--m-8">
  <h1 class="h1">Lorem ipsum dolor</h1>
  <p class="p">
    Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt.
  </p>  
  <img src="/dummy/stylish-cat-dark.png" style="height: 200px;" />
  </div> 

  <div class="col col--m-4">
    <aside class="block block--green block--stretch">
      <div class="block__body">
        <h2 class="block__title">
          Lorem ipsum dolor
        </h2>
        <p class="p">
          Nemo enim ipsam voluptatem quia, 
          voluptas sit aspernatur aut.
        </p>    
        <a class="block__link">Lorem ipsum</a>
      </div>
    </aside>
  </div>   
</section>
```
