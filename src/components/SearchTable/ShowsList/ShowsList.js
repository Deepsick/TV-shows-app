import React from "react";
import Show from "./Show/Show";
import PropTypes from "prop-types";

const showsList = props => (
  <React.Fragment>
    {props.shows.map((show, index) => (
      <Show key={index} number={index + 1} show={show} />
    ))}
  </React.Fragment>
);

showsList.propTypes = {
  shows: PropTypes.array
};

export default showsList;
