import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import { renderRoutes } from 'react-router-config';
import routes from 'pages/routes';
import reactLoadableStats from 'build/react-loadable';
import webpackManifestStats from 'build/webpack-manifest';

const htmlRenderer = (req, store) => {
  console.log(renderRoutes(routes));
  const modules = [];
  const Application = (
    <Loadable.Capture report={module => modules.push(module)}>
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    </Loadable.Capture>
  );
  const content = renderToString(Application);
  const bundles = getBundles(reactLoadableStats, modules);
  const scripts = bundles.filter(bundle => bundle.file.endsWith('.js'));
  const appBundle = webpackManifestStats['app.js'];
  const vendorsBundle = webpackManifestStats['vendors.js'];
  console.log(store.getState());
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <title>Document</title>
    </head>
    <body>
      <div id="app">${content}</div>
      ${scripts.map(script => (`<script async src="/javascript/${script.file}"></script>`)).join('\n')}
      <script async src="${vendorsBundle}"></script>
      <script async src="${appBundle}"></script>
    </body>
    </html>
  `;
};

export default htmlRenderer;
