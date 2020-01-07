# Accordion
The accordion component is used to display content in a compact way. The user has control over which items are expanded. The accordion is also known as expansion panel or collapsible panel.

Source file: [packages/component/accordion/_accordion.scss](https://github.com/kpn/kpn-style/blob/master/packages/component/accordion/_accordion.scss)

---

## Customizable variables

### Font size
```scss
$accordion-title-font-size: value;
```

---

## Styles

### Accordion with expanded item
```html*example="accordion"
<ul class="accordion">
  <li class="accordion__item">
    <div class="accordion__title">
      Lorem ipsum dolor sit amet
    </div>
    <div class="accordion__content">
      Ut enim ad minim veniam
      quis nostrud exercitation. 
    </div>
  </li>

  <li class="accordion__item accordion__item--expanded">
    <div class="accordion__title">
      Consectetur adipiscing elit
    </div>
    <div class="accordion__content">
      Duis aute irure dolor in
      reprehenderit in voluptate.
    </div>
  </li>

  <li class="accordion__item">
    <div class="accordion__title">
      Ullamco laboris nisi
    </div>
    <div class="accordion__content">
      Aliquip ex ea commodo consequat
      voluptate velit esse cillum.
    </div>
  </li>
</ul>
```

### Accordion in grid with advanced content
```html*example="accordion"
<div class="row">
  <div class="col col--m-6">
    
    <ul class="accordion">
      <li class="accordion__item accordion__item--expanded">
        <h3 class="accordion__title">
          Consectetur adipiscing elit
        </h3>
        <div class="accordion__content">
          <h4 class="h4">
            Ullamco laboris nisi
          </h4>
          <p class="p">
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit sed, 
            do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.</p>
          <p class="p">
            Duis aute irure dolor in 
            reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat, 
            nulla pariatur excepteur sint 
            occaecat cupidatat non. 
          </p>          
        </div>
      </li>
    </ul>
  
  </div>
</div>

```

