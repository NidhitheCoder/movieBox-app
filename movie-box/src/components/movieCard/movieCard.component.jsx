import React from "react";
import { connect } from "react-redux";
import "./movieCard.styles.modules.scss";

import { setCurrentMovieAsync } from "../../redux/movieCollection/movieCollection.action";
import { addMovieToBookmarkAsync,removeMovieFromBookmarkAsync} from "../../redux/bookmarkCollection/bookmarkCollection.action";

const movieCard = props => {
  const {
    movieItem,
    history,
    setCurrentMovie,
    setBookmarkMovie,
    removeBookmarkMovie,
    bookmarkList
  } = props;
  const isBookmarked = bookmarkList.find(
    movie => movie.imdbID === movieItem.imdbID
  );
  const openMovieDetails = async () => {
    await setCurrentMovie(movieItem.imdbID);
    history.push("/details");
  };
  return (
    <div className="shadow-card">
      <div className="card" onClick={openMovieDetails}>
        <img src={movieItem.Poster} className="poster" alt={movieItem.Title} />
        <div className="glass-shadow">
          <h5 className="title"> {movieItem.Title}</h5>
          <p className="details">{movieItem.Runtime},{movieItem.Genre},{movieItem.Year}</p>
          <p>{movieItem.Language}</p>
          <p class="plot">Plot : {movieItem.Plot}</p>
          <button
            onClick={e => {
              isBookmarked ? removeBookmarkMovie(movieItem.imdbID) :
              setBookmarkMovie(movieItem);
              e.stopPropagation();
            }}
            className={isBookmarked ? "bookmarkBtn bookmarked" : "bookmarkBtn"}
          >
            {isBookmarked ? "-" : "+"}
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setCurrentMovie: movieId => dispatch(setCurrentMovieAsync(movieId)),
  setBookmarkMovie: movie => dispatch(addMovieToBookmarkAsync(movie)),
  removeBookmarkMovie: movieId => dispatch(removeMovieFromBookmarkAsync(movieId))
});

const mapStateToProps = state => ({
  bookmarkList: state.bookmark.bookmark
});

export default connect(mapStateToProps, mapDispatchToProps)(movieCard);
