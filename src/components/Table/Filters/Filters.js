import React from "react";

const filters = props => {
  let currentYear = new Date().getFullYear() + 1;
  return (
    <form className="Filters">
      <ul className="Filters__list">
        <li className="Filters__item">
          <label htmlFor="category">Category</label>
          <select
            className="Filters__select"
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
        <li className="Filters__item">
          <label htmlFor="ratings">Ratings</label>
          <select
            className="Filters__select"
            id="ratings"
            name="ratings"
            onChange={props.onFilterChangeHadnler}
            value={props.values.ratings}
          >
            <option value="75-100">7.5 - 10</option>
            <option value="50-74">5- 7.4</option>
            <option value="0-50">Less than 5</option>
          </select>
        </li>
        <li className="Filters__item">
          <label htmlFor="years">Year</label>
          <select
            className="Filters__select"
            id="years"
            name="years"
            onChange={props.onFilterChangeHadnler}
            value={props.values.years}
          >
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
        <li className="Filters__item">
          <label htmlFor="status">Status</label>
          <select
            className="Filters__select"
            id="status"
            name="status"
            onChange={props.onFilterChangeHadnler}
            value={props.values.status}
          >
            <option value="returning%20series">returning series</option>
            <option value="ended">ended</option>
          </select>
        </li>
      </ul>
    </form>
  );
};

export default filters;
