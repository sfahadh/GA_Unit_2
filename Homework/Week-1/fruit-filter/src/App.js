import React, { Component } from 'react';
import fruits from './fruits.js';
import './App.css';
import FruitContainer from './components/FruitContainer/FruitContainer.js';

class App extends Component {
  render() {
    return (
      <FruitContainer fruits={fruits} />
    );
  }
}

export default App;
