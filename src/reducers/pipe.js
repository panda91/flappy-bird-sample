import { GENERATE_PIPE, RUNNING, REDUCE_PIPE } from '../actions/types';

const initialState = {
  pipes: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case RUNNING:
      return { ...state, pipes: payload };
    case GENERATE_PIPE:
      return { ...state, pipes: [...state.pipes, payload] };
    case REDUCE_PIPE:
      return { ...state, pipes: payload };
    default:
      return state;
  }
};
