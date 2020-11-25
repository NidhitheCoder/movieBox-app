import bookmarkActionTypes from "./bookmarkCollection.types";

// Add movie to Bookmark
export const addMovieToBookark = movie => ({
  type: bookmarkActionTypes.ADD_TO_BOOKMARK,
  payload: movie
});

export const addMovieToBookmarkAsync = movie => {
  return dispatch => {
    dispatch(addMovieToBookark(movie));
  };
};

// Remove movie from bookmark
export const removeMovieFromBookmark = movieId => ({
  type:bookmarkActionTypes.REMOVE_FROM_BOOKMARK,
  payload:movieId
});

export const removeMovieFromBookmarkAsync = movieId => {
  return dispatch => {
    dispatch(removeMovieFromBookmark(movieId));
  }
};
