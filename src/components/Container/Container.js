import React from "react";
import PropTypes from "prop-types";

const container = props => <div className="Container">{props.children}</div>;

container.propTypes = {
  children: PropTypes.array.isRequired
};

export default container;
