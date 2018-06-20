const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackNodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const { LimitChunkCountPlugin } = require('webpack').optimize;
const commonConfig = require('../webpack.common');
const { app, server, serverAlias } = require('../webpack.path');

const serverConfig = {
  mode: 'development',
  target: 'node',
  entry: {
    server: server.serverEntryPath,
  },
  output: {
    filename: 'server.js',
    path: server.outputPath,
  },
  resolve: {
    alias: {
      helpers: serverAlias.helpersPath,
      build: serverAlias.buildPath,
    },
  },
  plugins: [
    new CleanWebpackPlugin(['build/server'], { root: app.rootPath }),
    new LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
  externals: [WebpackNodeExternals()],
};

module.exports = merge(commonConfig, serverConfig);
