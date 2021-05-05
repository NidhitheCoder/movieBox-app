import  searchKeyActionTypes from './searchKey.types';

export const setSearchKeyWord = ( keyword ) => ({
  type: searchKeyActionTypes.SET_SEARCH_KEY,
  payload: keyword
});