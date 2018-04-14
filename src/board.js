import React, { Component } from 'react';
import './board.css';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ],
      currentPlayer: 'X'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(row, col) {
    this.props.addMark(row, col, this.state.currentPlayer);
    // this.props.changePlayer();
    //
    // let newBoard = this.state.board;
    // newBoard[row][col] = this.state.currentPlayer;
    //
    // this.setState({
    //   board: newBoard,
    //   currentPlayer: this.state.currentPlayer === 'X' ? 'O' : 'X'
    // })
  }

  render() {
    console.log(this.state);
    return (
      <div className="board-container">
        <div className="row top-row">
          <div className="cell" onClick={() => this.handleClick(0, 0)}>{this.state.board[0][0]}</div>
          <div className="cell" onClick={() => this.handleClick(0, 1)}>{this.state.board[0][1]}</div>
          <div className="cell" onClick={() => this.handleClick(0, 2)}>{this.state.board[0][2]}</div>
        </div>
        <div className="row middle-row">
          <div className="cell" onClick={() => this.handleClick(1, 0)}>{this.state.board[1][0]}</div>
          <div className="cell" onClick={() => this.handleClick(1, 1)}>{this.state.board[1][1]}</div>
          <div className="cell" onClick={() => this.handleClick(1, 2)}>{this.state.board[1][2]}</div>
        </div>
        <div className="row bottom-row">
          <div className="cell" onClick={() => this.handleClick(2, 0)}>{this.state.board[2][0]}</div>
          <div className="cell" onClick={() => this.handleClick(2, 1)}>{this.state.board[2][1]}</div>
          <div className="cell" onClick={() => this.handleClick(2, 2)}>{this.state.board[2][2]}</div>
        </div>
      </div>
    )
  }
}

export default Board;
