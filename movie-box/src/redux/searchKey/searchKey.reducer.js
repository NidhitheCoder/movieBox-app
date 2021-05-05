import  searchKeyActionTypes from './searchKey.types';

const INITIAL_STATE = {
  searchKeyWord:""
};

const searchKeyReducer = (state = INITIAL_STATE, action) => {
  switch ( action.type) {
    case searchKeyActionTypes.SET_SEARCH_KEY:
      return{
        ...state,
        searchKeyWord: action.payload
      };
    default :
    return state;
  }
}

export default searchKeyReducer;