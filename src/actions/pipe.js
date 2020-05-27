import { GENERATE_PIPE, REDUCE_PIPE, RUNNING } from './types';
import { MAX_HEIGHT, APP_WIDTH } from '../config/constants';

const MIN_HEIGHT = 40;
const SPACE_LENGTH = 200;

export const runPipe = () => (dispatch, getState) => {
  const { pipe } = getState();
  let payload = [];
  let needRemove = false;
  if (pipe.pipes) {
    payload = pipe.pipes.map((item) => {
      const x = item.x - 10;
      if (x <= -50) {
        needRemove = true;
      }
      return { ...item, x };
    });
  }

  dispatch({
    type: RUNNING,
    payload
  });
  if (needRemove) {
    dispatch(reducePipe());
  }
};

export const generatePipe = () => (dispatch, getState) => {
  const {
    pipe: { pipes }
  } = getState();
  const latestX =
    pipes && pipes.length > 0 ? pipes[pipes.length - 1].x : APP_WIDTH;
  const space = pipes && pipes.length > 0 ? SPACE_LENGTH : 0;
  const pipe = {
    topHeight:
      Math.floor(Math.random() * (MAX_HEIGHT - MIN_HEIGHT + 1)) + MIN_HEIGHT,
    x: latestX + space
  };
  dispatch({
    type: GENERATE_PIPE,
    payload: pipe
  });
};

export const reducePipe = () => (dispatch, getState) => {
  const { pipe } = getState();

  dispatch({
    type: REDUCE_PIPE,
    payload: pipe.pipes ? pipe.pipes.slice(1, pipe.pipes.length) : []
  });
};
