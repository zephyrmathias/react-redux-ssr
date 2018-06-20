import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchPosts from 'actions/post';

class Post extends React.Component {
  static fetching({ store }) {
    return [
      store.dispatch(fetchPosts()),
    ];
  }
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        <h1>POST</h1>
        <h2>UserId: {this.props.posts.userId}</h2>
        <h4>Id: {this.props.posts.id}</h4>
        <h4>Title: {this.props.posts.title}</h4>
        <p>{this.props.posts.body}</p>
      </div>
    );
  }
}

Post.propTypes = {
  posts: PropTypes.shape({
    userId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
  fetchPosts: PropTypes.func.isRequired,
};

const mapStateToProps = ({ posts }) => ({
  posts,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
