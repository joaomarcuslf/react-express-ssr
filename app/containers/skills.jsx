import { connect } from 'react-redux';

import SkillsShowcase from '../components/skills-showcase';

const mapStateToProps = (state) => ({
  title: 'text-skills',
  skills: state.skills.data || [],
  seeMore: false,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SkillsShowcase);
