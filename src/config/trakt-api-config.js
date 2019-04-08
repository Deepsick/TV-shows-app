const headers = new Headers({
  "Content-Type": "application/json",
  "trakt-api-key":
    "a158772b33a2b5a08074d228e73c04e1e0967525fea9db31504a8df87902623a",
  "trakt-api-version": "2"
});

export const traktConfig = {
  method: "GET",
  headers
};

export const baseUrl = 'https://api.trakt.tv/shows/';
export const searchUrl = 'https://api.trakt.tv/search/show?query=';
