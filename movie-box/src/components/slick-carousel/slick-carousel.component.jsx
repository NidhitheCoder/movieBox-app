import React from "react";
import Slider from "react-slick";
import "./slick-carousel.styles.modules.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from "react-redux";

import { AddCurrentCategoryListAsync } from "../../redux/movieCollection/movieCollection.action";
import MovieCard from "../movieCard/movieCard.component";
import Container from "../container/container.component";

class SlickCarousel extends React.Component {
  render() {
    const {
      movieList,
      category,
      history,
      bookmark,
      slideCount,
      AddCurrentCategoryList
    } = this.props;
    const slideSHow = slideCount ? slideCount : 6;
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: slideSHow,
      slidesToScroll: slideSHow
    };

    const openCategoryList = async () => {
      await AddCurrentCategoryList(movieList);
      history.push(`/category/${category}`);
    };

    return (
      <div>
        {movieList.length ? (
          <div className="movieList-container">
            <div className="category-section">
              <h2>{category}</h2>
              {bookmark ? (
                ""
              ) : (
                <button className="see-more" onClick={openCategoryList}>
                  See more
                </button>
              )}
            </div>
            {movieList.length > 5 ? (
              <Slider {...settings}>
                {movieList &&
                  movieList.map((movie, index) => {
                    if (index < 10) {
                      return (
                        <MovieCard
                          movieItem={movie}
                          history={history}
                          key={movie.imdbID}
                        />
                      );
                    }
                    return "";
                  })}
              </Slider>
            ) : (
              <Container movieList={movieList} history={history} />
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const dispatchStateToProps = dispatch => ({
  AddCurrentCategoryList: movieList =>
    dispatch(AddCurrentCategoryListAsync(movieList))
});

export default connect(null, dispatchStateToProps)(SlickCarousel);
