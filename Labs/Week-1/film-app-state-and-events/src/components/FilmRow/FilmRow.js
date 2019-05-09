import React, { Component } from 'react';
import FilmPoster from '../FilmPoster/FilmPoster';
import Fave from "../Fave/Fave"

class FilmRow extends Component {
  handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film}`)
  }

  render() {
    return (
      <div 
        className="film-row"
        onClick={() => this.handleDetailsClick("film")}>
        <FilmPoster film={this.props.film} />
        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{new Date(this.props.film.release_date).getFullYear()}</p>
        </div>
        <Fave/>
      </div>
    )
  }
}

export default FilmRow