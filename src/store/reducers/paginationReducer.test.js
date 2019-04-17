import reducer from "./paginationReducer";
import {
  GET_AMOUNT_OF_PAGES,
  SET_CURRENT_PAGE,
  SET_CURRENT_LIMIT
} from "../actions/actionTypes";

describe("pagination reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      page: 1,
      itemsPerPage: 10,
      amountOfPages: null,
      amountOfPaginationLinks: 5
    });
  });

  it("should store amount of pages if GET_AMOUNT_OF_PAGES action is triggered", () => {
    expect(
      reducer(
        {
          page: 1,
          itemsPerPage: 10,
          amountOfPages: null,
          amountOfPaginationLinks: 5
        },
        {
          type: GET_AMOUNT_OF_PAGES,
          pagesAmount: 15
        }
      )
    ).toEqual({
      page: 1,
      itemsPerPage: 10,
      amountOfPages: 15,
      amountOfPaginationLinks: 5
    });
  });

  it("should store current page if SET_CURRENT_PAGE is triggered", () => {
    expect(
      reducer(
        {
          page: 1,
          itemsPerPage: 10,
          amountOfPages: null,
          amountOfPaginationLinks: 5
        },
        {
          type: SET_CURRENT_PAGE,
          page: 2
        }
      )
    ).toEqual({
      page: 2,
      itemsPerPage: 10,
      amountOfPages: null,
      amountOfPaginationLinks: 5
    });
  });

  it("should store current limit if SET_CURRENT_LIMIT is triggered", () => {
    expect(
      reducer(
        {
          page: 1,
          itemsPerPage: 10,
          amountOfPages: null,
          amountOfPaginationLinks: 5
        },
        {
          type: SET_CURRENT_LIMIT,
          limit: 20
        }
      )
    ).toEqual({
      page: 1,
      itemsPerPage: 20,
      amountOfPages: null,
      amountOfPaginationLinks: 5
    });
  });
});
