import {} from "../actions/actionTypes";

const initialState = {
  category: "trending",
  sortBy: "rating"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
