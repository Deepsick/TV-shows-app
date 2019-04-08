import {
  SET_SEARCH_QUERY,
  SEARCH_SHOWS_START,
  SEARCH_SHOWS_FAILED,
  SEARCH_SHOWS_SUCCESS
} from "../actions/actionTypes";

const initialState = {
  query: "",
  searchShows: null,
  searching: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        query: action.query
      };
    case SEARCH_SHOWS_START:
      return {
        ...state,
        searching: true
      };
    case SEARCH_SHOWS_SUCCESS:
      return {
        ...state,
        searching: false,
        searchShows: action.result
      };
    case SEARCH_SHOWS_FAILED:
      return {
        ...state,
        searching: false
      };
    default:
      return state;
  }
};

export default reducer;
