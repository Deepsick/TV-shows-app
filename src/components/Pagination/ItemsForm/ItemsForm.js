import React from "react";
import PropTypes from "prop-types";

const itemsForm = props => (
  <form className="ItemsForm">
    <ul className="ItemsForm__list">
      <li className="select-group  ItemsForm__item">
        <label className="ItemsForm__label" htmlFor="limit">
          Shows per page
        </label>
        <select
          onChange={props.onChangeNadler}
          className="select-group__select  ItemsForm__select"
          id="limit"
          name="limit"
          value={props.value}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </li>
    </ul>
  </form>
);

itemsForm.propTypes = {
  value: PropTypes.number.isRequired,
  onChangeNadler: PropTypes.func.isRequired
};

export default itemsForm;
