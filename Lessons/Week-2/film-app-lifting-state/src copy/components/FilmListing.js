import React, { Component } from 'react';
import FilmRow from './FilmRow.js';

class FilmListing extends Component {
 
 state = {
  filter: 'all'
 }

  handleFilterClick(filter) {
    this.setState(prevState => ({
      filter
    }))
  }

  render() {
    console.log('this.state.filter is: ', this.state.filter);
    console.log("faves in filmListing", this.props.faves);

    const {films, faves, onFaveToggle, onDetailsClick} = this.props;

    const filterList = this.state.filter === "all" ? films : faves;

    const allFilms = filterList.map( (film) => {
      const isFave = faves.includes(film)

      return <FilmRow 
        film={film} 
        key={film.id} 
        isFave={isFave}
        onFaveToggle={onFaveToggle}
        onDetailsClick={onDetailsClick}
      /> 
    })

    return (
      <div className="film-list">
      <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div 
            className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`}
            onClick={() => this.handleFilterClick('all')}
          >
            ALL
            <span className="section-count">{films.length}</span>
          </div>
          <div 
            className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`}
            onClick={() => this.handleFilterClick('faves')}
          >
            FAVES
            <span className="section-count">{faves.length}</span>
          </div>
        </div>

        {allFilms}
      </div>
    )
  }
}

export default FilmListing
