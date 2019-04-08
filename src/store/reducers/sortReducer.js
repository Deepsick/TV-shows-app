import {SET_SORTING_ORDER} from "../actions/actionTypes";

const initialState = {
  category: "trending",
  sortBy: "rating",
  orderByDesc: true //asc
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORTING_ORDER:
      return {
        ...state,
        orderByDesc: !state.orderByDesc
      }
    default:
      return state;
  }
};

export default reducer;
