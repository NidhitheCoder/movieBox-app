import React from "react";
import axios from "axios";
import "./movieCard.styles.modules.scss";

const movieCard = (props) => {
    const {movieItem} = props;
  const openMovieDetails = () => {
    console.log("this is onclick of movie card button");
    axios.get("");
  };

  return (
    <div className="shadow-card" key={movieItem.imdbID}>
      <div className="card" onClick={openMovieDetails}>
        <h5 className="title"> {movieItem.Title}</h5>
        <img src={movieItem.Poster} className="poster" alt={movieItem.Title} />
      </div>
    </div>
  );
};

export default movieCard;
