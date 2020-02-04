# Usage
Buttons communicate the action that will occur when the user touches them. Keep titles short. Overly long text can crowd your interface and may get truncated on smaller screens.

## Variants
There are 3 standard types of buttons: primary, secondary and link.

<div class="code-example">
  <div class="button-group">
    <button class="button">Primary button</button>
    <button class="button button--secondary">Secondary button</button>
    <button class="button button--link">Link button</button>
  </div>
</div>

### Primary button
The primary button is used for the most important action in page. We consider the most important action to be what lies in the expectation of the user. Actions such as: order, search, next, save, send etc. 

### Secondary button
Secondary buttons are not as important as the primary button. And have less impact on the process of the user. They can be used when there are multiple options for the user to choose from. 

### Link button
The link button has the look and feel of a normal [hyperlink](/component/hyperlink), but has the padding and margin like a button.

## Used colors
<div class="example-color">
  <div class="example-color__blue-default"><code>color(blue)</code> <code>Default</code></div>
  <div class="example-color__blue-dark"><code>color(blue, dark)</code> <code>Hover</code></div>
  <div class="example-color__grey-silver"><code>color(grey, silver)</code> <code>Disabled</code></div>
</div>

## Recommended button placement
### Forms 
The button alignment in [forms](/component/input) should be left. Place the affirmative button on the left, the dismissive text link on the right.

<div class="card display-table">
  <div class="card__header">
    <h2 class="card__title">Create profile</h2>
  </div>
  <div class="card__body">
    <label class="label">Name</label>
    <input class="input" type="text" placeholder="Your name" />
    <label class="label">Gender</label>
    <label class="label-for">
      <input class="input" type="radio" /> Male
    </label>
    <label class="label-for">
      <input class="input" type="radio" /> Female
    </label>
  </div>
  <div class="card__footer">
    <button class="button">Save</button>
    <button class="button button--link">Cancel</button>
  </div>
</div>

## DO's and DON'Ts
### Visual distinction between buttons
Lack of visual distinction between primary and secondary actions can easily lead to failure. Reducing the visual prominence of secondary actions minimizes the risk for potential errors and further directs people towards a successful outcome.

<div class="dos-donts">
  <div class="dos-donts__do">
    <div class="button-group">
      <button class="button button--secondary">Previous</button>
      <button class="button">Next</button>
    </div>
  </div>
  <div class="dos-donts__dont">
    <div class="button-group">
      <button class="button">Previous</button>
      <button class="button">Next</button> 
    </div> 
  </div>  
  <div class="dos-donts__description">
    Use a primary button to direct people towards a successful outcome. 
  </div>
</div>

<div class="dos-donts">
  <div class="dos-donts__do">
    <h3>Lorem</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    <button class="button button--fluid margin-bottom-3">Lorem ipsum</button>
    <h3>Enim</h3>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
    <button class="button button--secondary button--fluid margin-bottom-3">Dolor sit amet</button>
    <h3>Perspiciatis</h3>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
    <button class="button button--secondary button--fluid">Sed ut perspiciatis</button>
  </div>
  <div class="dos-donts__dont">
    <h3>Lorem</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    <button class="button button--fluid margin-bottom-3">Lorem ipsum</button>
    <h3>Enim</h3>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
    <button class="button button--fluid margin-bottom-3">Dolor sit amet</button>
    <h3>Perspiciatis</h3>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
    <button class="button button--secondary button--fluid">Sed ut perspiciatis</button>
  </div>  
  <div class="dos-donts__description">
    Try to limit primary buttons per page.
  </div>
  </div>
</div>
