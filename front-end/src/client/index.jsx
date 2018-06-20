import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import { renderRoutes } from 'react-router-config';
import routes from 'pages/routes';
import configureStore from 'store';

const initialState = window.__PRELOADED_STATE__; /* eslint-disable-line no-underscore-dangle */

delete window.__PRELOADED_STATE__; /* eslint-disable-line no-underscore-dangle */

const store = configureStore(initialState);

const Application = (
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>
);

Loadable.preloadReady().then(() => {
  ReactDOM.hydrate(
    Application,
    document.getElementById('app'),
  );
});
