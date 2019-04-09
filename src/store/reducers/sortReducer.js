import { SET_SORTING_ORDER, SET_SORTING_FILTERS } from "../actions/actionTypes";

const initialState = {
  category: "trending",
  ratings: "75-100",
  status: "returning%20series",
  years: 2019
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORTING_ORDER:
      return {
        ...state,
        orderByDesc: !state.orderByDesc
      };
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
