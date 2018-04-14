import { addMark, changePlayer } from './actions/boardActions';
import Board from './board';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  board: state.board,
  currentPlayer: state.currentPlayer
})

const mapDispatchToProps = dispatch => ({
  addMark: (row, col, mark) => dispatch(addMark(row, col, mark)),
  changePlayer: () => dispatch(changePlayer)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
