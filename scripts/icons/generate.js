const { filterSvgFiles } = require('./utils');

module.exports.generateIconsSource = async (options) => {
  const ICONS_PATH = filterSvgFiles(options.src);
}
