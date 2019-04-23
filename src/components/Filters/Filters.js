import React from "react";
import PropTypes from "prop-types";

const filters = props => {
  let currentYear = new Date().getFullYear() + 1;
  return (
    <form className="Filters">
      <ul className="Filters__list">
        <li className="select-group">
          <label htmlFor="category">Category</label>
          <select
            className="select-group__select"
            id="category"
            name="category"
            onChange={props.onFilterChangeHadnler}
            value={props.values.category}
          >
            <option value="trending">trending</option>
            <option value="popular">popular</option>
            <option value="anticipated">anticipated</option>
          </select>
        </li>
        <li className="select-group">
          <label htmlFor="ratings">Ratings</label>
          <select
            className="select-group__select"
            id="ratings"
            name="ratings"
            onChange={props.onFilterChangeHadnler}
            value={props.values.ratings}
          >
            <option value="0-100">all</option>
            <option value="75-100">7.5 - 10</option>
            <option value="50-74">5- 7.4</option>
            <option value="0-50">less than 5</option>
          </select>
        </li>
        <li className="select-group">
          <label htmlFor="years">Year</label>
          <select
            className="select-group__select"
            id="years"
            name="years"
            onChange={props.onFilterChangeHadnler}
            value={props.values.years}
          >
            <option value="">all</option>
            {new Array(10).fill(0).map((item, index) => {
              item = --currentYear;
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </li>
        <li className="select-group">
          <label htmlFor="status">Status</label>
          <select
            className="select-group__select"
            id="status"
            name="status"
            onChange={props.onFilterChangeHadnler}
            value={props.values.status}
          >
            <option value="">all</option>
            <option value="returning series">returning series</option>
            <option value="ended">ended</option>
          </select>
        </li>
        <li className="select-group">
          <label htmlFor="genres">Genres</label>
          <select
            className="select-group__select"
            id="genres"
            name="genres"
            onChange={props.onFilterChangeHadnler}
            value={props.values.genres}
          >
            <option value="">all</option>
            <option value="action">action</option>
            <option value="adventure">adventure</option>
            <option value="animation">animation</option>
            <option value="anime">anime</option>
            <option value="crime">crime</option>
            <option value="comedy">comedy</option>
            <option value="documentary">documentary</option>
            <option value="drama">drama</option>
            <option value="family">family</option>
            <option value="fantasy">fantasy</option>
            <option value="history">history</option>
            <option value="horror">horror</option>
            <option value="musical">musical</option>
            <option value="mystery">mystery</option>
            <option value="romance">romance</option>
            <option value="sports">sports</option>
            <option value="thriller">thriller</option>
            <option value="war">war</option>
          </select>
        </li>
      </ul>
    </form>
  );
};

filters.propTypes = {
  values: PropTypes.object.isRequired,
  onFilterChangeHadnler: PropTypes.func.isRequired
};

export default filters;
