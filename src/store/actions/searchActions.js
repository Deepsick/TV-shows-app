import {
  SET_SEARCH_QUERY,
  SEARCH_SHOWS_START,
  SEARCH_SHOWS_FAILED,
  SEARCH_SHOWS_SUCCESS,
  GET_ERRORS
} from "./actionTypes";

import {idPosterConfig, posterConfig} from '../../config/TMDB-config';


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

const fetchPosters = shows => {
  return dispatch => {
    // Create array of Promises to fetch posters
    const posterPromises = shows.map(show => {
      //create url with poster id
      let posterUrl = `${idPosterConfig.baseUrl}${
        show.ids.tmdb
      }/images?api_key=${idPosterConfig.apiKeyTMDB}`;
      return fetch(posterUrl).then(response => response.json());
    });
    Promise.all(posterPromises)
      .then(resArray => {
        // Add poster property to show object
        const showsWithPosters = shows.map((show, index) => {
          const filePath = resArray[index].posters[0].file_path;
          // Create url with poster
          const getPosterUrl = `${posterConfig.baseUrl}${
            posterConfig.posterSize
          }/${filePath}`;
          show.poster = getPosterUrl;
          return show;
        });
        dispatch(searchShowsSuccess(showsWithPosters));
      })
      .catch(err => {
        dispatch(searchShowsFailed());
        dispatch({
          type: GET_ERRORS,
          errors: `Can not get posters from TMDB api`
        });
      });
  };
};

export const searchShows = query => dispatch => {
  dispatch(searchShowsStart);
  fetch(`${searchUrl}${query}`, traktConfig)
    .then(res => res.json())
    .then(showArray => {
      showArray = showArray.map(show => show.show);
      dispatch(searchShowsSuccess(showArray));
      dispatch(fetchPosters(showArray));
    })
    .catch(err => {
      dispatch(searchShowsFailed());
      dispatch({
        type: GET_ERRORS,
        errors: "Can not find anything"
      });
    });
};
