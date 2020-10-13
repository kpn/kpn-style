# Pagination
When you have so much content that it would be impractical to show it all at once, one of the solutions is to paginate the content. That is, to break the content into separate and distinct pages.

Source file: [packages/component/pagination/_pagination.scss](https://github.com/kpn/kpn-style/blob/master/packages/component/pagination/_pagination.scss)

---

## Styles

### Basic pagination
```html*example
<div class="pagination">
  <ul class="pagination__pager">
    <li><a class="pagination__link pagination__link--active">1</a></li>
    <li><a class="pagination__link">2</a></li>
    <li><a class="pagination__link">3</a></li>
    <li><a class="pagination__link">4</a></li>
    <li><a class="pagination__link">5</a></li>
  </ul>
</div>
```

### Advanced pagination
```html*example
<div class="pagination">
  <ul class="pagination__pager">
    <li><a class="pagination__link" data-direction="Previous"></a></li>
    <li><a class="pagination__link">1</a></li>
    <li><a class="pagination__link pagination__link--active">2</a></li>
    <li><a class="pagination__link">3</a></li>
    <li>...</li>
    <li><a class="pagination__link">14</a></li>
    <li><a class="pagination__link" data-direction="Next"></a></li>
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
```
