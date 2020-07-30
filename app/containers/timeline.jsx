import { connect } from 'react-redux';
import { get } from 'lodash';

import Timeline from '../components/timeline';

import { selectTimelineEvent } from '../actions/timeline';

const mapStateToProps = (state) => ({
  activeIndex: state.timeline.activeIndex,
  activeEvent: get(state, ['timeline', 'data', state.timeline.activeIndex]),
  timeline: get(state, ['timeline', 'data']) || [],
  initialDate: get(state, ['timeline', 'data', '0', 'startDate']),
  endDate: 'text-present',
});

const mapDispatchToProps = (dispatch) => ({
  selectTimelineEventAction: (activeIndex, ownProps) => {
    if (ownProps.activeIndex !== activeIndex) {
      dispatch(selectTimelineEvent(activeIndex));
    }
  },
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  selectTimelineEvent: (newValue) => (
    dispatchProps.selectTimelineEventAction(
      newValue,
      stateProps,
    )
  ),
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Timeline);
