# Media
Style for media elements like images and videos.

Source file: [packages/base/media/_media.scss](https://github.com/kpn/kpn-style/blob/master/packages/base/media/_media.scss)

---

## Styles
Use the ratio classes to keep elements in the same aspect ratio regardless of the specified width. You can use this when embedding images, videos, or other media objects. A typical example is an embedded 16:9 video where you only want to specify the width and the height should follow automatically.

### Aspect ratio 16:9
The inline `max-width` and `width` properties are just for demo purposes. You can specify your own desired width on the element. The height of the child element (in this case an `iframe`) will be applied in a ratio of the specified width.

```html*example="aspect-ratio"
<div style="max-width: 400px; width: 100%;" class="ratio ratio--16-9">
  <iframe></iframe>
</div>
```

### Aspect ratio 4:3
```html*example="aspect-ratio"
<div style="max-width: 400px; width: 100%;" class="ratio ratio--4-3">
  <iframe></iframe>
</div>
```

### Aspect ratio 1:1
In this case the height of the `iframe` will always be the same as the width of the parent.

```html*example="aspect-ratio"
<div style="max-width: 140px; width: 100%;" class="ratio ratio--1-1">
  <iframe></iframe>
</div>
```

