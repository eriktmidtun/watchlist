import { stopSubmit } from "redux-form";

import {
    MOVIE_RESULTS_LOADED,
    MOVIE_RESULTS_LOADING,
    SERIES_RESULTS_LOADED,
    SERIES_RESULTS_LOADING,
    SEARCH_FAIL
} from "./types";

const keyword = '';
const ID = '';
const movieSearchURL = 'https://api.themoviedb.org/3/search/movie?api_key=c5733a52f13cedc8b47b7a21e8edd914&language=no-bm&query=' + keyword + '&page=1&include_adult=false';
const seriesSearchURL = 'https://api.themoviedb.org/3/search/tv?api_key=c5733a52f13cedc8b47b7a21e8edd914&language=no-bm&query=' + keyword + '&page=1&first_air_date_year=false';
const movieInfoURL = 'https://api.themoviedb.org/3/movie/' + ID + '?api_key=c5733a52f13cedc8b47b7a21e8edd914&language=no-bm';
const seriesInfoURL = 'https://api.themoviedb.org/3/tv/' + ID + '?api_key=c5733a52f13cedc8b47b7a21e8edd914&language=no-bm';

export const searchForMovies = (input) => async dispatch => {let formData = input};

keyword = formData;
dispatch({
    type: MOVIE_RESULTS_LOADING,
});

try {
    const res = await fetch(movieSearchURL);
    if (res.status !== 200) {
        throw res;
    };
    const data = await res.json();
    dispatch({
        type: MOVIE_RESULTS_LOADED,
        payload: data
    });
} catch (err) {
    const response = await err.json();
    dispatch({
        type: SEARCH_FAIL
    });
    dispatch(stopSubmit('something', response));
};

export const searchForSeries = (input) => async dispatch => {let formData = input};

keyword = formData;
dispatch({
    type: SERIES_RESULTS_LOADING
});

try {
    const res = await fetch(seriesSearchURL);
    if (res.status !== 200) {
        throw res;
    };
    const data = await res.json();
    dispatch({
        type: SERIES_RESULTS_LOADED,
        payload: data
    });
} catch (err) {
    const response = await err.json();
    dispatch({
        type: SEARCH_FAIL
    });
    dispatch(stopSubmit('something', response));
};

export const getMovieInfo = (movieID);

ID = movieID;
dispatch({
    type: MOVIE_RESULTS_LOADING
});

try {
    const res = await fetch(movieInfoURL);
    if (res.status !== 200) {
        throw res;
    };
    const data = await res.json();
    dispatch({
        type: SERIES_RESULTS_LOADED,
        payload: data
    });
} catch (err) {
    const response = await err.json();
    dispatch({
        type: SEARCH_FAIL
    });
};

export const getSeriesInfo = (seriesID);

ID = seriesID;
dispatch({
    type: SERIES_RESULTS_LOADING
})

try {
    const res = await fetch(seriesInfoURL);
    if (res.status !== 200) {
        throw res;
    };
    const data = await res.json();
    dispatch({
        type: SERIES_RESULTS_LOADED,
        payload: data
    });
} catch (err) {
    const response = await err.json();
    dispatch({
        type: SEARCH_FAIL
    });
};
