import {traktApiKey} from './keys';

const headers = new Headers({
  "Content-Type": "application/json",
  "trakt-api-key": traktApiKey,
  "trakt-api-version": "2"
});

export const traktConfig = {
  method: "GET",
  headers
};

export const baseUrl = 'https://api.trakt.tv/shows/';
export const searchUrl = 'https://api.trakt.tv/search/show?query=';
