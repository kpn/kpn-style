import bundlePackageJson from './../../packages/package.json'

const ReplaceKpnStyleBundleVersion = (content) => {
  return content.replace(/{{kpnStyleBundleVersion}}/gi, bundlePackageJson.version)
};

export default ReplaceKpnStyleBundleVersion;