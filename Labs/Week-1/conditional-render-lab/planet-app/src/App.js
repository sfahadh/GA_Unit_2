import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentView: null, //This will be a String
    }
  }

  setCurrentView() {
    
  }

  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li><button type="submit" onClick={this.setCurrentView}>Welcome</button></li>
            <li><button type="submit" onClick={this.setCurrentView}>All Planets</button></li>
            <li><button type="submit" onClick={this.setCurrentView}>See a Random Planet</button></li>
            <li><button type="submit" onClick={this.setCurrentView}>Create a New Planet</button></li>
          </ul>
        </nav>
        <header className="App-header">
          <h1>This is my Planet App</h1>
        </header>
      </div>
    );
  }
}

export default App;
