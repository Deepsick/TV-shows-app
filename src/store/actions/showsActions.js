import { traktConfig, baseUrl } from "../../config/trakt-api-config";
import {
  FETCH_SHOWS_START,
  FETCH_SHOWS_SUCCESS,
  FETCH_SHOWS_FAILED,
  GET_ERRORS
} from "./actionTypes";

import { fetchPosters } from "./posterActions";

import { getAmountOfPages } from "./paginationActions";

const fetchShowsStart = () => {
  return {
    type: FETCH_SHOWS_START
  };
};

const fetchShowsSuccess = shows => {
  return {
    type: FETCH_SHOWS_SUCCESS,
    shows
  };
};

const fetchShowsFailed = () => {
  return {
    type: FETCH_SHOWS_FAILED
  };
};

export const fetchShows = (page, limit, showType, filters) => {
  return dispatch => {
    // Changes loading property to True and shows Spinner during loading process
    dispatch(fetchShowsStart());

    // Retrieves tv shows with pagination and filters. Also gets shows id.
    let filtersString = Object.keys(filters)
      .map(filter => `${filter}=${filters[filter]}`)
      .join("&");
    if (filtersString.length > 0) {
      filtersString = "&" + filtersString;
    }
    const sortUrl = `${baseUrl}${showType}?extended=full&page=${page}&limit=${limit}${filtersString}`; 
    fetch(sortUrl, traktConfig)
      .then(res => {
        for (let header of res.headers.entries()) {
          if (header[0] === "x-pagination-page-count") {
            const amountOfPages = header[1];
            dispatch(getAmountOfPages(amountOfPages));
          }
        }
        return res.json();
      })
      .then(res => {
        if (showType === "trending" || showType === "anticipated") {
          res = Array.from(res).map(show => show.show);
        }
        dispatch(fetchPosters(res, fetchShowsSuccess));
      })
      .catch(err => {
        dispatch(fetchShowsFailed());
        dispatch({
          type: GET_ERRORS,
          errors: "Can not get shows from track api"
        });
      });
  };
};
