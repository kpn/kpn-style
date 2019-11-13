const fs = require('fs-extra');
const path = require('path');

const { createSVG } = require('./utils');

module.exports = async function create(options) {
  if (!options) options = {};

  options.dist = options.dist || path.join(process.cwd(), 'fonts');
  options.src = options.src || path.join(process.cwd(), 'assets');
  options.fontName = options.fontName || 'kpn-service-icons';

  await fs.emptyDir(options.dist);
  await fs.ensureDir(options.dist);

  return createSVG(options);
}
