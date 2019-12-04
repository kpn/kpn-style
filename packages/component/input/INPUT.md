# Input
Text fields allow users to input, edit, and select text. Text fields typically reside in forms but can appear in other places, like dialog boxes and search.

Source file: [packages/component/input/_input.scss](https://github.com/kpn/kpn-style/blob/master/packages/component/input/_input.scss)

---

## Customizable variables

### Input and text area
```scss
$input-font-size: value;
$input-text-height: value;
$textarea-min-height: value;
```

---

## Styles

### Text input
```html*example
<input class="input" type="text" />
```

### Text input with placeholder and label
```html*example
<label class="label">First name</label>
<input class="input" type="text" placeholder="Enter your first name" />
```

### Select
```html*example
<select class="select">
  <option>Lorem</option>
  <option>Ipsum</option>
  <option>Dolor</option>
</select>
```

### Text area
```html*example
<textarea class="textarea">Lorem ipsum</textarea>
```

### Checbox input
```html*example
<label class="label-for">
  <input class="input" type="checkbox" /> Choose me
</label>

<label class="label-for">
  <input class="input" type="checkbox" /> Choose me
</label>
```

### Checbox radio
```html*example
<label class="label-for">
  <input class="input" type="radio" /> Choose me
</label>

<label class="label-for">
  <input class="input" type="radio" /> Choose me
</label>
```

### Input field
Use `input-field` for more advanced input. With `input-field` you have the option, for example, to apply input validation.

#### Valid text input
```html*example
<div class="input-field">
  <label class="label" for="middle-name">Middle name</label>
  <div class="input-field__input">
    <input class="input" type="text" placeholder="Enter your middle name" id="middle-name" />
  </div>
  <div class="input-field__feedback">
    Please enter your middle name
  </div>
</div>
```

#### Invalid text input
Add the class `input-field--error` to show errors for an invalid `input-field`.

```html*example
<div class="input-field input-field--error">
  <label class="label" for="last-name">Last name</label>
  <div class="input-field__input">
    <input class="input" type="text" placeholder="Enter your last name" id="last-name" />
  </div>
  <div class="input-field__feedback">
    Please enter your last name
  </div>
</div>
```

#### Invalid checkbox
```html*example
<div class="input-field input-field--error">
  <label class="label">Choose something</label>
  <div class="input-field__input">
    <label class="label-for">
      <input class="input" type="checkbox" /> Choose me
    </label>

    <label class="label-for">
      <input class="input" type="checkbox" /> Choose me
    </label>
  </div>
  <div class="input-field__feedback">
    Please choose something
  </div>
</div>
```

#### Input with icon button action
```html*example
<div class="input-field">
  <div class="input-field__input">
    <input class="input" type="text" placeholder="Search keyword" />
  </div>
  <button class="input-field__action-button"><i class="ui-search"></i></button>
</div>
```

#### Input with text button action
```html*example
<div class="input-field">
  <div class="input-field__input">
    <input class="input" type="password" placeholder="Enter your password" />
  </div>
  <button class="input-field__action-button">Show password</button>
</div>
```
