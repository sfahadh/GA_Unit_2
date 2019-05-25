import React, { Component } from "react";
import Review from "../Review/Review"

class Movie extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.movie.title}</h1>
                <h2>{this.props.movie.rating}</h2>
                <h3>{this.props.movie.description}</h3>
                <Review/>
            </div>
        )
    }
}

export default Movie;