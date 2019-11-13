const fs = require('fs');
const path = require('path');

const SVGIcons2SVGFont = require('svgicons2svgfont');

let UnicodeObj = {};
let startUnicode = 0xe900;

function getIconUnicode(name) {
  let unicode = String.fromCharCode(startUnicode++);
  UnicodeObj[name] = unicode;
  return [unicode];
}

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

    const DIST_PATH = path.join(OPTIONS.dist, OPTIONS.fontName + '.svg');

    fontStream.pipe(fs.createWriteStream(DIST_PATH))
      .on('finish', () => {
        console.log(`${'SUCCESS'.green} ${'SVG'.blue_bt} font successfully created! ${DIST_PATH}`);
        resolve(UnicodeObj);
      })
      .on('error', (err) => {
        if (err) {
          console.log(err);
          reject(err);
        }
      });

    this.filterSvgFiles(OPTIONS.src).forEach(svg => {
      if (typeof svg !== 'string') return false;
      writeFontStream(svg);
    });

    fontStream.end();
  });
  console.log('Creating SVG font');
};
