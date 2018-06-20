import axios from 'axios';
import { FETCH_POSTS } from 'actionTypes/post';

const fetchPosts = () => async (dispatch) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  dispatch({
    type: FETCH_POSTS,
    payload: res.data,
  });
};

export default fetchPosts;
