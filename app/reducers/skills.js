import { REQUEST_TYPE, SUCCESS_TYPE, FAILURE_TYPE } from '../actions/skills';

const initialState = {
  loading: false,
  message: '',
  data: [],
};

function skillsSuccess(state, action) {
  return {
    ...state,
    loading: false,
    message: '',
    data: action.payload,
  };
}

function skillsError(state, action) {
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
      return skillsSuccess(state, action);
    case FAILURE_TYPE:
      return skillsError(state, action);
    default:
      return state;
  }
}

export default reducer;
