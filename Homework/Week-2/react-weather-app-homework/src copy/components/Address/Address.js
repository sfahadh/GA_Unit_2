import React, {Component} from "react";

export default class Address extends Component {
    render() {
        return (
            <div>
                <input placeholder="Enter Zip Code" />
                <h4>{this.props.location}</h4>
                <h1>{this.props.temperature}</h1>
                <h2>{this.props.weather}</h2>
                <div id="minMax">
                    <div className="temp min">
                        <h3>Min</h3>
                        <h2>{this.props.tempMin}</h2>
                    </div>
                    <div className="temp max">
                        <h3>Max</h3>
                        <h2>{this.props.tempMax}</h2>
                    </div>
                </div>
                <p>*Everything is in Kelvin, I can easily do the conversion, but I'll do it later once I finish the functionality</p>
            </div>
        )
    }
}