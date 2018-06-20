import { FETCH_POSTS } from 'actionTypes/post';

const INITIAL_STATE = {};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default postReducer;
