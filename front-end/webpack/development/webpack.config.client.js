const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { HashedModuleIdsPlugin } = require('webpack');
const { ReactLoadablePlugin } = require('react-loadable/webpack');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const commonConfig = require('../webpack.common');
const { app, client } = require('../webpack.path');

const clientConfig = {
  mode: 'development',
  entry: {
    app: client.appEntryPath,
  },
  output: {
    filename: '[name].[chunkhash:12].js',
    path: client.outputPath,
    publicPath: '/javascript/',
  },
  devtool: 'cheap-source-map',
  optimization: {
    splitChunks: {
      automaticNameDelimiter: '.',
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(
      ['build/dist'],
      { root: app.rootPath },
    ),
    new ReactLoadablePlugin({
      filename: client.reactLoadableJsonPath,
    }),
    new WebpackManifestPlugin({
      fileName: client.webpackManifestJsonPath,
    }),
    new HashedModuleIdsPlugin(),
  ],
};

module.exports = merge(commonConfig, clientConfig);
