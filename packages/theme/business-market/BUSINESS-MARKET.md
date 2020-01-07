# Business Market
Because of the information density within the Business Market (BM), we build around a default of 14px, instead of 16px for Consumer Market (CM).

Source file: [packages/theme/business-market/_business-market.scss](https://github.com/kpn/kpn-style/blob/master/packages/theme/business-market/_business-market.scss)

---

## Usage
Because this theme contains customizable variables you need to import this **manually** before other style packages, preferably in the main SCSS file of your project; avoid importing the business market theme multiple times. [Read more about imports here](/#/getting-started/quick-start).

```scss
@import "~@kpn-style/bundle/business-market/business-market";
@import "~@kpn-style/bundle/bundle";
```

*\* The tilde "~" character is a shortcut in Webpack to the `node_modules` folder* 

---

## Variables

### Theme styles
```scss
$button-height-s: 24px;
$button-height-m: 32px;
$button-height-l: 40px;

$font-size-s: 12px;
$font-size-m: 14px;
$font-size-l: 18px;

$h1-font-size-xs: 24px;
$h1-font-size-s: 24px;
$h1-font-size-m: 24px;

$h2-font-size-xs: 20px;
$h2-font-size-s: 20px;
$h2-font-size-m: 20px;

$h3-font-size-xs: 16px;
$h3-font-size-s: 16px;
$h3-font-size-m: 16px;

$h4-font-size-xs: 14px;
$h4-font-size-s: 14px;
$h4-font-size-m: 14px;

$input-text-height: 32px;
```
