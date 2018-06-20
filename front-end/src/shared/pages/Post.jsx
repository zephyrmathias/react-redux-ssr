import React from 'react';
import { connect } from 'react-redux';
import fetchPosts from 'actions/post';

class Post extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        <h1>POST</h1>
        <h2></h2>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => ({
  posts,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
