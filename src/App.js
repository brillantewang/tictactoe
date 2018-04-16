import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './boardContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      gameWinner: "Nobody"
    }
  }

  componentDidUpdate() {
    if (this.isThreeInARow() && this.state.gameWinner === 'Nobody') {
      this.updateWinner();
    }
  }

  isHorizontalWin() {
    console.log(this.props);
    return this.props.board.some(row => {
      return row.every(cell => cell !== null && cell === row[0])
    })
  }

  isVerticalWin() {
    let flippedBoard = this.transpose(this.props.board);
    return flippedBoard.some(col => {
      return col.every(cell => cell !== null && cell === col[0])
    })
  }

  transpose(matrix) {
    let transposed = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];

    matrix.forEach((row, row_idx) => {
      row.forEach((el, col_idx) => {
        transposed[col_idx][row_idx] = el;
      })
    })

    return transposed;
  }

  updateWinner() {
    this.setState({ gameWinner: this.props.currentPlayer === 'X' ? 'O' : 'X' });
  }

  isThreeInARow() {
    return this.isHorizontalWin() || this.isVerticalWin();
  }

  isBoardFull() {
    return this.props.board.every(row => {
      return row.every(cell => cell !== null )
    })
  }

  isGameOver() {
    return this.isBoardFull() || this.isThreeInARow();
  }

  render() {
    console.log(this.state);
    return (
      <div className="app">
        <Board/>
        <span>
          {this.isGameOver() ? `${this.state.gameWinner} wins` : `Player ${this.props.currentPlayer}'s turn`}
        </span>
      </div>
    )
  }
}

export default App;
