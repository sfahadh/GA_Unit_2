import React, { Component } from 'react';

class Fave extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFave: false
    }
  }

   handleClick = (e) => {
      e.stopPropagation();
      console.log('this is click')
      this.setState(prevState => console.log({isFave: !prevState.isFave}));
   }

   render() {
      const isfavorite = this.state.isFave ? "remove_from_queue" : "add_to_queue";
      this.state.isFave={isfavorite}
      return (
        <div 
        onClick={this.handleClick}
        className="film-row-fave add_to_queue">
            <p className="material-icons">add_to_queue</p>
        </div>
      )
   }
}

export default Fave;