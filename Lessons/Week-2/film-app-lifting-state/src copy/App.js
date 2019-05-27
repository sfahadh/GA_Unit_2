import React, { Component } from 'react';
import TMDB from './TMDB.js';
import FilmListing from './components/FilmListing';
import FilmDetails from './components/FilmDetails';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    }

    this.handleFaveToggle = this.handleFaveToggle.bind(this);
    this.handleDetailsClick = this.handleDetailsClick.bind(this);
  }

  handleDetailsClick(film){
    console.log(`fetching details for ${film.title}`);
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);

        this.setState({
          current: data
        })
      })
  }

  handleFaveToggle(film) {
    console.log("calling handleFaveToggle");
    // const {faves} = this.state;

    // make copy of current this.state.faves array
    const newFaves = this.state.faves.slice();

    // find the index of the film in our this.state.faves array (if it exists)
    const filmIndex = this.state.faves.indexOf(film);

    if(filmIndex >= 0 ) {
      // it exists in the this.state.faves array, now remove it
      newFaves.splice(filmIndex, 1);
    } else {
      // it does not exist in the this.state.faves array, now add it
      newFaves.push(film);
    }
    // updateour state
    this.setState(prevState => ({
      faves: newFaves
    }))
    console.log(this.state);
  }

  render() {
    const {films, faves, current} = this.state;
    return (
      <div className="film-library">
        <FilmListing 
          films={films} 
          faves={faves} 
          onFaveToggle={this.handleFaveToggle}
          onDetailsClick={this.handleDetailsClick}
        />
        <FilmDetails film={current}/>
      </div>
    )
  }
}

export default App