# UI icon
Icon font for the KPN UI icons.

Source file: [packages/base/ui-icon/_ui-icon.scss](https://github.com/kpn/kpn-style/blob/master/packages/base/ui-icon/_ui-icon.scss)

---

## Customizable variables
```scss
$ui-font-family: value;
$ui-font-size: value;
```
---

## Mixins
The UI icon font needs to be loaded in order for the icons to work.
```scss
// font-face(font family name, style, weight, path, filename without extension);
@include font-face('kpn-ui-icons', normal, 400, '../node_modules/@kpn-style/bundle/base/ui-icon', 'kpn-ui-icons');
```

Read more about the font-face mixin on the [typography](/#/base/typography) page.

---

## Styles

### Basic example
```html*example*dummy
<i class="ui-home"></i>
<i class="ui-delete"></i>
<i class="ui-message"></i>
```

### Icon sizes
```html*example*dummy
<i class="ui-heart ui--small"></i>
<i class="ui-heart ui--large"></i>
```

### Custom styled icons
```html*example*dummy
<i class="ui-error" style="color: #ff3333; font-size: 18px;"></i>
<i class="ui-warning" style="color: #ff9900; font-size: 24px;"></i>
<span class="ui-check" style="color: #009900; font-size: 36px;"></span>
```

### Content character
```scss
div::before {
  color: color(red);
  content: $ui-error;
  font-family: $ui-font-family;
  font-size: $ui-font-size; // Default icon font size
}

span::after {
  color: color(orange);
  content: $ui-warning;
  font: $ui-font; // Shorthand for font-family and font-size
}

i::before {
  color: color(green);
  content: $ui-check;
  font-family: $ui-font-family;
  font-size: 36px;
}
```

### Available icons
<ul class="example-icon">
	<li class="example-icon__item"><i class="ui-30-seconds-backwords"></i><code class="example-icon__name">ui-30-seconds-backwords</code></li>
	<li class="example-icon__item"><i class="ui-30-seconds-forwards"></i><code class="example-icon__name">ui-30-seconds-forwards</code></li>
	<li class="example-icon__item"><i class="ui-account-diap"></i><code class="example-icon__name">ui-account-diap</code></li>
	<li class="example-icon__item"><i class="ui-account"></i><code class="example-icon__name">ui-account</code></li>
	<li class="example-icon__item"><i class="ui-add"></i><code class="example-icon__name">ui-add</code></li>
	<li class="example-icon__item"><i class="ui-arrow-down"></i><code class="example-icon__name">ui-arrow-down</code></li>
	<li class="example-icon__item"><i class="ui-arrow-left"></i><code class="example-icon__name">ui-arrow-left</code></li>
	<li class="example-icon__item"><i class="ui-arrow-right"></i><code class="example-icon__name">ui-arrow-right</code></li>
	<li class="example-icon__item"><i class="ui-arrow-up"></i><code class="example-icon__name">ui-arrow-up</code></li>
	<li class="example-icon__item"><i class="ui-arrow-upleft"></i><code class="example-icon__name">ui-arrow-upleft</code></li>
	<li class="example-icon__item"><i class="ui-assemble"></i><code class="example-icon__name">ui-assemble</code></li>
	<li class="example-icon__item"><i class="ui-asterisk"></i><code class="example-icon__name">ui-asterisk</code></li>
	<li class="example-icon__item"><i class="ui-audio"></i><code class="example-icon__name">ui-audio</code></li>
	<li class="example-icon__item"><i class="ui-backspace"></i><code class="example-icon__name">ui-backspace</code></li>
	<li class="example-icon__item"><i class="ui-backward"></i><code class="example-icon__name">ui-backward</code></li>
	<li class="example-icon__item"><i class="ui-bookmark"></i><code class="example-icon__name">ui-bookmark</code></li>
	<li class="example-icon__item"><i class="ui-bulb"></i><code class="example-icon__name">ui-bulb</code></li>
	<li class="example-icon__item"><i class="ui-business-diap"></i><code class="example-icon__name">ui-business-diap</code></li>
	<li class="example-icon__item"><i class="ui-business"></i><code class="example-icon__name">ui-business</code></li>
	<li class="example-icon__item"><i class="ui-calendar"></i><code class="example-icon__name">ui-calendar</code></li>
	<li class="example-icon__item"><i class="ui-call-ending"></i><code class="example-icon__name">ui-call-ending</code></li>
	<li class="example-icon__item"><i class="ui-call-incoming"></i><code class="example-icon__name">ui-call-incoming</code></li>
	<li class="example-icon__item"><i class="ui-call-outgoing"></i><code class="example-icon__name">ui-call-outgoing</code></li>
	<li class="example-icon__item"><i class="ui-camera"></i><code class="example-icon__name">ui-camera</code></li>
	<li class="example-icon__item"><i class="ui-car"></i><code class="example-icon__name">ui-car</code></li>
	<li class="example-icon__item"><i class="ui-caret-down"></i><code class="example-icon__name">ui-caret-down</code></li>
	<li class="example-icon__item"><i class="ui-caret-up"></i><code class="example-icon__name">ui-caret-up</code></li>
	<li class="example-icon__item"><i class="ui-chat-diap"></i><code class="example-icon__name">ui-chat-diap</code></li>
	<li class="example-icon__item"><i class="ui-chat"></i><code class="example-icon__name">ui-chat</code></li>
	<li class="example-icon__item"><i class="ui-check"></i><code class="example-icon__name">ui-check</code></li>
	<li class="example-icon__item"><i class="ui-chevron-down"></i><code class="example-icon__name">ui-chevron-down</code></li>
	<li class="example-icon__item"><i class="ui-chevron-left"></i><code class="example-icon__name">ui-chevron-left</code></li>
	<li class="example-icon__item"><i class="ui-chevron-right"></i><code class="example-icon__name">ui-chevron-right</code></li>
	<li class="example-icon__item"><i class="ui-chevron-up"></i><code class="example-icon__name">ui-chevron-up</code></li>
	<li class="example-icon__item"><i class="ui-chromecast"></i><code class="example-icon__name">ui-chromecast</code></li>
	<li class="example-icon__item"><i class="ui-circle-diap"></i><code class="example-icon__name">ui-circle-diap</code></li>
	<li class="example-icon__item"><i class="ui-circle"></i><code class="example-icon__name">ui-circle</code></li>
	<li class="example-icon__item"><i class="ui-clock"></i><code class="example-icon__name">ui-clock</code></li>
	<li class="example-icon__item"><i class="ui-close"></i><code class="example-icon__name">ui-close</code></li>
	<li class="example-icon__item"><i class="ui-cloud"></i><code class="example-icon__name">ui-cloud</code></li>
	<li class="example-icon__item"><i class="ui-cross"></i><code class="example-icon__name">ui-cross</code></li>
	<li class="example-icon__item"><i class="ui-csv-file"></i><code class="example-icon__name">ui-csv-file</code></li>
	<li class="example-icon__item"><i class="ui-delete-all"></i><code class="example-icon__name">ui-delete-all</code></li>
	<li class="example-icon__item"><i class="ui-delete"></i><code class="example-icon__name">ui-delete</code></li>
	<li class="example-icon__item"><i class="ui-dialpad"></i><code class="example-icon__name">ui-dialpad</code></li>
	<li class="example-icon__item"><i class="ui-diamond-diap"></i><code class="example-icon__name">ui-diamond-diap</code></li>
	<li class="example-icon__item"><i class="ui-diamond"></i><code class="example-icon__name">ui-diamond</code></li>
	<li class="example-icon__item"><i class="ui-doc-file"></i><code class="example-icon__name">ui-doc-file</code></li>
	<li class="example-icon__item"><i class="ui-document"></i><code class="example-icon__name">ui-document</code></li>
	<li class="example-icon__item"><i class="ui-download"></i><code class="example-icon__name">ui-download</code></li>
	<li class="example-icon__item"><i class="ui-dropdown"></i><code class="example-icon__name">ui-dropdown</code></li>
	<li class="example-icon__item"><i class="ui-edit"></i><code class="example-icon__name">ui-edit</code></li>
	<li class="example-icon__item"><i class="ui-emoticon-happy"></i><code class="example-icon__name">ui-emoticon-happy</code></li>
	<li class="example-icon__item"><i class="ui-emoticon-neutral"></i><code class="example-icon__name">ui-emoticon-neutral</code></li>
	<li class="example-icon__item"><i class="ui-emoticon-sad"></i><code class="example-icon__name">ui-emoticon-sad</code></li>
	<li class="example-icon__item"><i class="ui-envelop"></i><code class="example-icon__name">ui-envelop</code></li>
	<li class="example-icon__item"><i class="ui-error"></i><code class="example-icon__name">ui-error</code></li>
	<li class="example-icon__item"><i class="ui-euro"></i><code class="example-icon__name">ui-euro</code></li>
	<li class="example-icon__item"><i class="ui-external-link"></i><code class="example-icon__name">ui-external-link</code></li>
	<li class="example-icon__item"><i class="ui-facebook"></i><code class="example-icon__name">ui-facebook</code></li>
	<li class="example-icon__item"><i class="ui-female"></i><code class="example-icon__name">ui-female</code></li>
	<li class="example-icon__item"><i class="ui-filter"></i><code class="example-icon__name">ui-filter</code></li>
	<li class="example-icon__item"><i class="ui-fingerprint"></i><code class="example-icon__name">ui-fingerprint</code></li>
	<li class="example-icon__item"><i class="ui-fire"></i><code class="example-icon__name">ui-fire</code></li>
	<li class="example-icon__item"><i class="ui-flag"></i><code class="example-icon__name">ui-flag</code></li>
	<li class="example-icon__item"><i class="ui-folder"></i><code class="example-icon__name">ui-folder</code></li>
	<li class="example-icon__item"><i class="ui-forward"></i><code class="example-icon__name">ui-forward</code></li>
	<li class="example-icon__item"><i class="ui-fullscreen-enter"></i><code class="example-icon__name">ui-fullscreen-enter</code></li>
	<li class="example-icon__item"><i class="ui-fullscreen-exit"></i><code class="example-icon__name">ui-fullscreen-exit</code></li>
	<li class="example-icon__item"><i class="ui-graphview"></i><code class="example-icon__name">ui-graphview</code></li>
	<li class="example-icon__item"><i class="ui-gridview"></i><code class="example-icon__name">ui-gridview</code></li>
	<li class="example-icon__item"><i class="ui-hash"></i><code class="example-icon__name">ui-hash</code></li>
	<li class="example-icon__item"><i class="ui-heart"></i><code class="example-icon__name">ui-heart</code></li>
	<li class="example-icon__item"><i class="ui-help"></i><code class="example-icon__name">ui-help</code></li>
	<li class="example-icon__item"><i class="ui-hide"></i><code class="example-icon__name">ui-hide</code></li>
	<li class="example-icon__item"><i class="ui-history"></i><code class="example-icon__name">ui-history</code></li>
	<li class="example-icon__item"><i class="ui-home-diap"></i><code class="example-icon__name">ui-home-diap</code></li>
	<li class="example-icon__item"><i class="ui-home"></i><code class="example-icon__name">ui-home</code></li>
	<li class="example-icon__item"><i class="ui-infinite"></i><code class="example-icon__name">ui-infinite</code></li>
	<li class="example-icon__item"><i class="ui-info-diap"></i><code class="example-icon__name">ui-info-diap</code></li>
	<li class="example-icon__item"><i class="ui-info"></i><code class="example-icon__name">ui-info</code></li>
	<li class="example-icon__item"><i class="ui-internet"></i><code class="example-icon__name">ui-internet</code></li>
	<li class="example-icon__item"><i class="ui-kijkwijzer-6plus"></i><code class="example-icon__name">ui-kijkwijzer-6plus</code></li>
	<li class="example-icon__item"><i class="ui-kijkwijzer-9plus"></i><code class="example-icon__name">ui-kijkwijzer-9plus</code></li>
	<li class="example-icon__item"><i class="ui-kijkwijzer-12plus"></i><code class="example-icon__name">ui-kijkwijzer-12plus</code></li>
	<li class="example-icon__item"><i class="ui-kijkwijzer-16plus"></i><code class="example-icon__name">ui-kijkwijzer-16plus</code></li>
	<li class="example-icon__item"><i class="ui-kijkwijzer-alle-leeftijden"></i><code class="example-icon__name">ui-kijkwijzer-alle-leeftijden</code></li>
	<li class="example-icon__item"><i class="ui-kijkwijzer-angst"></i><code class="example-icon__name">ui-kijkwijzer-angst</code></li>
	<li class="example-icon__item"><i class="ui-kijkwijzer-discriminatie"></i><code class="example-icon__name">ui-kijkwijzer-discriminatie</code></li>
	<li class="example-icon__item"><i class="ui-kijkwijzer-drugs"></i><code class="example-icon__name">ui-kijkwijzer-drugs</code></li>
	<li class="example-icon__item"><i class="ui-kijkwijzer-geweld"></i><code class="example-icon__name">ui-kijkwijzer-geweld</code></li>
	<li class="example-icon__item"><i class="ui-kijkwijzer-sex"></i><code class="example-icon__name">ui-kijkwijzer-sex</code></li>
	<li class="example-icon__item"><i class="ui-kijkwijzer-taalgebruik"></i><code class="example-icon__name">ui-kijkwijzer-taalgebruik</code></li>
	<li class="example-icon__item"><i class="ui-laptop"></i><code class="example-icon__name">ui-laptop</code></li>
	<li class="example-icon__item"><i class="ui-library"></i><code class="example-icon__name">ui-library</code></li>
	<li class="example-icon__item"><i class="ui-link"></i><code class="example-icon__name">ui-link</code></li>
	<li class="example-icon__item"><i class="ui-list"></i><code class="example-icon__name">ui-list</code></li>
	<li class="example-icon__item"><i class="ui-listview"></i><code class="example-icon__name">ui-listview</code></li>
	<li class="example-icon__item"><i class="ui-locate"></i><code class="example-icon__name">ui-locate</code></li>
	<li class="example-icon__item"><i class="ui-lock-closed"></i><code class="example-icon__name">ui-lock-closed</code></li>
	<li class="example-icon__item"><i class="ui-lock-open"></i><code class="example-icon__name">ui-lock-open</code></li>
	<li class="example-icon__item"><i class="ui-logout"></i><code class="example-icon__name">ui-logout</code></li>
	<li class="example-icon__item"><i class="ui-mail"></i><code class="example-icon__name">ui-mail</code></li>
	<li class="example-icon__item"><i class="ui-male"></i><code class="example-icon__name">ui-male</code></li>
	<li class="example-icon__item"><i class="ui-manual"></i><code class="example-icon__name">ui-manual</code></li>
	<li class="example-icon__item"><i class="ui-map-view"></i><code class="example-icon__name">ui-map-view</code></li>
	<li class="example-icon__item"><i class="ui-marker-diap"></i><code class="example-icon__name">ui-marker-diap</code></li>
	<li class="example-icon__item"><i class="ui-marker"></i><code class="example-icon__name">ui-marker</code></li>
	<li class="example-icon__item"><i class="ui-menu"></i><code class="example-icon__name">ui-menu</code></li>
	<li class="example-icon__item"><i class="ui-message"></i><code class="example-icon__name">ui-message</code></li>
	<li class="example-icon__item"><i class="ui-microphone-off"></i><code class="example-icon__name">ui-microphone-off</code></li>
	<li class="example-icon__item"><i class="ui-microphone-on"></i><code class="example-icon__name">ui-microphone-on</code></li>
	<li class="example-icon__item"><i class="ui-minus"></i><code class="example-icon__name">ui-minus</code></li>
	<li class="example-icon__item"><i class="ui-mobile"></i><code class="example-icon__name">ui-mobile</code></li>
	<li class="example-icon__item"><i class="ui-more"></i><code class="example-icon__name">ui-more</code></li>
	<li class="example-icon__item"><i class="ui-movie"></i><code class="example-icon__name">ui-movie</code></li>
	<li class="example-icon__item"><i class="ui-multiple"></i><code class="example-icon__name">ui-multiple</code></li>
	<li class="example-icon__item"><i class="ui-network-diap"></i><code class="example-icon__name">ui-network-diap</code></li>
	<li class="example-icon__item"><i class="ui-network"></i><code class="example-icon__name">ui-network</code></li>
	<li class="example-icon__item"><i class="ui-notifications-off"></i><code class="example-icon__name">ui-notifications-off</code></li>
	<li class="example-icon__item"><i class="ui-notifications-on"></i><code class="example-icon__name">ui-notifications-on</code></li>
	<li class="example-icon__item"><i class="ui-notifications"></i><code class="example-icon__name">ui-notifications</code></li>
	<li class="example-icon__item"><i class="ui-pause"></i><code class="example-icon__name">ui-pause</code></li>
	<li class="example-icon__item"><i class="ui-payment"></i><code class="example-icon__name">ui-payment</code></li>
	<li class="example-icon__item"><i class="ui-pdf-file"></i><code class="example-icon__name">ui-pdf-file</code></li>
	<li class="example-icon__item"><i class="ui-person"></i><code class="example-icon__name">ui-person</code></li>
	<li class="example-icon__item"><i class="ui-phone-ringing"></i><code class="example-icon__name">ui-phone-ringing</code></li>
	<li class="example-icon__item"><i class="ui-phone"></i><code class="example-icon__name">ui-phone</code></li>
	<li class="example-icon__item"><i class="ui-photo"></i><code class="example-icon__name">ui-photo</code></li>
	<li class="example-icon__item"><i class="ui-play-disabled"></i><code class="example-icon__name">ui-play-disabled</code></li>
	<li class="example-icon__item"><i class="ui-play"></i><code class="example-icon__name">ui-play</code></li>
	<li class="example-icon__item"><i class="ui-playback"></i><code class="example-icon__name">ui-playback</code></li>
	<li class="example-icon__item"><i class="ui-plus"></i><code class="example-icon__name">ui-plus</code></li>
	<li class="example-icon__item"><i class="ui-plusminus"></i><code class="example-icon__name">ui-plusminus</code></li>
	<li class="example-icon__item"><i class="ui-power"></i><code class="example-icon__name">ui-power</code></li>
	<li class="example-icon__item"><i class="ui-preferences"></i><code class="example-icon__name">ui-preferences</code></li>
	<li class="example-icon__item"><i class="ui-present"></i><code class="example-icon__name">ui-present</code></li>
	<li class="example-icon__item"><i class="ui-products-diap"></i><code class="example-icon__name">ui-products-diap</code></li>
	<li class="example-icon__item"><i class="ui-products"></i><code class="example-icon__name">ui-products</code></li>
	<li class="example-icon__item"><i class="ui-record-all"></i><code class="example-icon__name">ui-record-all</code></li>
	<li class="example-icon__item"><i class="ui-record-disabled"></i><code class="example-icon__name">ui-record-disabled</code></li>
	<li class="example-icon__item"><i class="ui-record"></i><code class="example-icon__name">ui-record</code></li>
	<li class="example-icon__item"><i class="ui-recordings"></i><code class="example-icon__name">ui-recordings</code></li>
	<li class="example-icon__item"><i class="ui-redo"></i><code class="example-icon__name">ui-redo</code></li>
	<li class="example-icon__item"><i class="ui-refresh"></i><code class="example-icon__name">ui-refresh</code></li>
	<li class="example-icon__item"><i class="ui-remove-diap"></i><code class="example-icon__name">ui-remove-diap</code></li>
	<li class="example-icon__item"><i class="ui-remove"></i><code class="example-icon__name">ui-remove</code></li>
	<li class="example-icon__item"><i class="ui-renew"></i><code class="example-icon__name">ui-renew</code></li>
	<li class="example-icon__item"><i class="ui-rewind"></i><code class="example-icon__name">ui-rewind</code></li>
	<li class="example-icon__item"><i class="ui-robot"></i><code class="example-icon__name">ui-robot</code></li>
	<li class="example-icon__item"><i class="ui-scroll-to-top"></i><code class="example-icon__name">ui-scroll-to-top</code></li>
	<li class="example-icon__item"><i class="ui-search"></i><code class="example-icon__name">ui-search</code></li>
	<li class="example-icon__item"><i class="ui-secure"></i><code class="example-icon__name">ui-secure</code></li>
	<li class="example-icon__item"><i class="ui-select"></i><code class="example-icon__name">ui-select</code></li>
	<li class="example-icon__item"><i class="ui-send"></i><code class="example-icon__name">ui-send</code></li>
	<li class="example-icon__item"><i class="ui-settings"></i><code class="example-icon__name">ui-settings</code></li>
	<li class="example-icon__item"><i class="ui-share"></i><code class="example-icon__name">ui-share</code></li>
	<li class="example-icon__item"><i class="ui-shift"></i><code class="example-icon__name">ui-shift</code></li>
	<li class="example-icon__item"><i class="ui-shop"></i><code class="example-icon__name">ui-shop</code></li>
	<li class="example-icon__item"><i class="ui-shoppingbasket"></i><code class="example-icon__name">ui-shoppingbasket</code></li>
	<li class="example-icon__item"><i class="ui-show"></i><code class="example-icon__name">ui-show</code></li>
	<li class="example-icon__item"><i class="ui-simcard"></i><code class="example-icon__name">ui-simcard</code></li>
	<li class="example-icon__item"><i class="ui-star-diap"></i><code class="example-icon__name">ui-star-diap</code></li>
	<li class="example-icon__item"><i class="ui-star"></i><code class="example-icon__name">ui-star</code></li>
	<li class="example-icon__item"><i class="ui-stop"></i><code class="example-icon__name">ui-stop</code></li>
	<li class="example-icon__item"><i class="ui-tablet"></i><code class="example-icon__name">ui-tablet</code></li>
	<li class="example-icon__item"><i class="ui-text"></i><code class="example-icon__name">ui-text</code></li>
	<li class="example-icon__item"><i class="ui-ticket-diap"></i><code class="example-icon__name">ui-ticket-diap</code></li>
	<li class="example-icon__item"><i class="ui-ticket"></i><code class="example-icon__name">ui-ticket</code></li>
	<li class="example-icon__item"><i class="ui-tv-guide"></i><code class="example-icon__name">ui-tv-guide</code></li>
	<li class="example-icon__item"><i class="ui-tv"></i><code class="example-icon__name">ui-tv</code></li>
	<li class="example-icon__item"><i class="ui-twitter"></i><code class="example-icon__name">ui-twitter</code></li>
	<li class="example-icon__item"><i class="ui-undo"></i><code class="example-icon__name">ui-undo</code></li>
	<li class="example-icon__item"><i class="ui-upload"></i><code class="example-icon__name">ui-upload</code></li>
	<li class="example-icon__item"><i class="ui-video"></i><code class="example-icon__name">ui-video</code></li>
	<li class="example-icon__item"><i class="ui-voicemail"></i><code class="example-icon__name">ui-voicemail</code></li>
	<li class="example-icon__item"><i class="ui-volume-high"></i><code class="example-icon__name">ui-volume-high</code></li>
	<li class="example-icon__item"><i class="ui-volume-low"></i><code class="example-icon__name">ui-volume-low</code></li>
	<li class="example-icon__item"><i class="ui-volume-medium"></i><code class="example-icon__name">ui-volume-medium</code></li>
	<li class="example-icon__item"><i class="ui-volume-off"></i><code class="example-icon__name">ui-volume-off</code></li>
	<li class="example-icon__item"><i class="ui-warning"></i><code class="example-icon__name">ui-warning</code></li>
	<li class="example-icon__item"><i class="ui-watch"></i><code class="example-icon__name">ui-watch</code></li>
	<li class="example-icon__item"><i class="ui-watchlist"></i><code class="example-icon__name">ui-watchlist</code></li>
	<li class="example-icon__item"><i class="ui-whatsapp"></i><code class="example-icon__name">ui-whatsapp</code></li>
	<li class="example-icon__item"><i class="ui-wifi-disabled"></i><code class="example-icon__name">ui-wifi-disabled</code></li>
	<li class="example-icon__item"><i class="ui-wifi"></i><code class="example-icon__name">ui-wifi</code></li>
	<li class="example-icon__item"><i class="ui-zip-file"></i><code class="example-icon__name">ui-zip-file</code></li>
</ul>
