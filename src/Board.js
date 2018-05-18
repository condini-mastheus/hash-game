import React, { Component } from 'react'
import 'bootstrap-css-only'

import Square from './Square'

class Board extends Component {
  constructor(props) {
    super(props)

    this.state = {
      board: [[null, null, null], [null, null, null], [null, null, null]]
    }

    this.handleClickInSquare = this.handleClickInSquare.bind(this)
  }

  handleClickInSquare(mark) {
   
  }

  renderSquaresRow(row, i) {
    return (
      <div key={i} className="board-row">
        {
          row.map((col, j) => {
            return <Square key={[i, j]} mark={col} onClick={() => this.handleClickInSquare() }/>
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
