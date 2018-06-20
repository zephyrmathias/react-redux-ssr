import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from 'components/Loading';

const AsyncHome = Loadable({
  loader: () => import(/* webpackChunkName: 'HomePage' */ 'pages/Home'),
  loading: Loading,
});

const AsyncLogin = Loadable({
  loader: () => import(/* webpackChunkName: 'LoginPage' */ 'pages/Login'),
  loading: Loading,
});

const AsyncPost = Loadable({
  loader: () => import(/* webpackChunkName: 'PostPage' */ 'pages/Post'),
  loading: Loading,
});


const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={AsyncHome} />
    <Route path="/login" component={AsyncLogin} />
    <Route path="/post" component={AsyncPost} />
  </Switch>
);

export default AppRoutes;
