import pkg from './package.json';

export default {
  title: 'Syra PluginBridge',
  description: pkg.description,
  base: `/${pkg.name}/`,
  version: pkg.version,
  propsParser: false,
  hashRouter: true,
  typescript: true,
  themeConfig: {
    initialColorMode: 'dark',
  },
};