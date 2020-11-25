import { connect } from "react-redux";

import SlickCarousel from "../../components/slick-carousel/slick-carousel.component";
import movieList from "../../assets/movielist";
import "./dashboard.styles.modules.scss";

const DashBoard = props => {
  const { history, bookmarkList } = props;
  return (
    <div className="dashboard-container">
      <SlickCarousel
        category="WATCHLIST"
        movieList={bookmarkList}
        history={history}
        bookmark="false"
      />
      <SlickCarousel
        category="NOW PLAYING"
        movieList={movieList}
        history={history}
      />
      <SlickCarousel
        category="HORROR"
        movieList={movieList}
        history={history}
      />
      <SlickCarousel
        category="COMEDY"
        movieList={movieList}
        history={history}
      />
      <SlickCarousel
        category="ANIMATION"
        movieList={movieList}
        history={history}
      />
      <SlickCarousel
        category="TRILLER"
        movieList={movieList}
        history={history}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  bookmarkList: state.bookmark.bookmark
});

export default connect(mapStateToProps)(DashBoard);
