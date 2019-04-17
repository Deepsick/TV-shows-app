import reducer from "./showReducer";
import {
  FETCH_SHOWS_START,
  FETCH_SHOWS_FAILED,
  FETCH_SHOWS_SUCCESS
} from "../actions/actionTypes";

describe("show reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      shows: null,
      loading: false
    });
  });

  it("should switch loading to true if FETCH_SHOWS_START action is triggered", () => {
    expect(
      reducer(
        {
          shows: null,
          loading: false
        },
        {
          type: FETCH_SHOWS_START
        }
      )
    ).toEqual({
      shows: null,
      loading: true
    });
  });

  it("should switch loading to false if FETCH_SHOWS_FAILED is triggered", () => {
    expect(
      reducer(
        {
          shows: null,
          loading: true
        },
        {
          type: FETCH_SHOWS_FAILED
        }
      )
    ).toEqual({
      shows: null,
      loading: false
    });
  });

  it("should store shows and switch loading to false if FETCH_SHOWS_SUCCESS is triggered", () => {
    expect(
      reducer(
        {
          shows: null,
          loading: true
        },
        {
          type: FETCH_SHOWS_SUCCESS,
          shows: [
            { title: "batman", year: 2009 },
            { title: "game", year: 2010 }
          ]
        }
      )
    ).toEqual({
      shows: [{ title: "batman", year: 2009 }, { title: "game", year: 2010 }],
      loading: false
    });
  });
});
