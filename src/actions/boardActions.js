export const ADD_MARK = 'ADD_MARK';
export const CHANGE_PLAYER = 'CHANGE_PLAYER';
export const UPDATE_WINNER = 'UPDATE_WINNER';

export const addMark = (row, col, mark) => ({
  type: ADD_MARK,
  row,
  col,
  mark
})

export const changePlayer = {
  type: CHANGE_PLAYER
}

export const updateWinner = winner => ({
  type: UPDATE_WINNER,
  winner
})
