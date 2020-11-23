import movieCollectionActionTypes from "./movieCollection.types";

const INITIAL_STATE = {
  currentMovie: ""
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case movieCollectionActionTypes.SET_CURRENT_MOVIE:
      return {
        ...state,
        currentMovie: action.payload
      };
    default:
      return { state };
  }
};

export default movieReducer;
