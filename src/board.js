import React, { Component } from 'react';
import './board.css';

class Board extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps);
  //   if (nextProps !== this.props) {
  //     if (this.threeInARow()) this.props.updateWinner(this.props.currentPlayer);
  //   }
  // }

  handleClick(row, col) {
    console.log(this.props.addMark(row, col, this.props.currentPlayer));

    this.props.changePlayer();
  }

  render() {
    return (
      <div className="board-container">
        <div className="row top-row">
          <div className="cell" onClick={() => this.handleClick(0, 0)}>{this.props.board[0][0]}</div>
          <div className="cell" onClick={() => this.handleClick(0, 1)}>{this.props.board[0][1]}</div>
          <div className="cell" onClick={() => this.handleClick(0, 2)}>{this.props.board[0][2]}</div>
        </div>
        <div className="row middle-row">
          <div className="cell" onClick={() => this.handleClick(1, 0)}>{this.props.board[1][0]}</div>
          <div className="cell" onClick={() => this.handleClick(1, 1)}>{this.props.board[1][1]}</div>
          <div className="cell" onClick={() => this.handleClick(1, 2)}>{this.props.board[1][2]}</div>
        </div>
        <div className="row bottom-row">
          <div className="cell" onClick={() => this.handleClick(2, 0)}>{this.props.board[2][0]}</div>
          <div className="cell" onClick={() => this.handleClick(2, 1)}>{this.props.board[2][1]}</div>
          <div className="cell" onClick={() => this.handleClick(2, 2)}>{this.props.board[2][2]}</div>
        </div>
      </div>
    )
  }
}

export default Board;
