import React from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { Header } from 'components';

const App = ({ route }) => (
  <div>
    <Header />
    <div>Apssp</div>
    {renderRoutes(route.routes)}
  </div>
);

App.propTypes = {
  route: PropTypes.shape({
    component: PropTypes.func.isRequired,
    routes: PropTypes.arrayOf(PropTypes.shape({
      component: PropTypes.func.isRequired,
      path: PropTypes.string.isRequired,
      exact: PropTypes.bool,
    })).isRequired,
  }).isRequired,
};

export default App;
