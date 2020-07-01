import { OPEN_MENU, CLOSE_MENU } from '../constants/menu';

const initialState = {
  isOpen: false,
};

function openMenu(state) {
  return {
    ...state,
    isOpen: true,
  };
}

function closeMenu(state) {
  return {
    ...state,
    isOpen: false,
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_MENU:
      return openMenu(state, action);
    case CLOSE_MENU:
      return closeMenu(state, action);
    default:
      return state;
  }
}

export default reducer;
