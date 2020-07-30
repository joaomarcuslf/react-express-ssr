import { connect } from 'react-redux';

import ProjectsShowcase from '../components/projects-showcase';

const mapStateToProps = (state) => ({
  title: 'text-projects',
  projects: state.projects.data || [],
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsShowcase);
