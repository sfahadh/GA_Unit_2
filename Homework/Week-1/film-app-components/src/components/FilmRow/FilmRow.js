import React, {Component} from "react";
import FilmPoster from "../FilmPoster/FilmPoster"

class FilmRow extends Component {
    render() {
        return (
            <div className="film-row">
                <FilmPoster img={this.props.img}/>
                <div className="film-summary">
                    <h1>{this.props.movie}</h1>
                    <p>{new Date(this.props.date).getFullYear()}</p>
                </div>
            </div>
        )
    }
}

export default FilmRow 