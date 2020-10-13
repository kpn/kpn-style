# Service icon
<div class="notification notification--caution margin-bottom-2">
  <div class="notification__header">
    The current set of icons will be changed in an upcoming release to be compliant with the set of service icons supplied by KPN UX Lab. This will cause both the naming of some icons to change, and some to disappear entirely. See the deprecated list of icons near the bottom of the page.
  </div>
</div>

Icon font of the KPN Service icons.

Source file: [packages/base/service-icon/_service-icon.scss](https://github.com/kpn/kpn-style/blob/master/packages/base/service-icon/_service-icon.scss)

---

## Customizable variables
```scss
$si-font-family: value;
$si-font-size: value;
```
---

## Mixins
The service icon font needs to be loaded in order for the icons to work.

```scss
// font-face(font family name, style, weight, path, filename without extension);
@include font-face("kpn-service-icons", normal, 400, "../node_modules/@kpn-style/bundle/base/service-icons", "kpn-service-icons");
```

Read more about the font-face mixin on the [typography](/#/base/typography) page.

---

## Styles

### Basic example
```html*example*dummy
<i class="si-bike"></i>
<i class="si-calendar"></i>
<i class="si-game"></i>
```

### Styled icons
```html*example*dummy
<i class="si-mechanic" style="color: #737373; font-size: 72px;"></i>
<i class="si-business-medium" style="color: #009900; font-size: 96px;"></i>
<span class="si-shop" style="color: #ff3333; font-size: 114px;"></span>
```

### Available icons
<p class="legend">
  <code class="legend__active">current</code>
  <code class="legend__deprecated">deprecated</code>
</p>

<ul class="example-icon">
  <li class="example-icon__item"><i class="si-247"></i><code class="example-icon__name">si-247</code></li>
  <li class="example-icon__item"><i class="si-add"></i><code class="example-icon__name">si-add</code></li>
  <li class="example-icon__item"><i class="si-alarm"></i><code class="example-icon__name">si-alarm</code></li>
  <li class="example-icon__item"><i class="si-assemble"></i><code class="example-icon__name">si-assemble</code><code class="example-icon__deprecated">si-montage</code></li>
  <li class="example-icon__item"><i class="si-audio"></i><code class="example-icon__name">si-audio</code><code class="example-icon__deprecated">si-music</code></li>
  <li class="example-icon__item"><i class="si-baseball"></i><code class="example-icon__name">si-baseball</code><code class="example-icon__deprecated">si-sports</code></li>
  <li class="example-icon__item"><i class="si-battery"></i><code class="example-icon__name">si-battery</code><code class="example-icon__deprecated">si-low-battery</code></li>
  <li class="example-icon__item"><i class="si-bike"></i><code class="example-icon__name">si-bike</code></li>
  <li class="example-icon__item"><i class="si-binders"></i><code class="example-icon__name">si-binders</code></li>
  <li class="example-icon__item"><i class="si-browser"></i><code class="example-icon__name">si-browser</code></li>
  <li class="example-icon__item"><i class="si-bulb"></i><code class="example-icon__name">si-bulb</code><code class="example-icon__deprecated">si-lightbulb</code></li>
  <li class="example-icon__item"><i class="si-business-extra-large"></i><code class="example-icon__name">si-business-extra-large</code><code class="example-icon__deprecated">si-business-serie-xl</code></li>
  <li class="example-icon__item"><i class="si-business-large"></i><code class="example-icon__name">si-business-large</code><code class="example-icon__deprecated">si-business-serie-l</code></li>
  <li class="example-icon__item"><i class="si-business-medium"></i><code class="example-icon__name">si-business-medium</code><code class="example-icon__deprecated">si-business-serie-m</code></li>
  <li class="example-icon__item"><i class="si-business-small"></i><code class="example-icon__name">si-business-small</code><code class="example-icon__deprecated">si-business-serie-s</code></li>
  <li class="example-icon__item"><i class="si-cable"></i><code class="example-icon__name">si-cable</code><code class="example-icon__deprecated">si-ethernet</code></li>
  <li class="example-icon__item"><i class="si-calendar"></i><code class="example-icon__name">si-calendar</code></li>
  <li class="example-icon__item"><i class="si-callcenter-agent"></i><code class="example-icon__name">si-callcenter-agent</code></li>
  <li class="example-icon__item"><i class="si-camera"></i><code class="example-icon__name">si-camera</code></li>
  <li class="example-icon__item"><i class="si-car"></i><code class="example-icon__name">si-car</code></li>
  <li class="example-icon__item"><i class="si-chat"></i><code class="example-icon__name">si-chat</code></li>
  <li class="example-icon__item"><i class="si-check"></i><code class="example-icon__name">si-check</code><code class="example-icon__deprecated">si-checkbox</code></li>
  <li class="example-icon__item"><i class="si-chess"></i><code class="example-icon__name">si-chess</code></li>
  <li class="example-icon__item"><i class="si-circle"></i><code class="example-icon__name">si-circle</code></li>
  <li class="example-icon__item"><i class="si-clipboard"></i><code class="example-icon__name">si-clipboard</code></li>
  <li class="example-icon__item"><i class="si-clock"></i><code class="example-icon__name">si-clock</code></li>
  <li class="example-icon__item"><i class="si-cloud"></i><code class="example-icon__name">si-cloud</code></li>
  <li class="example-icon__item"><i class="si-consultant"></i><code class="example-icon__name">si-consultant</code></li>
  <li class="example-icon__item"><i class="si-contract-end"></i><code class="example-icon__name">si-contract-end</code></li>
  <li class="example-icon__item"><i class="si-contract-renew"></i><code class="example-icon__name">si-contract-renew</code></li>
  <li class="example-icon__item"><i class="si-contract-transfer"></i><code class="example-icon__name">si-contract-transfer</code></li>
  <li class="example-icon__item"><i class="si-database"></i><code class="example-icon__name">si-database</code></li>
  <li class="example-icon__item"><i class="si-delete"></i><code class="example-icon__name">si-delete</code><code class="example-icon__deprecated">si-dustbin</code></li>
  <li class="example-icon__item"><i class="si-design"></i><code class="example-icon__name">si-design</code></li>
  <li class="example-icon__item"><i class="si-deviceset-mobile"></i><code class="example-icon__name">si-deviceset-mobile</code><code class="example-icon__deprecated">si-mobile-deviceset</code></li>
  <li class="example-icon__item"><i class="si-deviceset-tablet"></i><code class="example-icon__name">si-deviceset-tablet</code><code class="example-icon__deprecated">si-tablet-deviceset</code></li>
  <li class="example-icon__item"><i class="si-devolo"></i><code class="example-icon__name">si-devolo</code></li>
  <li class="example-icon__item"><i class="si-dialpad"></i><code class="example-icon__name">si-dialpad</code></li>
  <li class="example-icon__item"><i class="si-digitalisation"></i><code class="example-icon__name">si-digitalisation</code></li>
  <li class="example-icon__item"><i class="si-digitenne"></i><code class="example-icon__name">si-digitenne</code></li>
  <li class="example-icon__item"><i class="si-document"></i><code class="example-icon__name">si-document</code></li>
  <li class="example-icon__item"><i class="si-download"></i><code class="example-icon__name">si-download</code></li>
  <li class="example-icon__item"><i class="si-drink"></i><code class="example-icon__name">si-drink</code><code class="example-icon__deprecated">si-glass</code></li>
  <li class="example-icon__item"><i class="si-edit"></i><code class="example-icon__name">si-edit</code></li>
  <li class="example-icon__item"><i class="si-emoticon-angry"></i><code class="example-icon__name">si-emoticon-angry</code></li>
  <li class="example-icon__item"><i class="si-emoticon-grimacing"></i><code class="example-icon__name">si-emoticon-grimacing</code></li>
  <li class="example-icon__item"><i class="si-emoticon-helpless"></i><code class="example-icon__name">si-emoticon-helpless</code></li>
  <li class="example-icon__item"><i class="si-emoticon-neutral"></i><code class="example-icon__name">si-emoticon-neutral</code></li>
  <li class="example-icon__item"><i class="si-emoticon-sad"></i><code class="example-icon__name">si-emoticon-sad</code></li>
  <li class="example-icon__item"><i class="si-emoticon-smile"></i><code class="example-icon__name">si-emoticon-smile</code></li>
  <li class="example-icon__item"><i class="si-emoticon-surprised"></i><code class="example-icon__name">si-emoticon-surprised</code></li>
  <li class="example-icon__item"><i class="si-emoticon-tongue"></i><code class="example-icon__name">si-emoticon-tongue</code></li>
  <li class="example-icon__item"><i class="si-emoticon-wink"></i><code class="example-icon__name">si-emoticon-wink</code></li>
  <li class="example-icon__item"><i class="si-envelop"></i><code class="example-icon__name">si-envelop</code></li>
  <li class="example-icon__item"><i class="si-environment"></i><code class="example-icon__name">si-environment</code></li>
  <li class="example-icon__item"><i class="si-error"></i><code class="example-icon__name">si-error</code></li>
  <li class="example-icon__item"><i class="si-euro"></i><code class="example-icon__name">si-euro</code></li>
  <li class="example-icon__item"><i class="si-experiabox8"></i><code class="example-icon__name">si-experiabox8</code></li>
  <li class="example-icon__item"><i class="si-experiabox9"></i><code class="example-icon__name">si-experiabox9</code></li>
  <li class="example-icon__item"><i class="si-experiabox10"></i><code class="example-icon__name">si-experiabox10</code></li>
  <li class="example-icon__item"><i class="si-experiabox10a"></i><code class="example-icon__name">si-experiabox10a</code></li>
  <li class="example-icon__item"><i class="si-file-csv"></i><code class="example-icon__name">si-file-csv</code></li>
  <li class="example-icon__item"><i class="si-file-doc"></i><code class="example-icon__name">si-file-doc</code></li>
  <li class="example-icon__item"><i class="si-file-exe"></i><code class="example-icon__name">si-file-exe</code></li>
  <li class="example-icon__item"><i class="si-file-pdf"></i><code class="example-icon__name">si-file-pdf</code></li>
  <li class="example-icon__item"><i class="si-file-zip"></i><code class="example-icon__name">si-file-zip</code></li>
  <li class="example-icon__item"><i class="si-fingerprint"></i><code class="example-icon__name">si-fingerprint</code><code class="example-icon__deprecated">si-touch-id</code></li>
  <li class="example-icon__item"><i class="si-food"></i><code class="example-icon__name">si-food</code></li>
  <li class="example-icon__item"><i class="si-fullscreen"></i><code class="example-icon__name">si-fullscreen</code></li>
  <li class="example-icon__item"><i class="si-game"></i><code class="example-icon__name">si-game</code><code class="example-icon__deprecated">si-gaming</code></li>
  <li class="example-icon__item"><i class="si-gift"></i><code class="example-icon__name">si-gift</code><code class="example-icon__deprecated">si-giftbox</code></li>
  <li class="example-icon__item"><i class="si-globe"></i><code class="example-icon__name">si-globe</code></li>
  <li class="example-icon__item"><i class="si-government"></i><code class="example-icon__name">si-government</code></li>
  <li class="example-icon__item"><i class="si-graduation-cap"></i><code class="example-icon__name">si-graduation-cap</code><code class="example-icon__deprecated">si-education</code></li>
  <li class="example-icon__item"><i class="si-graph-down"></i><code class="example-icon__name">si-graph-down</code></li>
  <li class="example-icon__item"><i class="si-graph-up"></i><code class="example-icon__name">si-graph-up</code><code class="example-icon__deprecated">si-graph</code></li>
  <li class="example-icon__item"><i class="si-grid"></i><code class="example-icon__name">si-grid</code><code class="example-icon__deprecated">si-modular</code></li>
  <li class="example-icon__item"><i class="si-handshake"></i><code class="example-icon__name">si-handshake</code></li>
  <li class="example-icon__item"><i class="si-hd"></i><code class="example-icon__name">si-hd</code><code class="example-icon__deprecated">si-hd-quality</code></li>
  <li class="example-icon__item"><i class="si-health"></i><code class="example-icon__name">si-health</code></li>
  <li class="example-icon__item"><i class="si-heart"></i><code class="example-icon__name">si-heart</code></li>
  <li class="example-icon__item"><i class="si-help"></i><code class="example-icon__name">si-help</code><code class="example-icon__deprecated">si-questionmark</code></li>
  <li class="example-icon__item"><i class="si-history"></i><code class="example-icon__name">si-history</code></li>
  <li class="example-icon__item"><i class="si-home"></i><code class="example-icon__name">si-home</code></li>
  <li class="example-icon__item"><i class="si-hourglass"></i><code class="example-icon__name">si-hourglass</code></li>
  <li class="example-icon__item"><i class="si-identity-card"></i><code class="example-icon__name">si-identity-card</code></li>
  <li class="example-icon__item"><i class="si-industry"></i><code class="example-icon__name">si-industry</code></li>
  <li class="example-icon__item"><i class="si-info"></i><code class="example-icon__name">si-info</code></li>
  <li class="example-icon__item"><i class="si-internet"></i><code class="example-icon__name">si-internet</code></li>
  <li class="example-icon__item"><i class="si-invoice"></i><code class="example-icon__name">si-invoice</code></li>
  <li class="example-icon__item"><i class="si-ip-adress"></i><code class="example-icon__name">si-ip-adress</code></li>
  <li class="example-icon__item"><i class="si-key"></i><code class="example-icon__name">si-key</code></li>
  <li class="example-icon__item"><i class="si-laptop"></i><code class="example-icon__name">si-laptop</code></li>
  <li class="example-icon__item"><i class="si-lock"></i><code class="example-icon__name">si-lock</code><code class="example-icon__deprecated">si-locked</code></li>
  <li class="example-icon__item"><i class="si-mail"></i><code class="example-icon__name">si-mail</code><code class="example-icon__deprecated">si-email</code></li>
  <li class="example-icon__item"><i class="si-manual"></i><code class="example-icon__name">si-manual</code></li>
  <li class="example-icon__item"><i class="si-mapview"></i><code class="example-icon__name">si-mapview</code></li>
  <li class="example-icon__item"><i class="si-marker-small"></i><code class="example-icon__name">si-marker-small</code><code class="example-icon__deprecated">si-pinpoint-small</code></li>
  <li class="example-icon__item"><i class="si-marker"></i><code class="example-icon__name">si-marker</code><code class="example-icon__deprecated">si-location</code></li>
  <li class="example-icon__item"><i class="si-mast"></i><code class="example-icon__name">si-mast</code><code class="example-icon__deprecated">si-network</code></li>
  <li class="example-icon__item"><i class="si-mechanic"></i><code class="example-icon__name">si-mechanic</code></li>
  <li class="example-icon__item"><i class="si-message"></i><code class="example-icon__name">si-message</code></li>
  <li class="example-icon__item"><i class="si-mobile-apps"></i><code class="example-icon__name">si-mobile-apps</code></li>
  <li class="example-icon__item"><i class="si-mobile-damage-water"></i><code class="example-icon__name">si-mobile-damage-water</code></li>
  <li class="example-icon__item"><i class="si-mobile-damage"></i><code class="example-icon__name">si-mobile-damage</code></li>
  <li class="example-icon__item"><i class="si-mobile-locked"></i><code class="example-icon__name">si-mobile-locked</code><code class="example-icon__deprecated">si-device-locked</code></li>
  <li class="example-icon__item"><i class="si-mobile-multiple"></i><code class="example-icon__name">si-mobile-multiple</code></li>
  <li class="example-icon__item"><i class="si-mobile-phone"></i><code class="example-icon__name">si-mobile-phone</code></li>
  <li class="example-icon__item"><i class="si-mobile-screensize"></i><code class="example-icon__name">si-mobile-screensize</code></li>
  <li class="example-icon__item"><i class="si-mobile-screentype"></i><code class="example-icon__name">si-mobile-screentype</code></li>
  <li class="example-icon__item"><i class="si-mobile-smile"></i><code class="example-icon__name">si-mobile-smile</code></li>
  <li class="example-icon__item"><i class="si-mobile"></i><code class="example-icon__name">si-mobile</code><code class="example-icon__deprecated">si-mobiel</code></li>
  <li class="example-icon__item"><i class="si-multiple-apps"></i><code class="example-icon__name">si-multiple-apps</code></li>
  <li class="example-icon__item"><i class="si-navigation"></i><code class="example-icon__name">si-navigation</code></li>
  <li class="example-icon__item"><i class="si-share"></i><code class="example-icon__name">si-share</code><code class="example-icon__deprecated">WARNING:<br/>should be si-network</code></li>
  <li class="example-icon__item"><i class="si-number-0"></i><code class="example-icon__name">si-number-0</code></li>
  <li class="example-icon__item"><i class="si-number-1"></i><code class="example-icon__name">si-number-1</code></li>
  <li class="example-icon__item"><i class="si-number-2"></i><code class="example-icon__name">si-number-2</code></li>
  <li class="example-icon__item"><i class="si-number-3"></i><code class="example-icon__name">si-number-3</code></li>
  <li class="example-icon__item"><i class="si-number-4"></i><code class="example-icon__name">si-number-4</code></li>
  <li class="example-icon__item"><i class="si-number-5"></i><code class="example-icon__name">si-number-5</code></li>
  <li class="example-icon__item"><i class="si-number-6"></i><code class="example-icon__name">si-number-6</code></li>
  <li class="example-icon__item"><i class="si-number-7"></i><code class="example-icon__name">si-number-7</code></li>
  <li class="example-icon__item"><i class="si-number-8"></i><code class="example-icon__name">si-number-8</code></li>
  <li class="example-icon__item"><i class="si-number-9"></i><code class="example-icon__name">si-number-9</code></li>
  <li class="example-icon__item"><i class="si-one-day-back"></i><code class="example-icon__name">si-one-day-back</code></li>
  <li class="example-icon__item"><i class="si-password"></i><code class="example-icon__name">si-password</code></li>
  <li class="example-icon__item"><i class="si-pause"></i><code class="example-icon__name">si-pause</code><code class="example-icon__deprecated">si-pauze</code></li>
  <li class="example-icon__item"><i class="si-payment"></i><code class="example-icon__name">si-payment</code></li>
  <li class="example-icon__item"><i class="si-person"></i><code class="example-icon__name">si-person</code></li>
  <li class="example-icon__item"><i class="si-phone"></i><code class="example-icon__name">si-phone</code><code class="example-icon__deprecated">si-fixed-phone</code></li>
  <li class="example-icon__item"><i class="si-photo"></i><code class="example-icon__name">si-photo</code></li>
  <li class="example-icon__item"><i class="si-play-button"></i><code class="example-icon__name">si-play-button</code></li>
  <li class="example-icon__item"><i class="si-play"></i><code class="example-icon__name">si-play</code></li>
  <li class="example-icon__item"><i class="si-playback"></i><code class="example-icon__name">si-playback</code><code class="example-icon__deprecated">si-replay-tv</code></li>
  <li class="example-icon__item"><i class="si-preferences"></i><code class="example-icon__name">si-preferences</code></li>
  <li class="example-icon__item"><i class="si-productcombi-internet-phone"></i><code class="example-icon__name">si-productcombi-internet-phone</code></li>
  <li class="example-icon__item"><i class="si-productcombi-internet-tv-phone"></i><code class="example-icon__name">si-productcombi-internet-tv-phone</code></li>
  <li class="example-icon__item"><i class="si-productcombi-internet-tv"></i><code class="example-icon__name">si-productcombi-internet-tv</code></li>
  <li class="example-icon__item"><i class="si-promise"></i><code class="example-icon__name">si-promise</code></li>
  <li class="example-icon__item"><i class="si-question"></i><code class="example-icon__name">si-question</code><code class="example-icon__deprecated">si-lost</code></li>
  <li class="example-icon__item"><i class="si-radio"></i><code class="example-icon__name">si-radio</code></li>
  <li class="example-icon__item"><i class="si-remote"></i><code class="example-icon__name">si-remote</code><code class="example-icon__deprecated">si-tv-remote</code></li>
  <li class="example-icon__item"><i class="si-reward"></i><code class="example-icon__name">si-reward</code></li>
  <li class="example-icon__item"><i class="si-robot"></i><code class="example-icon__name">si-robot</code></li>
  <li class="example-icon__item"><i class="si-search"></i><code class="example-icon__name">si-search</code></li>
  <li class="example-icon__item"><i class="si-secure"></i><code class="example-icon__name">si-secure</code><code class="example-icon__deprecated">si-security</code></li>
  <li class="example-icon__item"><i class="si-send"></i><code class="example-icon__name">si-send</code></li>
  <li class="example-icon__item"><i class="si-sensor"></i><code class="example-icon__name">si-sensor</code></li>
  <li class="example-icon__item"><i class="si-settings"></i><code class="example-icon__name">si-settings</code><code class="example-icon__deprecated">si-settings-gear</code></li>
  <li class="example-icon__item"><i class="si-shop"></i><code class="example-icon__name">si-shop</code></li>
  <li class="example-icon__item"><i class="si-shoppingbasket"></i><code class="example-icon__name">si-shoppingbasket</code><code class="example-icon__deprecated">si-shoppingcard</code></li>
  <li class="example-icon__item"><i class="si-simcard-activate"></i><code class="example-icon__name">si-simcard-activate</code></li>
  <li class="example-icon__item"><i class="si-simcard-add"></i><code class="example-icon__name">si-simcard-add</code></li>
  <li class="example-icon__item"><i class="si-simcard-esim-activate"></i><code class="example-icon__name">si-simcard-esim-activate</code></li>
  <li class="example-icon__item"><i class="si-simcard-add"></i><code class="example-icon__name">si-simcard-add</code></li>
  <li class="example-icon__item"><i class="si-simcard-esim-pukcode"></i><code class="example-icon__name">si-simcard-esim-pukcode</code></li>
  <li class="example-icon__item"><i class="si-simcard-esim-unlock"></i><code class="example-icon__name">si-simcard-esim-unlock</code></li>
  <li class="example-icon__item"><i class="si-simcard-esim"></i><code class="example-icon__name">si-simcard-esim</code></li>
  <li class="example-icon__item"><i class="si-simcard-pukcode"></i><code class="example-icon__name">si-simcard-pukcode</code></li>
  <li class="example-icon__item"><i class="si-simcard-unlock"></i><code class="example-icon__name">si-simcard-unlock</code></li>
  <li class="example-icon__item"><i class="si-simcard"></i><code class="example-icon__name">si-simcard</code><code class="example-icon__deprecated">si-sim-card</code></li>
  <li class="example-icon__item"><i class="si-smarthome"></i><code class="example-icon__name">si-smarthome</code><code class="example-icon__deprecated">si-smartlife</code></li>
  <li class="example-icon__item"><i class="si-soccer"></i><code class="example-icon__name">si-soccer</code></li>
  <li class="example-icon__item"><i class="si-speed"></i><code class="example-icon__name">si-speed</code></li>
  <li class="example-icon__item"><i class="si-square"></i><code class="example-icon__name">si-square</code></li>
  <li class="example-icon__item"><i class="si-star"></i><code class="example-icon__name">si-star</code></li>
  <li class="example-icon__item"><i class="si-suitcase"></i><code class="example-icon__name">si-suitcase</code></li>
  <li class="example-icon__item"><i class="si-sun"></i><code class="example-icon__name">si-sun</code></li>
  <li class="example-icon__item"><i class="si-tablet"></i><code class="example-icon__name">si-tablet</code></li>
  <li class="example-icon__item"><i class="si-thief"></i><code class="example-icon__name">si-thief</code></li>
  <li class="example-icon__item"><i class="si-thumbs-down"></i><code class="example-icon__name">si-thumbs-down</code></li>
  <li class="example-icon__item"><i class="si-thumbs-up"></i><code class="example-icon__name">si-thumbs-up</code></li>
  <li class="example-icon__item"><i class="si-ticket"></i><code class="example-icon__name">si-ticket</code><code class="example-icon__deprecated">si-tickets</code></li>
  <li class="example-icon__item"><i class="si-triangle"></i><code class="example-icon__name">si-triangle</code></li>
  <li class="example-icon__item"><i class="si-truck"></i><code class="example-icon__name">si-truck</code><code class="example-icon__deprecated">si-transport</code></li>
  <li class="example-icon__item"><i class="si-tv-error"></i><code class="example-icon__name">si-tv-error</code></li>
  <li class="example-icon__item"><i class="si-tv-record"></i><code class="example-icon__name">si-tv-record</code></li>
  <li class="example-icon__item"><i class="si-tv"></i><code class="example-icon__name">si-tv</code></li>
  <li class="example-icon__item"><i class="si-unicorn"></i><code class="example-icon__name">si-unicorn</code></li>
  <li class="example-icon__item"><i class="si-upload"></i><code class="example-icon__name">si-upload</code></li>
  <li class="example-icon__item"><i class="si-voicemail"></i><code class="example-icon__name">si-voicemail</code></li>
  <li class="example-icon__item"><i class="si-warning"></i><code class="example-icon__name">si-warning</code></li>
  <li class="example-icon__item"><i class="si-wifi-disabled"></i><code class="example-icon__name">si-wifi-disabled</code><code class="example-icon__deprecated">si-no-wifi</code></li>
  <li class="example-icon__item"><i class="si-wifi-extender-wireless"></i><code class="example-icon__name">si-wifi-extender-wireless</code></li>
  <li class="example-icon__item"><i class="si-wifi-extender"></i><code class="example-icon__name">si-wifi-extender</code></li>
  <li class="example-icon__item"><i class="si-wifi-love"></i><code class="example-icon__name">si-wifi-love</code></li>
  <li class="example-icon__item"><i class="si-wifi"></i><code class="example-icon__name">si-wifi</code></li>
</ul>

## Deprecated icons
<ul class="example-icon">
  <li class="example-icon__item"><i class="si-alles-in-een"></i><code class="example-icon__deprecated">si-alles-in-een</code></li>
  <li class="example-icon__item"><i class="si-app-netflix"></i><code class="example-icon__deprecated">si-app-netflix</code></li>
  <li class="example-icon__item"><i class="si-businessman"></i><code class="example-icon__deprecated">si-businessman</code></li>
  <li class="example-icon__item"><i class="si-experiabox"></i><code class="example-icon__deprecated">si-experiabox</code></li>
  <li class="example-icon__item"><i class="si-forum"></i><code class="example-icon__deprecated">si-forum</code></li>
  <li class="example-icon__item"><i class="si-mobile-incomming-call"></i><code class="example-icon__deprecated">si-mobile-incomming-call</code></li>
  <li class="example-icon__item"><i class="si-mobile-switch-off"></i><code class="example-icon__deprecated">si-mobile-switch-off</code></li>
  <li class="example-icon__item"><i class="si-smiley-wink"></i><code class="example-icon__deprecated">si-smiley-wink</code></li>
</ul>
