import React, { Component } from 'react';
import Counter from './components/Counter';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      timesCalled: 0
    }
  }

  handleChange() {
    this.setState(state => {
      return { timesCalled: state.timesCalled + 1 };
    });
  }

  render() {
    return (
      <div className="App">
        <h1>lifting state example</h1>
        <Counter onChange={() => this.handleChange()}/>
        <div>
          <h3>another counter</h3>
          <Counter onChange={() => this.handleChange()}/>
        </div>
      </div>
    );
  }
}

export default App;
