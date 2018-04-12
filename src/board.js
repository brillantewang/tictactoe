import React, { Component } from 'react';
import './board.css';

class Board extends Component {
  render() {
    return (
      <div class="board-container">
        <div class="row top-row">
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
        </div>
        <div class="row middle-row">
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
        </div>
        <div class="row bottom-row">
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
        </div>
      </div>
    )
  }
}

export default Board;
