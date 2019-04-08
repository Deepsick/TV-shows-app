import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import PaginationItem from "./PaginationItem/PaginationItem";

const pagination = props => {
  const {
    amountOfPages,
    page: currentPage,
    amountOfPaginationLinks: linksAmount
  } = props.pagination;

  let lastPage;
  if (currentPage < 3) {
    lastPage = currentPage + linksAmount;
  }
  if (currentPage > amountOfPages - 2) {
    lastPage = amountOfPages + 1;
  }
  if (currentPage >= 3 && currentPage <= amountOfPages - 2) {
    lastPage = currentPage + 3;
  }
  return (
    <ul className="Pagination">
      <li className="Pagination__item">
        <Link
          className={classnames(
            "Pagination__link  Pagination__link--nav  Pagination__link--start",
            {
              "Pagination__link--disabled": currentPage === 1
            }
          )}
          to="/"
          onClick={() => props.onClickHandler(1)}
        >
          <span className="visually-hidden">To the beginning</span>
        </Link>
      </li>
      <li className="Pagination__item">
        <Link
          className={classnames(
            "Pagination__link  Pagination__link--nav  Pagination__link--previous",
            {
              "Pagination__link--disabled": currentPage === 1
            }
          )}
          to={"/?page=" + (currentPage - 1)}
          onClick={() => props.onClickHandler(currentPage - 1)}
        >
          <span className="visually-hidden"> Previous page</span>
        </Link>
      </li>
      {new Array(linksAmount)
        .fill(0)
        .map(number => {
          lastPage--;
          return (
            <PaginationItem
              key={lastPage}
              page={lastPage}
              currentPage={currentPage}
              onClick={props.onClickHandler}
            />
          );
        })
        .reverse()}
      <li className="Pagination__item">
        <Link
          className={classnames(
            "Pagination__link  Pagination__link--nav  Pagination__link--next",
            {
              "Pagination__link--disabled": currentPage === amountOfPages
            }
          )}
          to={"/?page=" + (currentPage + 1)}
          onClick={() =>props.onClickHandler(currentPage + 1)}
        >
          <span className="visually-hidden"> Next page</span>
        </Link>
      </li>
      <li className="Pagination__item">
        <Link
          className={classnames(
            "Pagination__link  Pagination__link--nav  Pagination__link--end",
            {
              "Pagination__link--disabled": currentPage === amountOfPages
            }
          )}
          to={"/?page=" + amountOfPages}
          onClick={() => props.onClickHandler(amountOfPages)}
        >
          <span className="visually-hidden">To the end</span>
        </Link>
      </li>
    </ul>
  );
};

export default pagination;
