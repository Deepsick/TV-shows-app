import React from "react";
import PropTypes from "prop-types";

import Show from "./Show/Show";

const showsList = props => {
  let showList = (
    <React.Fragment>
      {props.shows.map((show, index) => (
        <Show key={index} number={index + 1} show={show} />
      ))}
    </React.Fragment>
  );

  if (props.shows.length === 0) {
    showList = <p style={{position: 'relative', left: '500px', width: '300px', paddingTop: '20px', fontSize: '16px'}}>No matches were found</p>;
  }

  return <React.Fragment>{showList}</React.Fragment>;
};

showsList.propTypes = {
  shows: PropTypes.array.isRequired
};

export default showsList;
