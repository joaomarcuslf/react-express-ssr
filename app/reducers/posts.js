import { REQUEST_TYPE, SUCCESS_TYPE, FAILURE_TYPE } from '../actions/posts';

const initialState = {
  loading: false,
  message: '',
  data: [],
};

function postsSuccess(state, action) {
  return {
    ...state,
    loading: false,
    message: '',
    data: action.payload,
  };
}

function postsError(state, action) {
  return {
    ...state,
    loading: false,
    message: action.payload,
    data: [],
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TYPE:
      return { ...state, loading: true };
    case SUCCESS_TYPE:
      return postsSuccess(state, action);
    case FAILURE_TYPE:
      return postsError(state, action);
    default:
      return state;
  }
}

export default reducer;
