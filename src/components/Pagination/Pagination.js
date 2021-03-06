import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import PropTypes from "prop-types";

import PaginationItem from "./PaginationItem/PaginationItem";
import ItemsForm from "./ItemsForm/ItemsForm";

const pagination = props => {
  let {
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
  if (lastPage > amountOfPages) {
    lastPage = amountOfPages + 1;
  }

  let pagination = (
    <ul className="Pagination">
      <li className="Pagination__item  Pagination__item--form">
        <ItemsForm value={props.value} onChangeNadler={props.onChangeNadler} />
      </li>
      {amountOfPages > 1 ? (
        <React.Fragment>
          <li className="Pagination__item">
            <Link
              className={classnames(
                "Pagination__link  Pagination__link--nav  Pagination__link--start",
                {
                  "Pagination__link--disabled": currentPage === 1
                }
              )}
              to="/?page=1"
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
              if (lastPage > 0) {
                return (
                  <PaginationItem
                    key={lastPage}
                    page={lastPage}
                    currentPage={currentPage}
                    onClick={props.onClickHandler}
                  />
                );
              }
              return "";
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
              onClick={() => props.onClickHandler(currentPage + 1)}
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
        </React.Fragment>
      ) : (
        ""
      )}
    </ul>
  );

  return <React.Fragment>{pagination}</React.Fragment>;
};

pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  onChangeNadler: PropTypes.func.isRequired
};

export default pagination;
