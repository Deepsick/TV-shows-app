import {
  GET_AMOUNT_OF_PAGES,
  SET_CURRENT_PAGE,
  SET_CURRENT_LIMIT
} from "./actionTypes";

export const getAmountOfPages = pagesAmount => {
  return {
    type: GET_AMOUNT_OF_PAGES,
    pagesAmount: +pagesAmount
  };
};

export const setCurrentPage = page => {
  return {
    type: SET_CURRENT_PAGE,
    page: +page
  };
};

export const setCurrentLimit = limit => {
  return {
    type: SET_CURRENT_LIMIT,
    limit: +limit
  };
};
