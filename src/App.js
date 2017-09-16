import React, { Component } from 'react'
import './App.css'
import Circles from './components/Circles'
import Generating from './components/Generating'
import Sorting from './components/Sorting'
import Squares from './components/Squares'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Circles />
        <Generating />
        <Sorting />
        <Squares />
      </div>
    )
  }
}

export default App
