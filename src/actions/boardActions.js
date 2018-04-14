export const ADD_MARK = 'ADD_MARK';

export const addMark = (row, col, mark) => ({
  type: ADD_MARK,
  row,
  col,
  mark
})
