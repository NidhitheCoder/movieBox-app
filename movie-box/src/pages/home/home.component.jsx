import React from "react";
import SlickCarousel from "../../components/slick-carousel/slick-carousel.component";
import movieList from "../../assets/movielist";
import './home.styles.modules.scss';

const Homepage = (props) => {
  const {history} = props;
  return (<div className="home-container">
    <SlickCarousel category="NOW PLAYING" movieList={movieList} history ={history} />
    <SlickCarousel category="HORROR" movieList={movieList} history ={history} />
    <SlickCarousel category="COMEDY" movieList={movieList} history ={history} />
    <SlickCarousel category="ANIMATION" movieList={movieList} history ={history} />
    <SlickCarousel category="TRILLER" movieList={movieList} history ={history} />
  </div>)
};

export default Homepage;
