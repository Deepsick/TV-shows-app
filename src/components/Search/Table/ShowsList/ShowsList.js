import React from "react";
import Show from "./Show/Show";

const showsList = props => {
  return (
    <React.Fragment>
      {props.shows.map((show, index) => (
        <Show key={index} number={index + 1} show={show} />
      ))}
    </React.Fragment>
  );
};

export default showsList;
