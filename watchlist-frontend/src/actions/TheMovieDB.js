import {
  MOVIE_RESULTS_LOADED,
  MOVIE_RESULTS_LOADING,
  SERIES_RESULTS_LOADED,
  SERIES_RESULTS_LOADING,
  SEARCH_FAIL,
  MOVIE_LOADED,
  MOVIE_LOADING,
  SERIES_LOADED,
  SERIES_LOADING,
  MEDIA_DETAILS_FAIL,
  LIST_DETAILS_LOADING,
  HW_LIST_DETAILS_LOADED,
  LIST_DETAILS_FAIL,
  WTW_LIST_DETAILS_LOADED
} from "./types";

import { APIkey } from "./constants";

/* Searches for movie titles matching the input. */
export const searchForMovies = input => async dispatch => {
  console.log(APIkey);
  dispatch({
    type: MOVIE_RESULTS_LOADING
  });
  const movieSearchURL =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    APIkey +
    "&language=no-bm&query=" +
    input +
    "&page=1&include_adult=false";
  try {
    const res = await fetch(movieSearchURL);
    if (res.status !== 200) {
      throw res;
    }
    const data = await res.json();
    dispatch({
      type: MOVIE_RESULTS_LOADED,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: SEARCH_FAIL
    });
  }
};

/* Searches for series titles matching the input. */
export const searchForSeries = input => async dispatch => {
  dispatch({
    type: SERIES_RESULTS_LOADING
  });
  const seriesSearchURL =
    "https://api.themoviedb.org/3/search/tv?api_key=" +
    APIkey +
    "&language=no-bm&query=" +
    input +
    "&page=1&first_air_date_year=false";
  try {
    const res = await fetch(seriesSearchURL);
    if (res.status !== 200) {
      throw res;
    }
    const data = await res.json();
    dispatch({
      type: SERIES_RESULTS_LOADED,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: SEARCH_FAIL
    });
  }
};

/* Requests more information about a movie. */
export const getMovieInfo = ID => async dispatch => {
  dispatch({
    type: MOVIE_LOADING
  });
  const movieInfoURL =
    "https://api.themoviedb.org/3/movie/" +
    ID +
    "?api_key=" +
    APIkey +
    "&language=no-bm";
  try {
    const res = await fetch(movieInfoURL);
    if (res.status !== 200) {
      throw res;
    }
    const data = await res.json();
    dispatch({
      type: MOVIE_LOADED,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: MEDIA_DETAILS_FAIL
    });
  }
};

/* Requests more information about a series. */
export const getSeriesInfo = ID => async dispatch => {
  dispatch({
    type: SERIES_LOADING
  });
  const seriesInfoURL =
    "https://api.themoviedb.org/3/tv/" +
    ID +
    "?api_key=" +
    APIkey +
    "&language=no-bm";
  try {
    const res = await fetch(seriesInfoURL);
    if (res.status !== 200) {
      throw res;
    }
    const data = await res.json();
    dispatch({
      type: SERIES_LOADED,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: MEDIA_DETAILS_FAIL
    });
  }
};

/* Takes a list of tupples (ID, mediaType) and requests information about each film/series. */
export const getListToDetails = (mediums, list) => async dispatch => {
  dispatch({
    type: LIST_DETAILS_LOADING
  });
  try {
    let url = "";
    const details = [];
    for (const medium of mediums) {
      if (medium.mediumType === "serier") {
        url =
          "https://api.themoviedb.org/3/tv/" +
          medium.mdbID +
          "?api_key=" +
          APIkey +
          "&language=no-bm";
      } else {
        url =
          "https://api.themoviedb.org/3/movie/" +
          medium.mdbID +
          "?api_key=" +
          APIkey +
          "&language=no-bm";
      }
      let res = await fetch(url);
      if (res.status !== 200) {
        throw res;
      }
      const data = await res.json();
      data["mediumType"] = medium.mediumType;
      details.push(data);
    }
    if (list === "wantToWatch") {
      dispatch({
        type: WTW_LIST_DETAILS_LOADED,
        payload: details
      });
    } else {
      dispatch({
        type: HW_LIST_DETAILS_LOADED,
        payload: details
      });
    }
  } catch (err) {
    dispatch({
      type: LIST_DETAILS_FAIL
    });
  }
};
