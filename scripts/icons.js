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
 *   - wifi extender inverted
 *   - remove meta data
 *   - unpack zip to specific named directory
 */
