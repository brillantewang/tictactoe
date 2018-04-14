import { ADD_MARK } from '../actions/boardActions';

const initialState = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

const boardReducer = (state = initialState, action) => {
  let newBoard = [
    state[0].slice(),
    state[1].slice(),
    state[2].slice()
  ]
  switch (action.type) {
    case ADD_MARK:
      newBoard[action.row][action.col] = action.mark;
      return newBoard;
    default:
      return state;
  }
}

export default boardReducer;
