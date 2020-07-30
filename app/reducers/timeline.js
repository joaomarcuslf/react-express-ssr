import { SUCCESS_TYPE, FAILURE_TYPE, SELECT_TIMELINE_EVENT } from '../actions/timeline';

const initialState = {
  activeIndex: '',
  data: [],
};

function selectTimelineEvent(state, action) {
  return {
    ...state,
    activeIndex: action.payload,
  };
}

function timelineSuccess(state, action) {
  return {
    ...state,
    activeIndex: null,
    data: action.payload,
  };
}

function timelineError(state) {
  return {
    ...state,
    activeIndex: null,
    data: [],
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_TIMELINE_EVENT:
      return selectTimelineEvent(state, action);
    case SUCCESS_TYPE:
      return timelineSuccess(state, action);
    case FAILURE_TYPE:
      return timelineError(state, action);
    default:
      return state;
  }
}

export default reducer;
