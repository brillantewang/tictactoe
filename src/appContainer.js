import App from './App';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  currentPlayer: state.currentPlayer,
  board: state.board,
  gameWinner: state.gameWinner
})

export default connect(
  mapStateToProps,
  null
)(App);
