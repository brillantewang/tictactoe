import { addMark } from './actions/boardActions';
import Board from './board';

const mapDispatchToProps = dispatch => ({
  addMark: (row, col, mark) => dispatch(addMark(row, col, mark))
})

export default connect(
  null,
  mapDispatchToProps
)(Board);
