import bookmarkActionTypes from "./bookmarkCollection.types";
import {addToBookmark,removeFromBookmark} from './bookmarkCollection.utils';
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

      case bookmarkActionTypes.REMOVE_FROM_BOOKMARK:
        return {
          ...state,
          bookmark:removeFromBookmark(state.bookmark,action.payload)
        }
    default:
      return  state;
  }
};

export default bookmarkReducer;
