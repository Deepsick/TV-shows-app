import {
  SET_SEARCH_QUERY,
  SEARCH_SHOWS_START,
  SEARCH_SHOWS_FAILED,
  SEARCH_SHOWS_SUCCESS,
  GET_ERRORS
} from "./actionTypes";

import { fetchPosters } from "./posterActions";

import { traktConfig, searchUrl } from "../../config/trakt-api-config";

export const setSearchQuery = query => {
  return {
    type: SET_SEARCH_QUERY,
    query
  };
};

export const searchShowsStart = () => {
  return {
    type: SEARCH_SHOWS_START
  };
};

const searchShowsSuccess = result => {
  return {
    type: SEARCH_SHOWS_SUCCESS,
    result
  };
};

const searchShowsFailed = () => {
  return {
    type: SEARCH_SHOWS_FAILED
  };
};

export const searchShows = query => dispatch => {
  dispatch(searchShowsStart);
  fetch(`${searchUrl}${query}`, traktConfig)
    .then(res => res.json())
    .then(showArray => {
      showArray = showArray.map(show => show.show);
      dispatch(fetchPosters(showArray, searchShowsSuccess));
    })
    .catch(err => {
      dispatch(searchShowsFailed());
      dispatch({
        type: GET_ERRORS,
        errors: "Can not find anything"
      });
    });
};
