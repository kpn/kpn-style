const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const minify = require('html-minifier').minify;
const generate = require('./generate');

const { checkSource, cleanSourceFiles, createSVG, createTTF, createEOT, createWOFF, createWOFF2, createSvgSymbol, createHTML, copyTemplate, log } = require('./utils');

module.exports = async function create(options) {
  if (!options) options = {};

  options.dist = options.dist || path.join(process.cwd(), 'fonts');
  options.src = options.src || path.join(process.cwd(), 'assets');

  let cssString = [];
  let cssIconHtml = [];
  let unicodeHtml = [];
  let symbolHtml = [];

  const pageName = ['font-class', 'unicode', 'symbol'];

  log(`${chalk.keyword('orange')('START')} Building Icon set from: ${chalk.yellow(options.src)}\n`);

  return checkSource(options)
    // .then(() => cleanSourceFiles(options))
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
    })
    .then(() => {
      if (options.website) {
        log(`${chalk.keyword('orange')('PROGRESS')} Building html...`);

        const indexName = pageName.includes(options.website.index) ? pageName.indexOf(options.website.index) : 0;
        pageName.forEach((name, index) => {
          const _path = path.join(options.dist, indexName === index ? 'index.html' : `${name}.html`);
          if (name === 'font-class') fontClassPath = _path;
          if (name === 'unicode') unicodePath = _path;
          if (name === 'symbol') symbolPath = _path;
        });
        options.website.template = options.website.template || path.join(__dirname, 'views', 'index.ejs');

        this.tempData = {
          ...options.website,
          prefix: options.className || options.fontName,
          _fontname: options.fontName,
          _type: 'font-class',
          _logo: options.website.logo,
          _link: `${options.fontName}.css`,
          _IconHtml: cssIconHtml.join(''),
          _title: options.website.title || options.fontName
        };

        if (options.website.logo && fs.pathExistsSync(options.website.logo) && path.extname(options.website.logo) === '.svg') {
          this.tempData._logo = fs.readFileSync(options.website.logo);
        } else {
          this.tempData._logo = false;
        }

        if (options.website.favicon && fs.pathExistsSync(options.website.favicon)) {
          this.tempData.favicon = base64Img.base64Sync(options.website.favicon);
        } else {
          this.tempData.favicon = false;
        }

        return createHTML({
          outPath: options.website.template,
          data: this.tempData
        });
      }
    })
    .then(str => {
      if (options.website) {
        fs.outputFileSync(
          fontClassPath,
          minify(str, { collapseWhitespace: true, minifyCSS: true })
        );
        log(`${chalk.green('SUCCESS')} ${chalk.blueBright(path.parse(fontClassPath).base)} html successfully created ${chalk.yellow(fontClassPath)}\n`, true);
      }
    })
    .then(str => {
      if (options.website) {
        log(`${chalk.keyword('orange')('PROGRESS')} Building html...`);

        this.tempData._IconHtml = unicodeHtml.join('');
        this.tempData._type = 'unicode';
        return createHTML({
          outPath: options.website.template,
          data: this.tempData
        });
      }
    })
    .then(str => {
      if (options.website) {
        fs.outputFileSync(
          unicodePath,
          minify(str, { collapseWhitespace: true, minifyCSS: true })
        );
        log(`${chalk.green('SUCCESS')} ${chalk.blueBright(path.parse(unicodePath).base)} html successfully created ${chalk.yellow(unicodePath)}\n`, true);
      }
    })
    .then(str => {
      if (options.website) {
        log(`${chalk.keyword('orange')('PROGRESS')} Building html...`);

        this.tempData._IconHtml = symbolHtml.join('');
        this.tempData._type = 'symbol';
        return createHTML({
          outPath: options.website.template,
          data: this.tempData
        });
      }
    })
    .then(str => {
      if (options.website) {
        fs.outputFileSync(
          symbolPath,
          minify(str, { collapseWhitespace: true, minifyCSS: true })
        )
        log(`${chalk.green('SUCCESS')} ${chalk.blueBright(path.parse(symbolPath).base)} html successfully created ${chalk.yellow(symbolPath)}\n`, true)
      }
    })
    .then(async () => {
      if (options.outSVGPath) {
        log(`${chalk.keyword('orange')('PROGRESS')} Building json...`);

        const outPath = await generate.generateIconsSource(options);

        log(`${chalk.green('SUCCESS')} ${chalk.blueBright(path.parse(outPath).base)} json successfully created ${chalk.yellow(outPath)}\n`, true);
      }
      return options;
    });
}
