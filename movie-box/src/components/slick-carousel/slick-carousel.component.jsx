import React from "react";
import Slider from "react-slick";
import "./slick-carousel.styles.modules.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from "react-redux";

import { AddCurrentCategoryListAsync } from "../../redux/movieCollection/movieCollection.action";
import MovieCard from "../movieCard/movieCard.component";
import Container from "../container/container.component";
import EmptyItems from "../emptyItems/emptyItems.component";

class SlickCarousel extends React.Component {
  render() {
    const {
      movieList,
      category,
      history,
      bookmark,
      slideCount,
      AddCurrentCategoryList,
      searchKeyWord,
    } = this.props;
    const slideSHow = slideCount ? slideCount : 6;
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: slideSHow,
      slidesToScroll: slideSHow,
    };

    let moviesList;
    if (searchKeyWord !== "") {
      moviesList = movieList.filter(({ Title }) =>
        Title.toLowerCase().includes(searchKeyWord.toLowerCase())
      );
    } else {
      moviesList = movieList;
    }
    const openCategoryList = async () => {
      await AddCurrentCategoryList(movieList);
      history.push(`/category/${category}`);
    };

    return (
      <div>
        <div className="category-section">
          <h2>{category}</h2>
          {bookmark || !moviesList.length ? (
            ""
          ) : (
            <button className="see-more" onClick={openCategoryList}>
              See more
            </button>
          )}
        </div>
        {moviesList.length ? (
          <div className="movieList-container">
            {moviesList.length > 5 ? (
              <Slider {...settings}>
                {moviesList &&
                  moviesList.map((movie, index) => {
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
              <Container movieList={moviesList} history={history} />
            )}
          </div>
        ) : (
          <EmptyItems message="No Items found" />
        )}
      </div>
    );
  }
}

const dispatchStateToProps = (dispatch) => ({
  AddCurrentCategoryList: (movieList) =>
    dispatch(AddCurrentCategoryListAsync(movieList)),
});

const mapStateToProps = (state) => ({
  searchKeyWord: state.searchKey.searchKeyWord,
});

export default connect(mapStateToProps, dispatchStateToProps)(SlickCarousel);
