import React, { Component } from 'react';
import FilmList from "./components/FilmList/Filmlist"
import FilmDetails from "./components/FilmDetails/FilmDetails"
import TMDB from "./TMDB"
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <FilmList films={TMDB.films}/>
        <FilmDetails films={TMDB.films}/>
      </div>
    );
  }
}

export default App;
