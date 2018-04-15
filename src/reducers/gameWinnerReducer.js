import { UPDATE_WINNER } from '../actions/boardActions';

const gameWinnerReducer = (state = 'Nobody', action) => {
  switch (action.type) {
    case UPDATE_WINNER:
      return action.winner;
    default:
      return state;
  }
}

export default gameWinnerReducer;
