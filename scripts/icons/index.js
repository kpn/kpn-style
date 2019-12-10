const path = require('path');

const { checkSource, createSVG, createTTF, createEOT, createWOFF, createWOFF2 } = require('./utils');

module.exports = async function create(options) {
  if (!options) options = {};

  options.dist = options.dist || path.join(process.cwd(), 'fonts');
  options.src = options.src || path.join(process.cwd(), 'assets');
  options.fontName = options.fontName || 'kpn-service-icons';
  options.className = options.className || 'si';
  options.shouldRename = options.shouldRename || 'service';

  return checkSource(options)
    .then(() => createSVG(options))
    .then(() => createTTF(options))
    .then(() => createEOT(options))
    .then(() => createWOFF(options))
    .then(() => createWOFF2(options));
}
