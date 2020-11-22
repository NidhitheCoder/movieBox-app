import React from "react";
import axios from "axios";
import "./movieCard.styles.modules.scss";

const movieCard = (props) => {
    const {movieItem} = props;
  const openMovieDetails = () => {
    axios.get(`http://www.omdbapi.com/?i=${movieItem.imdbID}&apikey=2e43f9cf`)
    .then(data => {
        console.log(data)
    });
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

export default movieCard;
