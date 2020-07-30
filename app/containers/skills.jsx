import { connect } from 'react-redux';

import HighlightedSkills from '../components/highlighted-skills';

const mapStateToProps = (state) => ({
  title: 'text-skills',
  highlightedSkills: state.skills.data || [],
  seeMore: false,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HighlightedSkills);
