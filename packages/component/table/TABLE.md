# Table
Data tables display information in a way that’s easy to visually scan, so that users can look for patterns and insights. 

Source file: [packages/component/table/_table.scss](https://github.com/kpn/kpn-style/blob/master/packages/component/table/_table.scss)

---

## Styles

### Basic table
```html*example
<table class="table">
  <thead>
    <tr>
      <th>Lorem</th>
      <th>Ipsum</th>
      <th>Dolor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lorem ipsum dolor</td>
      <td>Sit amet consectetur</td>
      <td>Adipiscing elit sed</td>
    </tr>
    <tr>
      <td>Do eiusmod tempor</td>
      <td>Incididunt ut labore</td>
      <td>Et dolore magna</td>
    </tr>
  </tbody>
</table>
```

### Table with shrank column
```html*example
<table class="table">
  <thead>
    <tr>
      <th>Lorem</th>
      <th class="table__col-shrank">Ipsum</th>
      <th>Dolor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lorem ipsum dolor</td>
      <td>Sit</td>
      <td>Adipiscing elit sed</td>
    </tr>
    <tr>
      <td>Do eiusmod tempor</td>
      <td>Incididunt</td>
      <td>Et dolore magna</td>
    </tr>
  </tbody>
</table>
```

### Table with sorting
The sorting option is also reusable outside the table. Therefore the `sort` (block) class is not prefixed with `table__` (which would make it an element class).

```html*example
<table class="table">
  <thead>
    <tr>
      <th><a class="sort">Sort</a></th>
      <th><a class="sort sort--ascending">Ascending</a></th>
      <th><a class="sort sort--descending">Descending</a></th>
    </tr>
  </thead>
</table>
```

### Table with toolbar
```html*example
<div class="table-toolbar">
  <div class="table-toolbar__data">3 items</div>
  <div class="table-toolbar__action">
    <div class="input-field">
      <div class="input-field__input">
        <input class="input" type="text" placeholder="Search keyword" />
      </div>
      <button class="input-field__action-button"><i class="ui-search"></i></button>
    </div>
    <button class="button button--secondary">Add item</button>
  </div>
</div>

<table class="table">
  <thead>
    <tr>
      <th>Lorem</th>
      <th>Ipsum</th>
      <th>Dolor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lorem ipsum dolor</td>
      <td>Sit amet consectetur</td>
      <td>Adipiscing elit sed</td>
    </tr>
    <tr>
      <td>Do eiusmod tempor</td>
      <td>Incididunt ut labore</td>
      <td>Et dolore magna</td>
    </tr>
    <tr>
      <td>Aliqua ut enim ad</td>
      <td>Minim veniam quis</td>
      <td>Nostrud exercitation</td>
    </tr>
  </tbody>
</table>
```

### Table with scrollbar
```html*example
<div class="scroll-y">
  <table class="table">
    <tbody>
      <tr>
        <td>800.000.450,00</td>
        <td>768.250.000,00</td>
        <td>325.700.200,00</td>
        <td>120.000.000,00</td>
        <td>545.000.500,00</td>
        <td>750.300.300,00</td>
        <td>223.000.000,00</td>
        <td>880.650.200,00</td>
        <td>370.500.500,00</td>
        <td>990.900.000,00</td>
      </tr>
  </table>
</div>
```

### Advanced table
The three dots at the right of the table are part of the [action menu component](/#/component/action-menu).
The rows per page list below the table is part of the [pagination component](/#/component/pagination).

```html*example
<div class="scroll-x">
  <div class="table-toolbar">
    <div class="table-toolbar__data">
      12 items | <strong>1 selected:</strong>
      <a class="a">Delete</a>
    </div>
    <div class="table-toolbar__action">
        <div class="input-field">
          <div class="input-field__input">
            <input class="input" type="text" placeholder="Search keyword" />
          </div>
          <button class="input-field__action-button"><i class="ui-search"></i></button>
        </div>
        <button class="button button--secondary">Add item</button>
      </div>
  </div>

  <table class="table">
    <thead>
      <tr>
        <th class="table__col-shrinked"><input class="input" type="checkbox" /></th>
        <th><a class="sort sort--ascending">Lorem</a></th>
        <th><a class="sort">Ipsum</a></th>
        <th><a class="sort">Dolor</a></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr class="table__row-collapsed table__row-selected">
        <td><input class="input" type="checkbox" checked /></td>
        <td>Lorem ipsum dolor</td>
        <td>Sit amet consectetur</td>
        <td>Adipiscing elit sed</td>
        <td class="text-align-right">
          <div class="action-menu">
            <a class="action-menu__trigger"></a>
          </div>
        </td>
      </tr>
      <tr class="table__row-content">
        <td colspan="5">Collapsed content</td>
      </tr>
      <tr class="table__row-expanded">
        <td><input class="input" type="checkbox" /></td>
        <td>Do eiusmod tempor</td>
        <td>Incididunt ut labore</td>
        <td>Et dolore magna</td>
        <td class="text-align-right">
          <div class="action-menu action-menu--active">
            <a class="action-menu__trigger"></a>
          </div>
        </td>
      </tr>
      <tr class="table__row-content">
        <td colspan="5">
          <h4 class="h4 h4--strong">Lorem ipsum dolor</h4>
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
        </td>
      </tr>
      <tr class="table__row-collapsed">
        <td><input class="input" type="checkbox" /></td>
        <td>Aliqua ut enim ad</td>
        <td>Minim veniam quis</td>
        <td>Nostrud exercitation</td>
        <td class="text-align-right">
          <div class="action-menu action-menu--active">
            <a class="action-menu__trigger"></a>
          </div>
        </td>
      </tr>
      <tr class="table__row-content">
        <td colspan="5">Collapsed content</td>
      </tr>
    </tbody>
  </table>

  <div class="pagination">
    <ul class="pagination__pager">
      <li><a class="pagination__link pagination__link--direction">Vorige</a></li>
      <li><a class="pagination__link">1</a></li>
      <li><a class="pagination__link pagination__link--active">2</a></li>
      <li><a class="pagination__link">3</a></li>
      <li>...</li>
      <li><a class="pagination__link">14</a></li>
      <li><a class="pagination__link pagination__link--direction">Volgende</a></li>
    </ul>

    <div class="pagination__select-field">
      Rows per page:
      <select class="pagination__select">
        <option>5</option>
        <option>25</option>
        <option>50</option>
        <option>100</option>
      </select>
    </div>
  </div>
</div>
```
