const kpnIconParser = require('./icons/index');

kpnIconParser({
  src: './assets/service-icons',
  dist: './fonts'
}).then(() => {
  console.log('Done...');
});

// const fs = require("fs-extra");
// const path = require("path");

// const generate = require('./utils/generate');

// const unzipper = require("unzipper");

// const assetsDirectory = path.join(process.cwd(), 'assets');
// const distDirectory = path.join(process.cwd(), 'fonts');

// const clearDirectories = async () => {
//   try {
//     await fs.emptyDir(path.join(assetsDirectory, 'service-icons'));
//     await fs.emptyDir(distDirectory);
//     fs.createReadStream(path.join(assetsDirectory, 'service-icons.zip'))
//       .pipe(unzipper.Parse())
//       .on('entry', (entry) => {
//         if (entry.type === 'File' && entry.path.indexOf('/') === -1) {
//           const newFileName = entry.path.replace(/^service-/i, 'si-');
//           entry.pipe(fs.createWriteStream(path.join(assetsDirectory, 'service-icons', newFileName)));
//         }
//         else {
//           entry.autodrain();
//         }
//       });
//   } catch(error) {
//     console.log(error);
//   }
// }

// clearDirectories()
//   .then(() => console.log('We did it!'));


// svgo = https://github.com/svg/svgo/
// icon-font-generator = https://www.npmjs.com/package/icon-font-generator
// svgtofont = https://github.com/jaywcjlove/svgtofont
