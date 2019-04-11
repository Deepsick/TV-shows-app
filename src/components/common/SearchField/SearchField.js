import React from "react";

const searchField = props => {
  return (
    <form className='Search-field' onSubmit={props.onSubmitHandler}>
      <input className='Search-field__input'
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
