import { connect } from 'react-redux';

import HighlightedPosts from '../components/highlighted-posts';

const mapStateToProps = (state) => ({
  highlightedPosts: state.highlightedPosts.data || [],
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HighlightedPosts);
