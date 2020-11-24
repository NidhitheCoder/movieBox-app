import {combineReducers} from 'redux';
import AppReducer from './app.reducer';
import MovieReducer from './movieCollection/movieCollection.reducer';

const rootReducer = combineReducers({
    app:AppReducer,
    movie:MovieReducer 
});

export default rootReducer;