import React from "react";
import SlickCarousel from "../../components/slick-carousel/slickCarousel.component";
import movieList from "../../assets/movielist";
import './home.styles.modules.scss';

const Homepage = () => (
  <div className="home-container">
    <SlickCarousel category="NOW PLAYING" movieList={movieList} />
    <SlickCarousel category="HORROR" movieList={movieList} />
    <SlickCarousel category="COMEDY" movieList={movieList} />
    <SlickCarousel category="ANIMATION" movieList={movieList} />
    <SlickCarousel category="TRILLER" movieList={movieList} />
  </div>
);

export default Homepage;
