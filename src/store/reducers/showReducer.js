import {
  FETCH_SHOWS_INFO_FAILED,
  FETCH_SHOWS_SUCCESS,
  FETCH_SHOWS_INFO_START,
  FETCH_POSTER_SUCCESS
} from "../actions/actionTypes";


const initialState = {
  shows: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHOWS_INFO_START:
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
    case FETCH_SHOWS_INFO_FAILED:
      return {
        ...state,
        loading: false
      };
    case FETCH_POSTER_SUCCESS:
      return {
        ...state,
        shows: action.showsWithPoster,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
