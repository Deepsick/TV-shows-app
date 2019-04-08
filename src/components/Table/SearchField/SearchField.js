import React from "react";

const searchField = props => {
  return (
    <form onSubmit={props.onSubmitHandler}>
      <input
        type='search'
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
