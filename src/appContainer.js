import App from './App';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  currentPlayer: state.currentPlayer
})

export default connect(
  mapStateToProps,
  null
)(App);
