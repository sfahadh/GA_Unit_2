import React, { Component } from 'react';
import FilmRow from "../FilmRow/FilmRow";

class FilmListing extends Component {

  handleFilterClick(filter){
    console.log(`setting filter to ${filter}`)
  }
  render() {
      const allFilms = this.props.films.map( (film, index) => (
          <FilmRow film={film} key={film.id} /> 
      ))

      return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
            <div className="film-list-filter">
                ALL
                <span className="section-count">{this.props.films.length}</span>
            </div>
            <div className="film-list-filter"
                onClick={() => this.handleFilterClick("faves")}>
                FAVES
                <span className="section-count">0</span>
            </div>
        </div>
        {allFilms}
      </div>
      )
  }
}

export default FilmListing
