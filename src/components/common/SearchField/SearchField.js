import React from "react";
import PropTypes from "prop-types";

const searchField = props => (
  <form className="SearchField" onSubmit={evt => evt.preventDefault()}>
    <input
      autoFocus
      className="SearchField__input"
      type="search"
      id="search-input"
      placeholder="Search show"
      value={props.value}
      onChange={props.onChangeHandler}
    />
    <label htmlFor="search-input">
      <span className="visually-hidden">Search</span>
    </label>
  </form>
);

searchField.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired
};

export default searchField;
