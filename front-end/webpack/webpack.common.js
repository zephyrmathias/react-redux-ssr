const { sharedAlias } = require('./webpack.path');

const commonConfig = {
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      components: sharedAlias.componentsPath,
      pages: sharedAlias.pagesPath,
      actions: sharedAlias.actionsPath,
      actionTypes: sharedAlias.actionTypesPath,
      reducers: sharedAlias.reducersPath,
      store: sharedAlias.storePath,
    },
  },
};

module.exports = commonConfig;
