import React from "react";
import './container.styles.modules.scss';
import MovieCard  from '../movieCard/movieCard.component';

const Container = props => {
  const {movieList,history} = props
  return (<div class="container">
  <div className="list-container">
  {movieList && movieList.map(movie => 
    <MovieCard movieItem={movie} history={history} />
  )}
  </div>
  </div>);
};

export default Container;
