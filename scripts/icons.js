const chalk = require('chalk');
const kpnIconParser = require('./icons/index');
const pkg = require('../packages/package.json');

kpnIconParser({
  src: './assets/service-icons.zip',
  dist: './fonts',
  fontName: 'kpn-service-icons',
  className: 'si',
  shouldRemoveFromName: 'service-',
  shouldPrefixClassName: true,
  outSVGPath: true,
  website: {
    version: pkg.version
  }
}).then(() => {
  console.log(`${chalk.green('SUCCESS')} The icon pack is successfully build!`);
});

/**
 * @TODO:
 *
 * - Check icons:
 *   - `si-euro` different icon
 *   - `si-soccer` fails on bottom
 *   - `si-square` not visible
 * - Check color schema
 * - Add icons to projercts MD file
 * - Add Sass/Scss file(s)
 * - Update demo page
 * - Parameterize script
 * - Bump version, update package.json if necessary
 * - Create Zip from bundle
 * - Add/update logging
 * - Create mapping for renamed icons
 * - Handle deprecated icons
 * - Maybe e-mail/Slack to UX Lab with result (only on master)
 *
 * // svgo = https://github.com/svg/svgo/
 * // icon-font-generator = https://www.npmjs.com/package/icon-font-generator
 * // svgtofont = https://github.com/jaywcjlove/svgtofont
 */
