import reducer from "./sortReducer";
import { SET_SORTING_FILTERS } from "../actions/actionTypes";

describe("sort reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      category: "trending",
      ratings: "75-100",
      status: "returning series",
      years: 2019
    });
  });

  it("should store new filter's value if SET_SORTING_FILTERS action is triggered", () => {
    expect(
      reducer(
        {
          category: "trending",
          ratings: "75-100",
          status: "returning series",
          years: 2019
        },
        {
          type: SET_SORTING_FILTERS,
          name: "category",
          value: "popular"
        }
      )
    ).toEqual({
      category: "popular",
      ratings: "75-100",
      status: "returning series",
      years: 2019
    });
  });
});
