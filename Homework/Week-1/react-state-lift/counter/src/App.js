import React, { Component } from 'react';
import './App.css';
import Counter from "./components/Counter/Counter"

class App extends Component {
  constructor() {
    super()

    this.state = {
      num1: 0,
      num2: 0,
      num3: 0
    }
  }

  increase = (evt) => {
    switch (evt.target.id) {
      case "1":
        this.setState({num1: this.state.num1 += 1});
        break;
      case "2":
        this.setState({num2: this.state.num2 += 1}); 
        break;
      case "3":
        this.setState({num3: this.state.num3 += 1});
        break;
      default:
        console.log("not sure what to put")
    }
  }

  decrease = (evt) => {
    switch (evt.target.id) {
      case "1":
        this.setState({num1: this.state.num1 -= 1});
        break;
      case "2":
        this.setState({num2: this.state.num2 -= 1}); 
        break;
      case "3":
        this.setState({num3: this.state.num3 -= 1});
        break;
      default:
        console.log("not sure what to put")
    }
  }

  increaseAll = () => {
    this.setState({num1: this.state.num1 += 1})
    this.setState({num2: this.state.num2 += 1})
    this.setState({num3: this.state.num3 += 1})
  }

  decreaseAll = () => {
    this.setState({num1: this.state.num1 -= 1})
    this.setState({num2: this.state.num2 -= 1})
    this.setState({num3: this.state.num3 -= 1})
  }

  render() {
    return (
      <div className="App">
        <Counter 
        numID={"1"}
        nums={this.state.num1} 
        increment={this.increase} 
        decrement={this.decrease}
        />
        <Counter 
        numID={"2"}
        nums={this.state.num2} 
        increment={this.increase} 
        decrement={this.decrease}
        />
        <Counter 
        numID={"3"}
        nums={this.state.num3} 
        increment={this.increase} 
        decrement={this.decrease}
        />
        
        <button onClick={this.increaseAll}>+ all</button>
        <button onClick={this.decreaseAll}>- all</button>
      </div>
    );
  }
}

export default App;
