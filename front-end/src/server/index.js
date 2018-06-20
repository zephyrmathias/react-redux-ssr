import express from 'express';
import Loadable from 'react-loadable';
import configureStore from 'store';
import htmlRenderer from './helpers/renderer';

const app = express();

app.use(express.static('build/dist'));

app.get('*', (req, res) => {
  console.log('hi');
  const initialState = {};
  const store = configureStore(initialState);
  const html = htmlRenderer(req, store);
  res.send(html);
});

Loadable.preloadAll().then(() => {
  app.listen(3000, () => {
    console.log('3000 running');
  });
});
