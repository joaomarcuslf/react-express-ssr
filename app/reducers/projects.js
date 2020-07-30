import { REQUEST_TYPE, SUCCESS_TYPE, FAILURE_TYPE } from '../actions/projects';

const initialState = {
  loading: false,
  message: '',
  data: [],
};

function projectsSuccess(state, action) {
  return {
    ...state,
    loading: false,
    message: '',
    data: action.payload,
  };
}

function projectsError(state, action) {
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
      return projectsSuccess(state, action);
    case FAILURE_TYPE:
      return projectsError(state, action);
    default:
      return state;
  }
}

export default reducer;
