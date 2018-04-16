import { combineReducers } from 'redux';
import boardReducer from './boardReducer';
import currentPlayerReducer from './currentPlayerReducer';

const rootReducer = combineReducers({
  board: boardReducer,
  currentPlayer: currentPlayerReducer
})

export default rootReducer;
