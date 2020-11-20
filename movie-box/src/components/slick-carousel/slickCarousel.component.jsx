import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./slick-carousel.styles.modules.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SlickCarousel extends React.Component {
  render() {
    const { movieList, category } = this.props;
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
          <Link className="see-more">See more</Link>
        </div>
        <Slider {...settings}>
          {movieList.map(movie => (
            <div className="shadow-card">
              <div className="card">
                <h2 className="title">{movie.Title}</h2>
                <img src={movie.Poster} alt={movie.Title} className="poster" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default SlickCarousel;
