const path = require('path');

module.exports = (env) => {
  console.log(env);
  return {
    mode: 'development',
    entry: {
      index: './src/index.js',
    },
    output: {
      filename: 'webpack-number.js',
      path: path.resolve(__dirname, 'dist'),
      library: {
        name: 'webpackNumbers',
        type: 'umd',
      },
    },
    externals: {
      lodash: {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: '_',
      },
    },
    devtool: 'inline-source-map',
  };
};
