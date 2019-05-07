import React, {Component} from "react";

class FilmPoster extends Component {
    render() {
        return (
            <div>
                <img src={"https://image.tmdb.org/t/p/w780" + this.props.img} alt="broken" />
                {console.log(this.props.img)}
            </div>
        )
    }
}

export default FilmPoster;