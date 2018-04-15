import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './boardContainer';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        <Board/>
        Player {this.props.currentPlayer}'s turn
      </div>
    )
  }
}

export default App;
