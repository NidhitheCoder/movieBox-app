import React from "react";
import Container from "../../components/container/container.component";
import './bookmark.styles.modules.scss';

const Bookmark = () => (
  <div className="bookmark-container">
    <h2>inside Bookmark</h2>
    <Container pageName="bookmark" />
  </div>
);

export default Bookmark;
