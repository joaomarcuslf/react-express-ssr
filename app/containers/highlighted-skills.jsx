import { connect } from 'react-redux';

import SkillsShowcase from '../components/skills-showcase';

const mapStateToProps = (state) => ({
  skills: state.highlightedSkills.data || [],
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SkillsShowcase);
