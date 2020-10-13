# Jumbotron
Big board for calling attention to specific content.

Source file: [packages/layout/jumbotron/_jumbotron.scss](https://github.com/kpn/kpn-style/blob/master/packages/layout/jumbotron/_jumbotron.scss)

---

## Customizable variables

### Font size
```scss
$jumbotron-font-size: value;
$jumbotron-title-font-size: value;
```

---

## Styles

### Basic jumbotron
```html*example
<div class="jumbotron">
  <div class="jumbotron__body">
    <h1 class="jumbotron__title">
      Lorem ipsum dolor sit amet 
    </h1>  
    Nemo enim ipsam voluptatem quia voluptas
  </div>
</div>
```

### Advanced jumbotron
```html*example
<div class="jumbotron">
  <div class="jumbotron__body">
    <img alt="Logo image" src="/dummy/stylish-cat-white.png" style="width: 240px;" />
  </div>      
  <div class="jumbotron__body">
    <h1 class="jumbotron__title">
      Lorem ipsum dolor sit amet 
    </h1>
    <p class="p">
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
    </p>
    <a class="button">Nemo enim</a>
  </div>
</div>
```
