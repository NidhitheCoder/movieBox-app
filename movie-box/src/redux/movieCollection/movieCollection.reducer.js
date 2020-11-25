import movieCollectionActionTypes from "./movieCollection.types";

const INITIAL_STATE = {
  currentMovie: "",
  currentCategoryList: []
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case movieCollectionActionTypes.SET_CURRENT_MOVIE:
      return {
        ...state,
        currentMovie: action.payload
      };
    case movieCollectionActionTypes.SET_CURRENT_CATEGORY_LIST:
      return {
        ...state,
        currentCategoryList: action.payload
      };
    default:
      return { state };
  }
};

export default movieReducer;
