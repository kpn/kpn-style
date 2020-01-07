# Dialog
Dialogs inform users about a specific task and may contain critical information, require decisions, or warn the user.

Source file: [packages/component/dialog/_dialog.scss](https://github.com/kpn/kpn-style/blob/master/packages/component/dialog/_dialog.scss)

---

## Styles
Use the [backdrop](/#/layout/backdrop) for a background layer below the dialog. See [modal](/#/component/modal) for more freedom when using content.

### Example
This is a static example of the dialog. The `position` property has been overridden for demo purposes.

```html*example="dialog"
<h1>Lorem ipsum dolor</h1>
<p>
  Lorem ipsum dolor sit amet, 
  consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt.
</p>

<div class="dialog dialog--active">
  <div class="dialog__header">
    <div class="dialog__title">Consectetur adipiscing elit</div>
    <button class="dialog__close"></button>
  </div>
  <div class="dialog__body">
    Nemo enim ipsam voluptatem quia, voluptas sit aspernatur aut, odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. 
  </div>
  <div class="dialog__footer">
    <div class="button-group button-group--respond button-group--reverse">
      <button class="button button--4">Confirm</button>
      <button class="button button--secondary button--4">Cancel</button>
    </div>
  </div>
</div>

  <div class="backdrop backdrop--active"></div>
```
