import { CHANGE_PLAYER } from '../actions/boardActions'

const currentPlayerReducer = (state = 'X', action) => {
  switch (action.type) {
    case CHANGE_PLAYER:
      let newState = state === 'X' ? 'O' : 'X';
      return newState;
    default:
      return state;
  }
}

export default currentPlayerReducer;
