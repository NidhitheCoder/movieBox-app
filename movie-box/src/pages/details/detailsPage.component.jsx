import React from "react";
import { connect } from "react-redux";
import "./detailsPage.styles.modules.scss";

class DetailsPage extends React.Component {
  render() {
    const movie = this.props.movie.currentMovie
      ? this.props.movie.currentMovie
      : "";
    console.log("movie", movie);
    let moviePoster = movie.Poster ? movie.Poster : "sample.jpg";
    moviePoster = moviePoster.replace("V1_SX300", "V1_SX2000");
    return (
      <div
        className="details-container"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,1)), url(${moviePoster})`,
          backgroundSize: "cover"
        }}
      >
        <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
        <h2 className="movie-title">{movie.Title}</h2>
        <h5>Director : {movie.Director}</h5>
        <div className="detail-box">
          <p>
            <h5>Actors : </h5> {movie.Actors}
          </p>
          <p>
            <h5> Awards : </h5> {movie.Awards}
          </p>
          <p>
            {" "}
            <h5>language : </h5> {movie.Language}
          </p>
          <p>
            {" "}
            <h5> Plot : </h5> {movie.Plot}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(mapStateToProps)(DetailsPage);
