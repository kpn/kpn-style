# Modal
Modals give the possibility to show information as a layer over the current content in a way that is blocking: users cannot continue without taking an action with the modal (which might include closing it).

Source file: [packages/component/modal/_modal.scss](https://github.com/kpn/kpn-style/blob/master/packages/component/modal/_modal.scss)

---

## Styles
See [dialog](/#/component/dialog) to inform users about a specific task. _Dialog is preferred over modal when possible, as it is more specific._ Use the [backdrop](/#/layout/backdrop) for a background layer below the modal.

### Example
This is a static example of the modal. The `position` property has been overridden for demo purposes.

```html*example="modal"
<h1>Lorem ipsum dolor</h1>
<p>
  Lorem ipsum dolor sit amet, 
  consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt.
</p>

<div class="modal modal--active">
  <button class="modal__close"></button>
  <div class="modal__body">
    <h2 class="h2">Nemo enim ipsam voluptatem</h2>
    <p class="p">
      Esse cillum dolore eu fugiat. 
      Nulla pariatur excepteur sint 
      occaecat cupidatat non proident.      
      Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt.
      Duis aute irure dolor in 
    </p>      
    <p class="p">
      Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt.
      Duis aute irure dolor in 
      reprehenderit in voluptate velit, 
      esse cillum dolore eu fugiat. 
      Nulla pariatur excepteur sint 
      occaecat cupidatat non proident.      
    </p>   
  </div>
</div>

<div class="backdrop backdrop--active"></div>
```
