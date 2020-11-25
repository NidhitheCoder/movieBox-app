import movieCollectionActionTypes from "./movieCollection.types";
import axios from "axios";

//  Set current Movie to store
export const currentMovieAddedToStore = movie => ({
  type: movieCollectionActionTypes.SET_CURRENT_MOVIE,
  payload: movie
});

export const setCurrentMovieAsync = movieId => {
  return async dispatch => {
    await axios
      .get(`http://www.omdbapi.com/?i=${movieId}&apikey=2e43f9cf`)
      .then(async data => {
        dispatch(await currentMovieAddedToStore(data.data));
      });
  };
};

// Set current category movies to store

export const currentCategoryListToStore = movieList => ({
  type: movieCollectionActionTypes.SET_CURRENT_CATEGORY_LIST,
  payload: movieList
});

export const AddCurrentCategoryListAsync = movieList => {
  return async dispatch => {
    dispatch(await currentCategoryListToStore(movieList));
  };
};
