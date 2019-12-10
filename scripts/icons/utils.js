const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const unzipper = require('unzipper');
const svg2ttf = require('svg2ttf');
const ttf2eot = require('ttf2eot');
const ttf2woff = require("ttf2woff");
const ttf2woff2 = require("ttf2woff2");
const SVGIcons2SVGFont = require('svgicons2svgfont');

let UnicodeObj = {};
let startUnicode = 0xe900;

function getIconUnicode(name) {
  let unicode = String.fromCharCode(startUnicode++);
  UnicodeObj[name] = unicode;
  return [unicode];
};

exports.filterSvgFiles = (svgFolderPath) => {
  let files = fs.readdirSync(svgFolderPath, 'utf-8');
  let svgArr = [];

  if (!files) {
    throw new Error(`Error! Svg folder is empty. ${svgFolderPath}`);
  }

  for(let i in files) {
    if (typeof files[i] !== 'string' || path.extname(files[i]) !== '.svg') continue;
    if (!~svgArr.indexOf(files[i])) {
      svgArr.push(path.join(svgFolderPath, files[i]));
    }
  }

  return svgArr;
};

exports.checkSource = async (OPTIONS) => {
  try {
    const source = fs.lstatSync(OPTIONS.src);
    if (source.isFile() && path.extname(OPTIONS.src) === '.zip') {
      const newSourceFolder = OPTIONS.src.replace(/\.[^/.]+$/, '');

      await fs.emptyDir(newSourceFolder);
      await fs.emptyDir(OPTIONS.dist);

      return await fs.createReadStream(OPTIONS.src)
        .pipe(unzipper.Parse())
        .on('entry', (entry) => {
          if (entry.type === 'File' && entry.path.indexOf('/') === -1) {
            let newFileName = entry.path;
            if (OPTIONS.shouldRename) {
              const fileNameRegex = new RegExp(OPTIONS.shouldRename, 'i');
              newFileName = entry.path.replace(fileNameRegex, OPTIONS.className);
            }
            entry.pipe(fs.createWriteStream(path.join(newSourceFolder, newFileName)));
          }
          else {
            entry.autodrain();
          }
        })
        .promise()
        .then(
          () => {
            OPTIONS.src = newSourceFolder;
            console.log(`${chalk.green('SUCCESS')} Source file successfully processed: ${chalk.yellow(OPTIONS.src)}`);
          },
          (e) => {
            console.log(`${chalk.red('ERROR')} Something went wrong while unzipping source file: ${chalk.yellow(OPTIONS.src)}`);
          }
        );

    } else {
      // @todo: check this later if this should be renamed
      console.log(`${chalk.green('SUCCESS')} Source is already a directory: ${chalk.yellow(OPTIONS.src)}`);
    }
  } catch(error) {
    console.log(`${chalk.red('ERROR')} Something went wrong while processing source: ${chalk.yellow(OPTIONS.src)}`);
  }
}

exports.createSVG = OPTIONS => {
  UnicodeObj = {};
  return new Promise((resolve, reject) => {
    const fontStream = new SVGIcons2SVGFont({
      fontName: OPTIONS.fontName,
      fontHeight: 1024,
      ascent: 960,
      descent: -64
    });

    function writeFontStream(svgPath) {
      let _name = path.basename(svgPath, '.svg');
      const glyph = fs. createReadStream(svgPath);
      glyph.metadata = {
        unicode: getIconUnicode(_name),
        name: _name
      };
      fontStream.write(glyph);
    }

    const DIST_PATH = path.join(OPTIONS.dist, `${OPTIONS.fontName}.svg`);

    fontStream.pipe(fs.createWriteStream(DIST_PATH))
      .on('finish', () => {
        console.log(`${chalk.green('SUCCESS')} ${chalk.blueBright('SVG')} font successfully created: ${chalk.yellow(DIST_PATH)}`);
        resolve(UnicodeObj);
      })
      .on('error', (err) => {
        if (err) {
          console.log(`${chalk.red('ERROR')} ${chalk.blueBright('SVG')} font not created: ${chalk.yellow(DIST_PATH)}`);
          reject(err);
        }
      });

    this.filterSvgFiles(OPTIONS.src).forEach(svg => {
      if (typeof svg !== 'string') return false;
      writeFontStream(svg);
    });

    fontStream.end();
  });
};

exports.createTTF = OPTIONS => {
  return new Promise((resolve, reject) => {
    const DIST_PATH = path.join(OPTIONS.dist, `${OPTIONS.fontName}.ttf`);
    let ttf = svg2ttf(fs.readFileSync(path.join(OPTIONS.dist, `${OPTIONS.fontName}.svg`), 'utf8'), {});
    ttf = this.ttf = Buffer.from(ttf.buffer);

    fs.writeFile(DIST_PATH, ttf, (err, data) => {
      if (err) {
        return reject(err);
      }
      console.log(`${chalk.green('SUCCESS')} ${chalk.blueBright('TTF')} font successfully created: ${chalk.yellow(DIST_PATH)}`);
      resolve(data);
    });
  });
};

exports.createEOT = OPTIONS => {
  return new Promise((resolve, reject) => {
    const DIST_PATH = path.join(OPTIONS.dist, `${OPTIONS.fontName}.eot`);
    const eot = Buffer.from(ttf2eot(this.ttf).buffer);

    fs.writeFile(DIST_PATH, eot, (err, data) => {
      if (err) {
        return reject(err);
      }
      console.log(`${chalk.green('SUCCESS')} ${chalk.blueBright('EOT')} font successfully created: ${chalk.yellow(DIST_PATH)}`);
      resolve(data);
    });
  });
};

exports.createWOFF = OPTIONS => {
  return new Promise((resolve, reject) => {
    const DIST_PATH = path.join(OPTIONS.dist, `${OPTIONS.fontName}.woff`);
    const woff = Buffer.from(ttf2woff(this.ttf).buffer);

    fs.writeFile(DIST_PATH, woff, (err, data) => {
      if (err) {
        return reject(err);
      }
      console.log(`${chalk.green('SUCCESS')} ${chalk.blueBright('WOFF')} font successfully created: ${chalk.yellow(DIST_PATH)}`);
      resolve(data);
    });
  });
};

exports.createWOFF2 = OPTIONS => {
  return new Promise((resolve, reject) => {
    const DIST_PATH = path.join(OPTIONS.dist, `${OPTIONS.fontName}.woff2`);
    const woff2 = Buffer.from(ttf2woff2(this.ttf).buffer);

    fs.writeFile(DIST_PATH, woff2, (err, data) => {
      if (err) {
        return reject(err);
      }
      console.log(`${chalk.green('SUCCESS')} ${chalk.blueBright('WOFF2')} font successfully created: ${chalk.yellow(DIST_PATH)}`);
      resolve(data);
    });
  });
};
