import Loadable from 'react-loadable';
import App from 'components/App';
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

const AsyncNotFound = Loadable({
  loader: () => import(/* webpackChunkName: 'NotFoundPage' */ 'pages/NotFound'),
  loading: Loading,
});

const routes = [
  {
    component: App,
    routes: [
      {
        component: AsyncHome,
        path: '/',
        exact: true,
      },
      {
        component: AsyncLogin,
        path: '/login',
      },
      {
        component: AsyncPost,
        path: '/post',
      },
      {
        component: AsyncNotFound,
      },
    ],
  },
];

export default routes;
