import { ADD_MARK } from '../actions/boardActions';

const initialState = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MARK:
      return action.board;
    default:
      return state;
  }
}

export default boardReducer;
