import 'babel-polyfill';
import express from 'express';
import Loadable from 'react-loadable';
import { matchRoutes } from 'react-router-config';
import routes from 'pages/routes';
import configureStore from 'store';
import htmlRenderer from './helpers/renderer';

const app = express();

app.use(express.static('build/dist'));

app.get('*', async (req, res) => {
  const initialState = {};
  const store = configureStore(initialState);

  const actionsTemp =
    matchRoutes(routes, req.path)
      .map(({ route }) => (
        !route.component.preload
          ? route.component
          : route.component.preload().then(response => response.default)
      ));

  const loadedActions = await Promise.all(actionsTemp);

  const actions = loadedActions
    .map(component => (component.fetching ? component.fetching(store) : null))
    .map(promises => (
      Promise.all((promises || [])
        .map(p => p && new Promise(resolve => p.then(resolve).catch(resolve))))
    ));

  await Promise.all(actions);
  const html = htmlRenderer(req, store);
  res.send(html);
});

Loadable.preloadAll().then(() => {
  app.listen(3000, () => {
    console.log('3000 running');
  });
});
