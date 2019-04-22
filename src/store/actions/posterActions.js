import { GET_ERRORS } from "./actionTypes";
import { idPosterConfig, posterConfig } from "../../config/TMDB-config";

export const fetchPosters = (shows, successCallback) => {
  return dispatch => {
    // Create array of Promises to fetch posters
    const posterPromises = shows.map(show => {
      //create url with poster id
      let posterUrl = `${idPosterConfig.baseUrl}${
        show.ids.tmdb || 1
      }/images?api_key=${idPosterConfig.apiKeyTMDB}`;
      return fetch(posterUrl).then(response => response.json())
    });
    Promise.all(posterPromises)
      .then(resArray => {
        // Add poster property to show object
        const showsWithPosters = shows.map((show, index) => {
          if (resArray[index].posters && resArray[index].posters.length !== 0) {

            const filePath = resArray[index].posters[0].file_path;
            // Create url with poster
            const getPosterUrl = `${posterConfig.baseUrl}${
              posterConfig.posterSize
            }/${filePath}`;
            show.poster = getPosterUrl;
          }
          return show;
        });
        dispatch(successCallback(showsWithPosters));
      })
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          errors: `Can not get posters from TMDB api`
        });
      });
  };
};
