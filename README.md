# Quick start
We created KPN Style to act as a central location for reusable (style) packages. Anyone working on a KPN product is encouraged to stay familiar with KPN Style and help ensure that it is kept up-to-date. We also supply a portal with documentation on the use of KPN Style. 

[![Build Status](https://travis-ci.org/kpn/kpn-style.svg?branch=master)](https://travis-ci.org/kpn/kpn-style)

---

## Portal with documentation
The portal consists of code snippets and real-world examples of KPN Style that you can test in your browser.

---

## Packages
The packages are written in Sass and completely independent: they don't need other libraries or frameworks like Bootstrap, jQuery, React, Vue, or Angular to work. You can include the packages in any project. The only thing you need is a Sass compiler to turn Sass into CSS. 

### npm
The packages are available on npm. In the example below we use the KPN Style Bundle package that will include all other (sub)packages. You can get started quickly by installing it like this:

```bash
npm install --save @kpn-style/bundle
```

Or, if you are using Yarn:

```
yarn add @kpn-style/bundle
```

### Sass
Import the package into your own main Sass file.

```scss
@import "~@kpn-style/bundle/bundle";
```

*\* The tilde '~' character is a shortcut in Webpack to the `node_modules` folder* 

### Setup in your project
In this example we assume that you have installed KPN Style through npm (and thus is included in your `package.json` file) and use a main Sass file to import other Sass files.

#### package.json
```json
"@kpn-style/bundle": "^{{kpnStyleBundleVersion}}"
```

#### Main Sass file (e.g. styles.scss)
```scss
// Import complete bundle
@import "~@kpn-style/bundle/bundle";

// Make sure to load the files for the fonts you use
@include font-face("kpn-metric", normal, 700, "~@kpn-style/bundle/base/typography", "kpn-metric-bold");
@include font-face("kpn-ui-icons", normal, 400, "~@kpn-style/bundle/base/ui-icon", "kpn-ui-icons");
```

### Advanced setup
If you don't want to import the complete bundle you can also only import the parts you need.

#### styles.scss
```scss
// Specific theme variables
@import "~@kpn-style/business-market/business-market";

// Minimal import with only base functions, mixins etc.
@import "~@kpn-style/bundle/base.abstract";

// Load font files
@include font-face("kpn-metric", normal, 700, "~@kpn-style/bundle/base/typography", "kpn-metric-bold");
@include font-face("kpn-ui-icons", normal, 400, "~@kpn-style/bundle/base/ui-icon", "kpn-ui-icons");

// Import only the styles you need
@import "~@kpn-style/bundle/base/typography/typography";
@import "~@kpn-style/bundle/component/button/button";
```
