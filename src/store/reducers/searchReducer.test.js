import reducer from "./searchReducer";
import {
  SET_SEARCH_QUERY,
  SEARCH_SHOWS_START,
  SEARCH_SHOWS_FAILED,
  SEARCH_SHOWS_SUCCESS
} from "../actions/actionTypes";

describe("search reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      query: "",
      searchShows: null,
      searching: false
    });
  });

  it("should store search query if SET_SEARCH_QUERY action is triggered", () => {
    expect(
      reducer(
        {
          query: "",
          searchShows: null,
          searching: false
        },
        {
          type: SET_SEARCH_QUERY,
          query: "hello"
        }
      )
    ).toEqual({
      query: "hello",
      searchShows: null,
      searching: false
    });
  });

  it("should switch searching to false if SEARCH_SHOWS_FAILED action is triggered", () => {
    expect(
      reducer(
        {
          query: "",
          searchShows: null,
          searching: true
        },
        {
          type: SEARCH_SHOWS_FAILED
        }
      )
    ).toEqual({
      query: "",
      searchShows: null,
      searching: false
    });
  });

  it("should switch searching to true if SEARCH_SHOWS_START action is triggered", () => {
    expect(
      reducer(
        {
          query: "",
          searchShows: null,
          searching: false
        },
        {
          type: SEARCH_SHOWS_START
        }
      )
    ).toEqual({
      query: "",
      searchShows: null,
      searching: true
    });
  });

  it("should store results and switch searching to false if SEARCH_SHOWS_SUCCESS action is triggered", () => {
    expect(
      reducer(
        {
          query: "",
          searchShows: null,
          searching: true
        },
        {
          type: SEARCH_SHOWS_SUCCESS,
          result: [
            { title: "batman", year: 2009 },
            { title: "game", year: 2010 }
          ]
        }
      )
    ).toEqual({
      query: "",
      searchShows: [
        { title: "batman", year: 2009 },
        { title: "game", year: 2010 }
      ],
      searching: false
    });
  });
});
