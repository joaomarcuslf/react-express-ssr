import { SUCCESS_TYPE, FAILURE_TYPE } from '../actions/timeline';

const initialState = {
  activeIndex: '',
  data: [],
};

function timelineSuccess(state, action) {
  return {
    ...state,
    activeIndex: '',
    data: action.payload,
  };
}

function timelineError(state, action) {
  return {
    ...state,
    activeIndex: action.payload,
    data: [],
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_TYPE:
      return timelineSuccess(state, action);
    case FAILURE_TYPE:
      return timelineError(state, action);
    default:
      return state;
  }
}

export default reducer;
