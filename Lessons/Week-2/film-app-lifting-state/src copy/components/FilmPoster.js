import React from 'react';

function FilmPoster(props) {
  return <img src={`https://image.tmdb.org/t/p/w780/${props.film.poster_path}`} alt="" />

// class FilmPoster extends Component {
//   render() {
//     const posterUrl = 'https://image.tmdb.org/t/p/w780/' + this.props.film.poster_path

//     return (
//          <img src={posterUrl} alt="" />
//     )
//   }
}

export default FilmPoster