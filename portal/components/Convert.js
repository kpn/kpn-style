import bundlePackageJson from './../../packages/kpn-style/package.json'

const ReplaceKpnStyleBundleVersion = (content) => {
  return content.replace(/{{kpnStyleBundleVersion}}/gi, bundlePackageJson.version)
};

export default ReplaceKpnStyleBundleVersion;