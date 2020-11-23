import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./slick-carousel.styles.modules.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MovieCard from "../movieCard/movieCard.component";

class SlickCarousel extends React.Component {
  render() {
    const { movieList, category,history } = this.props;
        const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4
    };

    return (
      <div className="movieList-container">
        <div className="category-section">
          <h2>{category}</h2>
          <Link className="see-more" to="/">
            See more
          </Link>
        </div>
        <Slider {...settings}>
          {movieList.map(movie => (
            <MovieCard movieItem={movie} history = {history}  key={movie.imdbID}/>
          ))}
        </Slider>
      </div>
    );
  }
}

export default SlickCarousel;
