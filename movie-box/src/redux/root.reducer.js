import {combineReducers} from 'redux';
import AppReducer from './loginCollection/app.reducer';
import MovieReducer from './movieCollection/movieCollection.reducer';
import BookmarkReducer from './bookmarkCollection/bookmarkCollection.reducer';

const rootReducer = combineReducers({
    app:AppReducer,
    movie:MovieReducer,
    bookmark:BookmarkReducer
});

export default rootReducer;