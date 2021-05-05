import React from "react";
import "./bookmark.styles.modules.scss";
import { connect } from "react-redux";
import Container from "../../components/container/container.component";

const Bookmark = (props) => {
  const { bookmarkList, history, searchKeyWord } = props;

  let moviesList;
  if (searchKeyWord !== "") {
    moviesList = bookmarkList.filter(({ Title }) =>
      Title.toLowerCase().includes(searchKeyWord.toLowerCase())
    );
  } else {
    moviesList = bookmarkList;
  }

  return (
    <div className="bookmark-container">
      <Container movieList={moviesList} history={history} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  bookmarkList: state.bookmark.bookmark,
  searchKeyWord: state.searchKey.searchKeyWord,
});

export default connect(mapStateToProps)(Bookmark);
