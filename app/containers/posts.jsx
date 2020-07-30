import { connect } from 'react-redux';

import HighlightedPosts from '../components/highlighted-posts';

const mapStateToProps = (state) => ({
  title: 'text-posts',
  highlightedPosts: state.posts.data || [],
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HighlightedPosts);
