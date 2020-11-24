import bookmarkActionTypes from "./bookmarkCollection.types";
import {addToBookmark} from './bookmarkCollection.utils';

const INITIAL_STATE = {
  bookmark:[]
};

const bookmarkReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case bookmarkActionTypes.ADD_TO_BOOKMARK:
      return {
        ...state,
        bookmark:addToBookmark(state.bookmark,action.payload)
      };
    default:
      return  state;
  }
};

export default bookmarkReducer;
