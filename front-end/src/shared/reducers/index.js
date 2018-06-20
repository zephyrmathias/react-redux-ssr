import { combineReducers } from 'redux';
import postRedcuer from './postReducer';

const reducers = combineReducers({
  posts: postRedcuer,
});

export default reducers;
