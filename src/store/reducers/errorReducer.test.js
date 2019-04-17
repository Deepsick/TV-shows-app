import reducer from "./errorReducer";
import { GET_ERRORS } from "../actions/actionTypes";

describe("error reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      errors: null
    });
  });

  it("should store errors if something went wrong", () => {
    expect(
      reducer(
        {
          errors: null
        },
        {
          type: GET_ERRORS,
          errors: { traktError: "can not fetch shows" }
        }
      )
    ).toEqual({
      errors: { traktError: "can not fetch shows" }
    });
  });
});
