import { connect } from 'react-redux';

import PostsShowcase from '../components/posts-showcase';

const mapStateToProps = (state) => ({
  title: 'text-posts',
  posts: state.posts.data || [],
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PostsShowcase);
