import React, { Component } from 'react';

export default class Click extends Component {
  getMsg(name) {
    return `I got clicked again by ${name}!`;
  }

  log(name) {
    console.log(this.getMsg(name));
  }

  render() {
    return (
      <div>
        <button onClick={() => this.log('derick')}>Log the Click!</button>
      </div>
    );
  }
}
