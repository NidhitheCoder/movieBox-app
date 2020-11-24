import React from "react";
import "./bookmark.styles.modules.scss";
import { connect } from "react-redux";
import Container from "../../components/container/container.component";

const Bookmark = props => {
  const { bookmarkList, history } = props;
  return (
    <div className="bookmark-container">
      <Container movieList={bookmarkList} history={history} />
    </div>
  );
};

const mapStateToProps = state => ({
  bookmarkList: state.bookmark.bookmark
});

export default connect(mapStateToProps)(Bookmark);
