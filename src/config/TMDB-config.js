import {apiKeyTMDB} from './keys';
 
// config for poster id
export const idPosterConfig = {
  apiKeyTMDB,
  baseUrl: "https://api.themoviedb.org/3/tv/"
};

// config for poster url
export const posterConfig = {
  baseUrl: "https://image.tmdb.org/t/p/",
  posterSize: "original"
};
