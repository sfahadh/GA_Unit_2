import React, {Component} from "react";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="nav">
                <button className="btn btn-default">Previous Recipe</button>
                <button className="btn btn-default">Next Recipe</button>
            </nav>
        )
    }
}