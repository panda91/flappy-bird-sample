import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Bird from './components/Bird';
import Pipe from './components/Pipe';
import Foreground from './components/Foreground';
import { fly } from './actions/bird';
import { startGame } from './actions/game';
import { START_GAME, GAME_OVER } from './actions/types';
import { APP_WIDTH, APP_HEIGHT } from './config/constants';

function App({ fly, startGame, gameStatus }) {
  useEffect(() => {
    document.addEventListener('keypress', (e) => {
      if (e.keyCode !== 32) {
        return;
      }

      if (gameStatus !== START_GAME) {
        startGame();
      }

      fly();
    });
  }, [fly, startGame, gameStatus]);

  return (
    <div
      style={{
        backgroundColor: 'pink',
        width: APP_WIDTH,
        height: APP_HEIGHT,
        position: 'relative'
      }}
    >
      <Bird />
      <Pipe />
      <Foreground />
    </div>
  );
}

const mapStateToProps = (state) => ({
  gameStatus: state.game.status
});

export default connect(mapStateToProps, { fly, startGame })(App);
