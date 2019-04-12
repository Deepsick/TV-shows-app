import { GET_ERRORS } from "../actions/actionTypes";

const initialState = {
  errors: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        errors: action.errors
      };
    default:
      return state;
  }
};

export default reducer;
