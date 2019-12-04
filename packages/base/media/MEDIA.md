# Media
Style for media elements like images and videos.

Source file: [packages/base/media/_media.scss](https://github.com/kpn/kpn-style/blob/master/packages/base/media/_media.scss)

---

## Styles
Use the ratio classes to keep elements in the same aspect ratio regardless of the specified width.
You can use this when embedding images, videos, or other media objects.

### Aspect ratio
The (inline) `max-width` and `width` properties are just for demo purposes. You can specify your own desired width on the element.
```html*example="aspect-ratio"
<div style="max-width: 400px; width: 100%;" class="ratio ratio--16-9">
  <iframe></iframe>
</div>
```
