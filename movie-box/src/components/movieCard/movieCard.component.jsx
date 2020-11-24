import React from "react";
import { connect } from "react-redux";
import "./movieCard.styles.modules.scss";

import { setCurrentMovieAsync } from "../../redux/movieCollection/movieCollection.action";
import { addMovieToBookmarkAsync } from "../../redux/bookmarkCollection/bookmarkCollection.action";

const movieCard = props => {
  const {
    movieItem,
    history,
    setCurrentMovie,
    setBookmarkMovie,
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
        <h5 className="title"> {movieItem.Title}</h5>
        <img src={movieItem.Poster} className="poster" alt={movieItem.Title} />
        <button
          onClick={e => {
            setBookmarkMovie(movieItem);
            e.stopPropagation();
          }}
          className={isBookmarked ? "bookmarkBtn bookmarked" : "bookmarkBtn"}
        >
          {isBookmarked ? "Bookmarked" : "Bookmark"}
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setCurrentMovie: movieId => dispatch(setCurrentMovieAsync(movieId)),
  setBookmarkMovie: movie => dispatch(addMovieToBookmarkAsync(movie))
});

const mapStateToProps = state => ({
  bookmarkList: state.bookmark.bookmark
});

export default connect(mapStateToProps, mapDispatchToProps)(movieCard);
