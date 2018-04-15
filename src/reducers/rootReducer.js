import { combineReducers } from 'redux';
import boardReducer from './boardReducer';
import currentPlayerReducer from './currentPlayerReducer';
import gameWinnerReducer from './gameWinnerReducer';

const rootReducer = combineReducers({
  board: boardReducer,
  currentPlayer: currentPlayerReducer,
  gameWinner: gameWinnerReducer
})

export default rootReducer;
