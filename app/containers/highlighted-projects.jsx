import { connect } from 'react-redux';

import HighlightedProjects from '../components/highlighted-projects';

const mapStateToProps = (state) => ({
  highlightedProjects: state.highlightedProjects.data || [],
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HighlightedProjects);
