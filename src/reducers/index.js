import { combineReducers } from 'redux';
import bird from './bird';
import game from './game';
import pipe from './pipe';

export default combineReducers({ bird, game, pipe });
