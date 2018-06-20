const fetchPosts = () => ({
  type: 'FETCH_POSTS',
  posts: {
    userId: '123',
    id: 1,
    title: 'This is post title',
    body: 'This is post body',
  },
});

export default fetchPosts;
