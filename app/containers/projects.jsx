import { connect } from 'react-redux';

import HighlightedProjects from '../components/highlighted-projects';

const mapStateToProps = (state) => ({
  title: 'text-projects',
  highlightedProjects: state.projects.data || [],
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HighlightedProjects);
