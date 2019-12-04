# Footer

Source file: [packages/layout/footer/_footer.scss](https://github.com/kpn/kpn-style/blob/master/packages/layout/footer/_footer.scss)

---

## Customizable variables

### Font size and height
```scss
$footer-height: value;
$footer-font-size: value;
```

---

## Styles

### Basic footer
```html*example
<footer class="footer">
  <div class="footer__body">
    <dl class="footer__list">
      <dt><a class="footer__link">Lorem ipsum</a></dt>
      <dd><a class="footer__link">Dolor sit amet</a></dd>
      <dd><a class="footer__link">Consectetur </a></dd>
      <dd><a class="footer__link">Adipiscing elit</a></dd>
    </dl>
  </div>
</footer>
```

### Footer with inline links
```html*example
<footer class="footer">
  <div class="footer__body">
    <ul class="footer__inline-list">
      <li><a class="footer__link"><i class="ui-facebook"></i></a></li>
      <li><a class="footer__link"><i class="ui-twitter"></i></a></li>
      <li><a class="footer__link"><i class="ui-whatsapp"></i></a></li>
    </ul>
    <ul class="footer__inline-list footer__inline-list--separated">
      <li><a class="footer__link">Lorem ipsum</a></li>
      <li><a class="footer__link">Dolor sit amet</a></li>
      <li><a class="footer__link">Consectetur</a></li>
    </ul>  
  </div>
</footer>
```

### Advanced footer
```html*example
<footer class="footer">
  <div class="footer__body">
    <div class="row">
      <div class="col col--s-4">
        <dl class="footer__list">
          <dt><a class="footer__link">Lorem ipsum</a></dt>
          <dd><a class="footer__link">Dolor sit amet</a></dd>
          <dd><a class="footer__link">Consectetur </a></dd>
          <dd><a class="footer__link">Adipiscing elit</a></dd>
        </dl>
      </div>
      <div class="col col--s-4">
        <dl class="footer__list">
          <dt><a class="footer__link">Lorem ipsum</a></dt>
          <dd><a class="footer__link">Dolor sit amet</a></dd>
          <dd><a class="footer__link">Consectetur </a></dd>
          <dd><a class="footer__link">Adipiscing elit</a></dd>
        </dl>
      </div>
      <div class="col col--s-4">
        Lorem ipsum<br />
        Dolor sit amet
      </div>         
    </div>
  </div>

  <div class="footer__body">
    <ul class="footer__inline-list">
      <li><a class="footer__link"><i class="ui-facebook"></i></a></li>
      <li><a class="footer__link"><i class="ui-twitter"></i></a></li>
      <li><a class="footer__link"><i class="ui-whatsapp"></i></a></li>
    </ul>
    <ul class="footer__inline-list footer__inline-list--separated">
      <li><a class="footer__link">Lorem ipsum</a></li>
      <li><a class="footer__link">Dolor sit amet</a></li>
      <li><a class="footer__link">Consectetur</a></li>
    </ul>  
    <a class="footer__logo"><img src="/dummy/logo-kpn-white.png" /></a>
  </div>
</footer>
```
