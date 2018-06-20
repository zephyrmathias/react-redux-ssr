const path = require('path');

const commonPath = {
  app: {
    rootPath: path.resolve(__dirname, '..'),
  },
  client: {
    appEntryPath: './src/client/index.jsx',
    outputPath: path.resolve(__dirname, '../build/dist/javascript'),
    reactLoadableJsonPath: './build/react-loadable.json',
    webpackManifestJsonPath: '../../webpack-manifest.json',
  },
  server: {
    serverEntryPath: './src/server/index.js',
    outputPath: path.resolve(__dirname, '../build/server'),
  },
  sharedAlias: {
    componentsPath: path.resolve(__dirname, '../src/shared/components'),
    pagesPath: path.resolve(__dirname, '../src/shared/pages'),
    actionsPath: path.resolve(__dirname, '../src/shared/actions'),
    actionTypesPath: path.resolve(__dirname, '../src/shared/actions/types'),
    reducersPath: path.resolve(__dirname, '../src/shared/reducers'),
    storePath: path.resolve(__dirname, '../src/shared/store'),
  },
  serverAlias: {
    helpersPath: path.resolve(__dirname, '../src/server/helpers'),
    buildPath: path.resolve(__dirname, '../build'),
  },
};

module.exports = commonPath;
