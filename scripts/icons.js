const chalk = require('chalk');
const kpnIconParser = require('./icons/index');

kpnIconParser({
  src: './assets/service-icons.zip',
  dist: './fonts'
}).then(() => {
  console.log(`${chalk.green('SUCCESS')} The icon pack is successfully build!`);
});

// svgo = https://github.com/svg/svgo/
// icon-font-generator = https://www.npmjs.com/package/icon-font-generator
// svgtofont = https://github.com/jaywcjlove/svgtofont
