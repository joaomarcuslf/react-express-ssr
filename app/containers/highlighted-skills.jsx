import { connect } from 'react-redux';

import HighlightedSkills from '../components/highlighted-skills';

const mapStateToProps = (state) => ({
  highlightedSkills: state.highlightedSkills.data || [],
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HighlightedSkills);
