import React, {Component} from "react";

export default class Counter extends Component {

    
    render() {
        return (
            <div className="App">
                <button id={this.props.numID} onClick={this.props.increment} className="Add">+</button>
                <h1>{this.props.nums}</h1>
                <button id={this.props.numID} onClick={this.props.decrement} className="Subtract">-</button>
            </div>
        )
    }
}