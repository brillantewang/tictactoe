import App from './App';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  currentPlayer: state.currentPlayer,
  board: state.board
})

export default connect(
  mapStateToProps,
  null
)(App);
