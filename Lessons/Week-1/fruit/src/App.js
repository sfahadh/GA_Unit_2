import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FruitTable from "./FruitTable"

class App extends Component {
  render() {
    return (
      <div className="App">
        <FruitTable data = {data} />
      </div>
    );
  }
}
const data = [
  ['apple', 'banana', 'cherry'],
  ['grape', 'pear', 'orange'],
  ['plum', 'watermelon', 'canteloupe'],
]

export default App;
