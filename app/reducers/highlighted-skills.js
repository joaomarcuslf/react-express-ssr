import { SUCCESS_TYPE, FAILURE_TYPE } from '../actions/highlighted-skills';

const initialState = {
  message: '',
  data: [],
};

function highlightedProjectsSuccess(state, action) {
  return {
    ...state,
    message: '',
    data: action.payload,
  };
}

function highlightedProjectsError(state, action) {
  return {
    ...state,
    message: action.payload,
    data: [],
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_TYPE:
      return highlightedProjectsSuccess(state, action);
    case FAILURE_TYPE:
      return highlightedProjectsError(state, action);
    default:
      return state;
  }
}

export default reducer;
