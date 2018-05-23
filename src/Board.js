import React, { Component } from 'react'
import 'bootstrap-css-only'

import Square from './Square'

class Board extends Component {
  constructor(props) {
    super(props)

    this.state = {
      board: [[null, null, null], [null, null, null], [null, null, null]],
      turn: 'X'
    }

    this.handleClickInSquare = this.handleClickInSquare.bind(this)
    this.changeTurn = this.changeTurn.bind(this)
    this.checkIfPlayerWon = this.checkIfPlayerWon.bind(this)
  }

  changeTurn() {
    const { turn } = this.state

    switch (turn) {
      case 'X':
        this.setState({ turn: 'O' });
        break;
      case 'O':
        this.setState({ turn: 'X' });
        break;
      default:
        console.error('Turn not allowed')
        break;
    }
  }

  checkIfPlayerWon(board) {
    let cX = 0;
    let cO = 0;

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === 'X')
          cX++

        if (board[i][j] === 'O')
          cO++
      }
    }

    if (cX === 3)
      console.log('X ganhou')
    if (cO === 3)
      console.log('O ganhou')
  }

  handleClickInSquare(a, b) {
    const { turn, board } = this.state

    let newBoard = [[null, null, null], [null, null, null], [null, null, null]]

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        newBoard[i][j] = board[i][j]

        if(i === a & j === b) {
          newBoard[i][j] = turn
        }
      }
    }

    this.setState({ board: newBoard });
    this.checkIfPlayerWon(newBoard);
    this.changeTurn();
  }

  renderSquaresRow(row, i) {
    const { board } = this.state
    return (
      <div key={i} className="board-row">
        {
          row.map((col, j) => {
            return <Square key={[i, j]} mark={board[i][j]} a={i} b={j} handleClickInSquare={this.handleClickInSquare} />
            // return <Square key={[i, j]} mark={'X'} position={[i, j]} handleClickInSquare={this.handleClickInSquare} />
          })
        }
      </div>
    )
  }

  render() {
    const { board } = this.state
    return (
      <div className="board">
        {
          board.map((row, index) => {
            return this.renderSquaresRow(row, index)
          })
        }
      </div>
    )
  }
}

export default Board
