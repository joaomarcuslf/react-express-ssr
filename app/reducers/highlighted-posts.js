import { SUCCESS_TYPE, FAILURE_TYPE } from '../actions/highlighted-posts';

const initialState = {
  message: '',
  data: [],
};

function highlightedPostsSuccess(state, action) {
  return {
    ...state,
    message: '',
    data: action.payload,
  };
}

function highlightedPostsError(state, action) {
  return {
    ...state,
    message: action.payload,
    data: [],
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_TYPE:
      return highlightedPostsSuccess(state, action);
    case FAILURE_TYPE:
      return highlightedPostsError(state, action);
    default:
      return state;
  }
}

export default reducer;
