import { FLY, FALL } from '../actions/types';
const initialState = {
  y: 250,
  deg: 0
};

export default (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case FLY:
      return { ...state, y: state.y - 50, deg: -30 };
    case FALL:
      return { ...state, y: state.y + 20, deg: 0 };
    default:
      return state;
  }
};
