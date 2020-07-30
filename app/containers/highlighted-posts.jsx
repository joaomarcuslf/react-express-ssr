import { connect } from 'react-redux';

import PostsShowcase from '../components/posts-showcase';

const mapStateToProps = (state) => ({
  posts: state.highlightedPosts.data || [],
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PostsShowcase);
