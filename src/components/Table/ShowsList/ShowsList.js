import React from "react";
import PropTypes from "prop-types";

import Show from "./Show/Show";

const showsList = props => (
  <React.Fragment>
    {props.shows.map((show, index) => (
      <Show key={index} number={index + 1} show={show} />
    ))}
  </React.Fragment>
);

showsList.propTypes = {
  shows: PropTypes.array.isRequired
};

export default showsList;
