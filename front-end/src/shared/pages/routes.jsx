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
    ],
  },
];

export default routes;
