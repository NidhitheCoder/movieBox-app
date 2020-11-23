import movieCollectionActionTypes from './movieCollection.types';
import axios from 'axios';


export const currentMovieAddedToStore =(movie) =>({
    type: movieCollectionActionTypes.SET_CURRENT_MOVIE,
    payload: movie
});

export const setCurrentMovieAsync = (movieId) => {
    return  dispatch => {
        axios.get(`http://www.omdbapi.com/?i=${movieId}&apikey=2e43f9cf`)
        .then(data => {
            dispatch(currentMovieAddedToStore(data.data))
        });
    }
};