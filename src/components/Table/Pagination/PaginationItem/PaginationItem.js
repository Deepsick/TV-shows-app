import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

const paginationItem = props => {
  return (
    <li className="Pagination__item">
      <Link
        className={classnames("Pagination__link", {
          "Pagination__link--active": props.page === props.currentPage
        })}
        to={props.page !== 1 ? "/?page=" + props.page : "/"}
        onClick={() => props.onClick(props.page)}
      >
        {props.page}
      </Link>
    </li>
  );
};

export default paginationItem;
