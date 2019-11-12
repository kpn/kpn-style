'use strict';

const chalk = require('chalk');
const fs = require('fs-extra');
const sass = require('node-sass');

const bundlePackageJson = require('../packages/package.json');
const bundleVersion = bundlePackageJson.version;
const staticFolder = `./public/static/${bundleVersion}`;

const fontFace = `@include font-face('kpn-metric', normal, 300, '/static/${bundleVersion}', 'kpn-metric-light');
@include font-face('kpn-metric', normal, 400, '/static/${bundleVersion}', 'kpn-metric-normal');
@include font-face('kpn-metric', normal, 700, '/static/${bundleVersion}', 'kpn-metric-bold');
@include font-face('kpn-ui-icons', normal, 400, '/static/${bundleVersion}', 'kpn-ui-icons');
@include font-face('kpn-service-icons', normal, 400, '/static/${bundleVersion}', 'kpn-service-icons');
`; 

fs.pathExists(staticFolder)
.then(exists => {
  if(exists) {
    console.log(chalk.red('There is already a folder with the name ' + staticFolder + '\n' +  
      'Make sure you are not updating a static version that is already in production.\n' +
      'If you know what you are doing delete the folder and try again.\n'));
      process.exit(1);
      
    } else {
      createStatics();
  }
})
.catch(error => {
  console.error(error)
  process.exit(1);
});

function createStatics() {
  // Create static folder
  fs.ensureDir(staticFolder)
  .then(() => {
    console.log('Creating static files...\n')
  })
  .catch(error => {
    console.error(error)
  });

  // Read bundle file and compile it with @font-face rules with url's to kpn style domain 
  fs.readFile('./packages/_bundle.scss', function(error, file) {
    if (error) throw new Error(error);

    const compiledSass = sass.renderSync({
      data: file + fontFace,
      includePaths: ['packages/'],
      outputStyle: 'compressed'
    });

    // Write the compiled output to a file
    fs.outputFile(`${staticFolder}/bundle.css`, compiledSass.css);
  });
  
  // Copy static files for typography
  fs.readdir('./packages/base/typography', (error, files) => {
    if (error) throw new Error(error);

    files.forEach((file) => {
      if(file.startsWith('kpn-metric')) {
        fs.copy(`./packages/base/typography/${file}`, `${staticFolder}/${file}`);
      }
    });
  });
  
  // Copy static files for UI icons
  fs.readdir('./packages/base/ui-icon', (error, files) => {
    if (error) throw new Error(error);
    
    files.forEach((file) => {
      if(file.startsWith('kpn-ui-icons')) {
        fs.copy(`./packages/base/ui-icon/${file}`, `${staticFolder}/${file}`);
      }
    });
  });  

  // Copy static files for Service icons
  fs.readdir('./packages/base/service-icon', (error, files) => {
    if (error) throw new Error(error);
    
    files.forEach((file) => {
      if(file.startsWith('kpn-service-icons')) {
        fs.copy(`./packages/base/service-icon/${file}`, `${staticFolder}/${file}`);
      }
    });
  });    
}
