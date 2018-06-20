import { createStore } from 'redux';
import reducers from 'reducers';

const configureStore = (initialState = {}) => (
  createStore(reducers, initialState)
);

export default configureStore;
