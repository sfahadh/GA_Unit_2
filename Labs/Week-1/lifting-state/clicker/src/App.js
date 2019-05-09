import React, { Component } from 'react';
import Click from './components/Click';
import Welcome from './components/Welcome';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>A Clicker</h1>
        <Welcome />
        <Click />
      </div>
    );
  }
}

export default App;
