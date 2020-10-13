# Tile
Tiles are surfaces that display content and actions on a single topic. They should be easy to visually scan for relevant and actionable information. 

Source file: [packages/component/tile/_tile.scss](https://github.com/kpn/kpn-style/blob/master/packages/component/tile/_tile.scss)

---

## Customizable variables

### Font size
```scss
$tile-title-font-size: value;
```

---

## Styles

### Basic tile
```html*example="tile"
<div class="tile">
  <div class="tile__body">
    <i class="tile__icon ui-chat"></i>
    <h2 class="tile__title">
      Lorem ipsum dolor
    </h2>
    <p class="p"><strong>Sit</strong> amet</p>
  </div>
</div>
```

### Tiles with buttons in a grid
```html*example="tile"
<section class="row">
  <div class="col col--m-4">
    <div class="tile tile--stretch">
      <div class="tile__body">
        <i class="tile__icon ui-assemble"></i>
        <h2 class="tile__title">
          Lorem ipsum dolor
        </h2>
        <p class="p"><strong>Sit</strong> amet</p>
        <a class="button button--secondary">Duis aute</a>
      </div>
    </div>
  </div> 

  <div class="col col--m-4">
    <div class="tile tile--stretch">
      <div class="tile__body">
        <i class="tile__icon ui-bulb"></i>
        <h2 class="tile__title">
          Lorem ipsum dolor
        </h2>
        <p class="p"><strong>Sit</strong> amet</p>
        <a class="button button--secondary">Duis aute</a>
      </div>
    </div>
  </div> 

  <div class="col col--m-4">
    <div class="tile tile--stretch">
      <div class="tile__body">
        <i class="tile__icon ui-envelop"></i>
        <h2 class="tile__title">
          Lorem ipsum dolor
        </h2>
        <p class="p"><strong>Sit</strong> amet</p>
        <a class="button button--secondary">Duis aute</a>
      </div>
    </div>
  </div>   
</section>
```
