# Card
Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information.

Source file: [packages/component/card/_card.scss](https://github.com/kpn/kpn-style/blob/master/packages/component/card/_card.scss)

---

## Customizable variables

### Font size
```scss
$card-title-font-size: value;
```

---

## Styles

### Basic card
```html*example="card"
<div class="card">
  <div class="card__header">
    <div class="card__title">Lorem ipsum</div>
  </div>
  <div class="card__body">
    Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, 
    sed do eiusmod tempor. 
    Nemo enim ipsam voluptatem quia,
    voluptas sit aspernatur aut,
    odit aut fugit.
  </div>
</div>
```

### Advanced card
The three dots in the card header are part of the [action menu](/#/component/action-menu).

```html*example="card"
<div class="card">
  <div class="card__header">
    <h2 class="card__title">Lorem ipsum</h2>
    <div class="action-menu">
      <a class="action-menu__trigger"></a>
    </div>
  </div>
  <div class="card__body">
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
  <div class="card__body">
    <p class="p">
      Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, 
      sed do eiusmod tempor. 
    </p>
  </div>
  <div class="card__footer">
    <ul class="card__list">
      <li><a class="a">Sed ut perspiciatis</a></li>
      <li><a class="a">Sed do eiusmod tempor</a></li>
      <li><a class="a">Odit aut fugit</a></li>
    </ul>
  </div>
</div>
```

### Basic cards in grid
Cards in a grid with equal height from the class `.card--stretch`.   
```html*example
<section class="row">
  <article class="col col--s-6">
    <div class="card card--stretch">
      <div class="card__header">
        <h1 class="card__title">Lorem ipsum</h1>
      </div>
      <div class="card__body">
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor. 
        Nemo enim ipsam voluptatem quia,
        voluptas sit aspernatur aut,
        odit aut fugit.
      </div>
    </div>
  </article>

  <article class="col col--s-6">
    <div class="card card--stretch">
      <div class="card__header">
        <h1 class="card__title">Lorem ipsum</h1>
      </div>
      <div class="card__body">
        Nemo enim ipsam voluptatem quia,
        voluptas sit aspernatur aut,
        odit aut fugit.      
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor. 
        Nemo enim ipsam voluptatem quia,
        voluptas sit aspernatur aut,
        odit aut fugit.
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor. 
      </div>
    </div>
  </article>    
</section>
```
