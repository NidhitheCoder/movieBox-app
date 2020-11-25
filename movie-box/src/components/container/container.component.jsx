import React from "react";
import "./container.styles.modules.scss";
import MovieCard from "../movieCard/movieCard.component";
import EmptyItems from "../emptyItems/emptyItems.component";

const Container = props => {
  const { movieList, history } = props;
  return (
    <div className="container">
      <div className="list-container">
        {movieList.length ? (
          movieList &&
          movieList.map(movie => (
            <MovieCard movieItem={movie} history={history} />
          ))
        ) : (
          <EmptyItems message="No Bookmarked Items" />
        )}
      </div>
    </div>
  );
};

export default Container;
