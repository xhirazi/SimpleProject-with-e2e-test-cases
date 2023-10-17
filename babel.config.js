const path = require('path');
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        'module:metro-react-native-babel-preset',
        {
          unstable_disableES6Transforms: true,
        },
      ],
    ],
    env: {
      production: {
        plugins: ['transform-remove-console', 'react-native-paper/babel'],
      },
    },
    plugins: [
      [
        'module-resolver',
        {
          // cwd: "packagejson",
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@Cart': './src/modules/Cart/',
            '@redux': './src/redux',
            '@network': './src/network',
          },
        },
      ],
    ],
  };
};
