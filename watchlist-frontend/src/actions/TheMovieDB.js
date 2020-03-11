import {
    MOVIE_RESULTS_LOADED,
    MOVIE_RESULTS_LOADING,
    SERIES_RESULTS_LOADED,
    SERIES_RESULTS_LOADING,
    SEARCH_FAIL
} from "./types";

let keyword = 'Knerten';
let ID = '';
//const movieSearchURL = 'https://api.themoviedb.org/3/search/movie?api_key=c5733a52f13cedc8b47b7a21e8edd914&language=no-bm&query=' + keyword + '&page=1&include_adult=false';
const seriesSearchURL = 'https://api.themoviedb.org/3/search/tv?api_key=c5733a52f13cedc8b47b7a21e8edd914&language=no-bm&query=' + keyword + '&page=1&first_air_date_year=false';
const movieInfoURL = 'https://api.themoviedb.org/3/movie/' + ID + '?api_key=c5733a52f13cedc8b47b7a21e8edd914&language=no-bm';
const seriesInfoURL = 'https://api.themoviedb.org/3/tv/' + ID + '?api_key=c5733a52f13cedc8b47b7a21e8edd914&language=no-bm';

export const searchForMovies = (input) => async dispatch => {
    dispatch({
        type: MOVIE_RESULTS_LOADING,
    });
    const movieSearchURL = 'https://api.themoviedb.org/3/search/movie?api_key=c5733a52f13cedc8b47b7a21e8edd914&language=no-bm&query=' + input + '&page=1&include_adult=false';

    try {
        const res = await fetch(movieSearchURL);
        console.log(res)
        if (res.status !== 200) {
            throw res;
        };
        const data = await res.json();
        console.log(data)
        dispatch({
            type: MOVIE_RESULTS_LOADED,
            payload: data
        });
    } catch (err) {
       /*  const response = await err.json(); */
        dispatch({
            type: SEARCH_FAIL
        });
    };
}

export const searchForSeries = (input) => async dispatch => {
    dispatch({
        type: SERIES_RESULTS_LOADING
    });
    const seriesSearchURL = 'https://api.themoviedb.org/3/search/tv?api_key=c5733a52f13cedc8b47b7a21e8edd914&language=no-bm&query=' + input + '&page=1&first_air_date_year=false';
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
        /* dispatch(stopSubmit('something', response)); */
    };
}

export const getMovieInfo = (movieID) => async dispatch => {
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
        /* const response = await err.json(); */
        dispatch({
            type: SEARCH_FAIL
        });
    };
}



export const getSeriesInfo = (seriesID) => async dispatch => {
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
        /* const response = await err.json(); */
        dispatch({
            type: SEARCH_FAIL
        });
    };
}


