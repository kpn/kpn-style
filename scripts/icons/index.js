const path = require('path');

const { checkSource, createSVG, createTTF, createEOT, createWOFF, createWOFF2, createSvgSymbol, createHTML, copyTemplate } = require('./utils');

module.exports = async function create(options) {
  if (!options) options = {};

  options.dist = options.dist || path.join(process.cwd(), 'fonts');
  options.src = options.src || path.join(process.cwd(), 'assets');

  let cssString = [];
  let cssIconHtml = [];
  let unicodeHtml = [];
  let symbolHtml = [];

  return checkSource(options)
    .then(() => createSVG(options))
    .then((UnicodeObject) => {
      Object.keys(UnicodeObject).forEach(name => {
        let _code = UnicodeObject[name];
        let _newFileName = options.shouldPrefixClassName ? name : `${options.className}-${name}`;
        cssIconHtml.push(`<li class="class-icon"><i class="${_newFileName}"></i><p class="name">${name}</p></li>`);
        unicodeHtml.push(`<li class="unicode-icon"><span class="iconfont">${_code}</span><h4>${name}</h4><span class="unicode">&amp;#${_code.charCodeAt(0)};</span></li>`);
        symbolHtml.push(`
          <li class="symbol">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="${options.fontName}.symbol.svg#${_newFileName}"></use>
            </svg>
            <h4>${_newFileName}</h4>
          </li>
        `);
        cssString.push(`.${_newFileName}:before { content: "\\${_code.charCodeAt(0).toString(16)}"; }\n`);
      });
    })
    .then(() => createTTF(options))
    .then(() => createEOT(options))
    .then(() => createWOFF(options))
    .then(() => createWOFF2(options))
    .then(() => createSvgSymbol(options))
    .then(() => {
      // If you generate a font you need to generate a style.
      if (options.website) options.css = true;
      if (options.css) {
        const font_temp = path.resolve(__dirname, 'styles');
        return copyTemplate(font_temp, options.dist, {
          fontName: options.fontName,
          cssString: cssString.join(''),
          timestamp: new Date().getTime(),
          prefix: options.className || options.fontName
        });
      }
    });
}
