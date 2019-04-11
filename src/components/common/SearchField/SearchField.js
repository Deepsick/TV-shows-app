import React from "react";

const searchField = props => {
  return (
    <form className="SearchField" onSubmit={props.onSubmitHandler}>
      <input
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
};

export default searchField;
