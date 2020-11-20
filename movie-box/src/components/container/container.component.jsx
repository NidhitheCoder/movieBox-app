import React from "react";
import './container.styles.modules.scss';

const Container = props => {
  return (<div class="container">
  {props.pageName} Container
  </div>);
};

export default Container;
