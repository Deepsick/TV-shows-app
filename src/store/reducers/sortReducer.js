import { SET_SORTING_FILTERS } from "../actions/actionTypes";

const initialState = {
  category: "trending",
  ratings: "0-100",
  status: "",
  years: "",
  genres: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORTING_FILTERS:
      return {
        ...state,
        [action.name]: action.value
      };
    default:
      return state;
  }
};

export default reducer;
