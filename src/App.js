import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './boardContainer';

class App extends Component {
  constructor() {
    super();
  }

  isBoardFull() {
    return this.props.board.every(row => {
      return row.every(cell => cell !== null )
    })
  }

  isGameOver() {
    if (this.isBoardFull()) return true;
  }

  render() {
    return (
      <div className="app">
        <Board/>
        <span>
          {this.isGameOver() ? `${this.props.gameWinner} wins` : `Player ${this.props.currentPlayer}'s turn`}
        </span>
      </div>
    )
  }
}

export default App;
