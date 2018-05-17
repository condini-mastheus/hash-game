import React, { Component } from 'react'
import 'bootstrap-css-only'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="full-container">
        <div className="hash">
          <div className="board">
            <div className="board-row">
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </div>
            <div className="board-row">
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </div>
            <div className="board-row">
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
