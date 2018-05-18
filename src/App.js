import React, { Component } from 'react'
import 'bootstrap-css-only'
import './App.css'

import Board from './Board'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      turn: 'X',
    }

  }
  render() {
    return (
      <div className="full-container">
        <div className="hash">
          <Board />
        </div>
      </div>
    )
  }
}

export default App
