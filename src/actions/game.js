import { START_GAME, GAME_OVER } from './types';
import { fall } from './bird';
import { runPipe, generatePipe } from './pipe';

export const startGame = () => (dispatch, getState) => {
  let payload = {};
  const { game } = getState();
  if (!game.gameloop1) {
    payload.gameloop1 = setInterval(() => {
      dispatch(fall());
      dispatch(runPipe());
    }, 300);
  }

  if (!game.gameloop2) {
    payload.gameloop2 = setInterval(() => {
      dispatch(generatePipe());
    }, 2000);
  }
  dispatch(generatePipe());

  dispatch({
    type: START_GAME,
    payload
  });
};

export const gameOver = () => (dispatch, getState) => {
  const { game } = getState();
  clearInterval(game.gameloop1);
  clearInterval(game.gameloop2);
  dispatch({
    type: GAME_OVER
  });
};
