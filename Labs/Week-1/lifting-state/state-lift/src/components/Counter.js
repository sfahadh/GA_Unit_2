import React, { Component } from 'react';

export default class Counter extends Component {
  constructor()  {
    super();
    this.state = {
      ctr: 0
    }
  }

  inc() {
    this.setState(state => ({ctr: state.ctr + 1}));
    this.props.onChange();
  }

  dec() {
    this.setState(state => ({ctr: state.ctr - 1}));
    this.props.onChange();
  }

  render() {
    return (
      <div>
        <button onClick={() => this.dec()}>Decrement</button>
        {this.state.ctr}
        <button onClick={() => this.inc()}>Increment</button>
      </div>
    );
  }
}
