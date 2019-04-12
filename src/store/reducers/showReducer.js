import {
  FETCH_SHOWS_START,
  FETCH_SHOWS_FAILED,
  FETCH_SHOWS_SUCCESS
} from "../actions/actionTypes";

const initialState = {
  shows: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHOWS_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_SHOWS_SUCCESS:
      return {
        ...state,
        loading: false,
        shows: action.shows
      };
    case FETCH_SHOWS_FAILED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
