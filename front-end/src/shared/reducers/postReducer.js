const INITIAL_STATE = {};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return Object.assign({}, state, action.posts);
    default:
      return state;
  }
};

export default postReducer;
