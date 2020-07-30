import { connect } from 'react-redux';

import ProjectsShowcase from '../components/projects-showcase';

const mapStateToProps = (state) => ({
  projects: state.highlightedProjects.data || [],
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsShowcase);
