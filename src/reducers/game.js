import { START_GAME, GAME_OVER } from '../actions/types';

const initialState = {
  status: '',
  gameloop1: null,
  gameloop2: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case START_GAME:
      return { ...state, status: START_GAME, ...payload };
    case GAME_OVER:
      return { ...state, status: GAME_OVER };
    default:
      return state;
  }
};
