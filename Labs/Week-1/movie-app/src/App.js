import React, { Component } from 'react';
import './App.css';
import Movie from "./components/Movie/Movie"
import MovieList from "./components/MovieList/MovieList"

class App extends Component {
  render() {
    return (
      <div>
        <MovieList/>
      </div>
    );
  }
}


export default App;
