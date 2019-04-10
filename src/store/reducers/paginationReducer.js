import {
  GET_AMOUNT_OF_PAGES,
  SET_CURRENT_PAGE,
  SET_CURRENT_LIMIT
} from "../actions/actionTypes";

const initialState = {
  page: 1,
  itemsPerPage: 10,
  amountOfPages: null,
  amountOfPaginationLinks: 5
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AMOUNT_OF_PAGES:
      return {
        ...state,
        amountOfPages: action.pagesAmount
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        page: action.page
      };
    case SET_CURRENT_LIMIT:
      return {
        ...state,
        itemsPerPage: action.limit
      };
    default:
      return state;
  }
};

export default reducer;
