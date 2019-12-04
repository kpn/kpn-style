# Breadcrumb
Breadcrumbs are a good way to display your current location in a given application. This is usually done when you have hierarchical layers of content. Each crumb has to have a dedicated page, you can't apply filters or selections in your breadcrumbs.

Source file: [packages/component/breadcrumb/_breadcrumb.scss](https://github.com/kpn/kpn-style/blob/master/packages/component/breadcrumb/_breadcrumb.scss)

---

## Styles

### Example
```html*example
<ul class="breadcrumb">
  <li class="breadcrumb__item"><a class="breadcrumb__link">First link</a></li>
  <li class="breadcrumb__item"><a class="breadcrumb__link">Second link</a></li>
  <li class="breadcrumb__item"><a class="breadcrumb__link">Current link</a></li>
</ul>
```
