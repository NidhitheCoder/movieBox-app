import React from "react";
import {connect} from 'react-redux'
import "./movieCard.styles.modules.scss";

import {setCurrentMovieAsync} from '../../redux/movieCollection/movieCollection.action';

const movieCard = props => {
  const { movieItem, history,setCurrentMovie } = props;
  const openMovieDetails = () => {
    setCurrentMovie(movieItem.imdbID);
    history.push("/details");
  };

  return (
    <div className="shadow-card">
      <div className="card" onClick={openMovieDetails}>
        <h5 className="title"> {movieItem.Title}</h5>
        <img src={movieItem.Poster} className="poster" alt={movieItem.Title} />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setCurrentMovie: (movieId) => dispatch(setCurrentMovieAsync(movieId))
});

export default connect(null,mapDispatchToProps)(movieCard);
