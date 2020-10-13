# Pitch
Block to pitch a topic. You can put multiple pitches below each other.

Source file: [packages/layout/pitch/_pitch.scss](https://github.com/kpn/kpn-style/blob/master/packages/layout/pitch/_pitch.scss)

---

## Styles

### Basic pitch
```html*example
<div class="pitch">
  <div class="pitch__body">
    <div class="pitch__title">Lorem ipsum <strong>dolor</strong></div>
    <p class="p">
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. 
        Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco l
        aboris nisi ut aliquip ex ea 
        commodo consequat.
    </p>
  </div>
</div>
```

### Pitch with limited width and centered body
Body with a maximum width of `1200px` and centered in the middle.
```html*example
<div class="pitch pitch--limited">
  <div class="pitch__body">
    <div class="pitch__title">Lorem ipsum <strong>dolor</strong></div>
    <p class="p">
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. 
        Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco l
        aboris nisi ut aliquip ex ea 
        commodo consequat.
    </p>
  </div>
</div>
```

### Pitch with two columns in body
```html*example
<div class="pitch">
  <div class="pitch__body">
    <div class="pitch__title text-align-center">
      Lorem ipsum <strong>dolor</strong> sit amet
    </div>
    <div class="row">
      <div class="col col--m-6">
        <p class="p">
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. 
            Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco l
            aboris nisi ut aliquip ex ea 
            commodo consequat.
        </p>
      </div>
      <div class="col col--m-6">
        <ul class="check-list">
          <li>Lorem ipsum dolor sit amet</li>
          <li>consectetur adipiscing elit</li>
          <li>sed do eiusmod tempor incididunt</li>
        </ul>
      </div>  
    </div>
  </div>
</div>
```

### Multiple pitches
Multiple pitches connect without a gap automatically. Only the last pitch will have a `margin-bottom`. If multiple pitches will not connect automatically without a gap (because of a differing HTML structure) you can use the class `pitch--next` on the next pitch.
```html*example
<div class="pitch">
  <div class="pitch__body">
    <div class="pitch__title">Lorem Ipsum</div>
    <p class="p">
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt.
      </p>
  </div>
</div>

<div class="pitch pitch--green">
  <div class="pitch__body">
    <div class="pitch__title">Lorem Ipsum</div>
    <p class="p">
      Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt.
    </p>
  </div>
</div>

<div class="pitch pitch--white">
  <div class="pitch__body">
    <div class="pitch__title">Lorem Ipsum</div>
    <p class="p">
      Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt.
    </p>
  </div>
</div>

<div class="pitch pitch--blue pitch--last">
  <div class="pitch__body">
    <div class="pitch__title">Lorem Ipsum</div>
    <p class="p">
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt.
      </p>
  </div>
</div>
```
