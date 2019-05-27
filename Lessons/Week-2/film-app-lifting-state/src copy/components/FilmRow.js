import React from 'react';
import FilmPoster from './FilmPoster.js';
import Fave from './Fave.js';

function FilmRow(props) {
  const {film, isFave, onFaveToggle, onDetailsClick} = props
    return (
        <div 
          className="film-row"
          onClick={() => onDetailsClick(film)}
        >
         <FilmPoster film={film} />
      
        <div className="film-summary">
          <h1>{film.title}</h1>
          <p>{new Date(film.release_date).getFullYear()}</p>
        </div>

        <Fave 
          isFave={isFave} 
          onFaveToggle={() => onFaveToggle(film)}
        />
      </div>
    )
}

// class FilmRow extends Component {

//   render() {
//     const {film, isFave, onFaveToggle, onDetailsClick} = this.props
//     return (
//         <div 
//           className="film-row"
//           onClick={() => onDetailsClick(film)}
//         >
//          <FilmPoster film={film} />
      
//         <div className="film-summary">
//           <h1>{film.title}</h1>
//           <p>{new Date(film.release_date).getFullYear()}</p>
//         </div>

//         <Fave 
//           isFave={isFave} 
//           onFaveToggle={() => onFaveToggle(film)}
//         />
//       </div>
//     )
//   }
// }

export default FilmRow