import React, {Component} from "react";
import FilmRow from "../FilmRow/FilmRow"

class FilmList extends Component {
    render() {
        let allFilms = this.props.films.map(film => <FilmRow 
            key={film.id} 
            movie={film.title} 
            date={film.release_date} 
            img={film.poster_path}
        />);

        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {allFilms}
            </div>
        )
    }
}

export default FilmList;