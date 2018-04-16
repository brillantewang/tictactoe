import React, { Component } from 'react';
import './board.css';

class Board extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let cell = event.target;

    if (cell.classList.contains("disabled")) return;
    cell.classList.add("disabled");

    let row = parseInt(cell.dataset.row, 10);
    let col = parseInt(cell.dataset.col, 10);

    this.props.addMark(row, col, this.props.currentPlayer);
    this.props.changePlayer();
  }

  render() {
    console.log(this.props);
    return (
      <div className="board-container">
        <div className="row top-row">
          <div className="cell" data-row="0" data-col="0" onClick={this.handleClick}>{this.props.board[0][0]}</div>
          <div className="cell" data-row="0" data-col="1" onClick={this.handleClick}>{this.props.board[0][1]}</div>
          <div className="cell" data-row="0" data-col="2" onClick={this.handleClick}>{this.props.board[0][2]}</div>
        </div>
        <div className="row middle-row">
          <div className="cell" data-row="1" data-col="0" onClick={this.handleClick}>{this.props.board[1][0]}</div>
          <div className="cell" data-row="1" data-col="1" onClick={this.handleClick}>{this.props.board[1][1]}</div>
          <div className="cell" data-row="1" data-col="2" onClick={this.handleClick}>{this.props.board[1][2]}</div>
        </div>
        <div className="row bottom-row">
          <div className="cell" data-row="2" data-col="0" onClick={this.handleClick}>{this.props.board[2][0]}</div>
          <div className="cell" data-row="2" data-col="1" onClick={this.handleClick}>{this.props.board[2][1]}</div>
          <div className="cell" data-row="2" data-col="2" onClick={this.handleClick}>{this.props.board[2][2]}</div>
        </div>
      </div>
    )
  }
}

export default Board;
