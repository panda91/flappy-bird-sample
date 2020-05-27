import { FLY, FALL } from './types';

export const fly = () => (dispatch) => {
  dispatch({ type: FLY });
};

export const fall = () => (dispatch) => {
  dispatch({ type: FALL });
};
