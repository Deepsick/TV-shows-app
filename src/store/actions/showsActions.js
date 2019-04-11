import { traktConfig, baseUrl } from "../../config/trakt-api-config";
import { idPosterConfig, posterConfig } from "../../config/TMDB-config";
import {
  FETCH_SHOWS_INFO_START,
  FETCH_SHOWS_SUCCESS,
  FETCH_SHOWS_INFO_FAILED,
  FETCH_POSTER_SUCCESS,
  SORT_SHOWS,
  GET_ERRORS
} from "./actionTypes";

import { getAmountOfPages } from "./paginationActions";

export const sortShows = (shows) => {
  return {
    type: SORT_SHOWS,
    shows: shows
  }
}

const fetchShowsInfoStart = () => {
  return {
    type: FETCH_SHOWS_INFO_START
  };
};

const fetchShowsSuccess = shows => {
  return {
    type: FETCH_SHOWS_SUCCESS,
    shows
  };
};


const fetchShowsInfoFailed = () => {
  return {
    type: FETCH_SHOWS_INFO_FAILED
  };
};

const fetchPosterSuccess = showsWithPoster => {
  return {
    type: FETCH_POSTER_SUCCESS,
    showsWithPoster
  };
};

export const fetchPosters = shows => {
  return dispatch => {
    // set loading to true
    dispatch(fetchShowsInfoStart());
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
        dispatch(fetchPosterSuccess(showsWithPosters));
      })
      .catch(err => {
        dispatch(fetchShowsInfoFailed());
        dispatch({
          type: GET_ERRORS,
          errors: `Can not get posters from TMDB api`
        });
      });
  };
};

export const fetchShows = (page, limit, showType, filters) => {
  return dispatch => {
    // Changes loading property to True and shows Spinner during loading process
    dispatch(fetchShowsInfoStart());

    // Retrieves tv shows with pagination and filters. Also gets shows id.
    // const paginationUrl = `https://api.trakt.tv/shows/${showType}?page=${page}&limit=${limit}`;
    let filtersString = Object.keys(filters).map(filter => `${filter}=${filters[filter]}`).join('&');
    if (filtersString.length > 0) {
      filtersString = '&' + filtersString;
    }
    const sortUrl = `${baseUrl}${showType}?extended=full&page=${page}&limit=${limit}${filtersString}`; //&ratings=70-100
    fetch(sortUrl, traktConfig)
      .then(res => {
        for (let header of res.headers.entries()) {
          if (header[0] === 'x-pagination-page-count') {
            const amountOfPages = header[1];
            dispatch(getAmountOfPages(amountOfPages));
          }
        }
        return res.json();
      })
      .then(res => {
        if (showType === 'trending' || showType === 'anticipated') {
          res = Array.from(res).map(show => show.show);
        }
        dispatch(fetchShowsSuccess(res));
        dispatch(fetchPosters(res));
        // const showId = res[0].show.ids.tmdb;
        // this.getPoster(showId);
      })
      .catch(err => {
        dispatch(fetchShowsInfoFailed());
        dispatch({
          type: GET_ERRORS,
          errors: 'Can not get shows from track api'
        });
      });
  };
};
