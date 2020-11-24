import bookmarkActionTypes from "./bookmarkCollection.types";

export const addMovieToBookark = movie => ({
  type: bookmarkActionTypes.ADD_TO_BOOKMARK,
  payload: movie
});

export const addMovieToBookmarkAsync = movie => {
  return dispatch => {
    dispatch(addMovieToBookark(movie));
  };
};
