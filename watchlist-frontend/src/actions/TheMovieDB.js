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
    LIST_DETAILS_LOADED,
    LIST_DETAILS_FAIL,
    BACKEND_IDS_LOADING,
    BACKEND_IDS_LOADED
} from "./types";

import {tokenConfig} from '../actions/auth'

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
        /* const response = await err.json(); */
        dispatch({
            type: SEARCH_FAIL
        });
        /* dispatch(stopSubmit('something', response)); */
    };
}

export const getMovieInfo = (ID) => async dispatch => {

    dispatch({
        type: MOVIE_LOADING
    });
    const movieInfoURL = 'https://api.themoviedb.org/3/movie/' + ID + '?api_key=c5733a52f13cedc8b47b7a21e8edd914&language=no-bm';

    try {
        const res = await fetch(movieInfoURL);
        console.log(res)
        if (res.status !== 200) {
            throw res;
        };
        const data = await res.json();
        console.log(data)
        dispatch({
            type: MOVIE_LOADED,
            payload: data
        });
    } catch (err) {
        /* const response = await err.json(); */
        dispatch({
            type: MEDIA_DETAILS_FAIL
        });
    };
}



export const getSeriesInfo = (ID) => async dispatch => {
    dispatch({
        type: SERIES_LOADING
    })
    const seriesInfoURL = 'https://api.themoviedb.org/3/tv/' + ID + '?api_key=c5733a52f13cedc8b47b7a21e8edd914&language=no-bm';

    try {
        const res = await fetch(seriesInfoURL);
        if (res.status !== 200) {
            throw res;
        };
        const data = await res.json();
        dispatch({
            type: SERIES_LOADED,
            payload: data
        });
    } catch (err) {
        /* const response = await err.json();  */
        dispatch({
            type: MEDIA_DETAILS_FAIL
        });
    };
}

/* tar inn en liste av mediums gitt av backend databsen vår */
export const getListToDetails = (mediums) => async dispatch => {
    dispatch({
        type: LIST_DETAILS_LOADING
    })
    try { 
        let url = '';
        const details = [];
        console.log("getListToDetails")
        for (const medium of mediums){
            console.log(medium);
            if (medium.mediaType === 'filmer') {
                url = 'https://api.themoviedb.org/3/tv/' + medium.mdbID + '?api_key=c5733a52f13cedc8b47b7a21e8edd914&language=no-bm';
            }
            else {
                url = 'https://api.themoviedb.org/3/movie/' + medium.mdbID + '?api_key=c5733a52f13cedc8b47b7a21e8edd914&language=no-bm';
            }
            console.log(url);
            let res = await fetch(url);
            console.log(res);
            if (res.status !== 200) {
                throw res;
            };
            const data = await res.json();
            details.push(data)
        }
        dispatch({
            type: LIST_DETAILS_LOADED,
            payload: details
        });
    } catch (err) {
        dispatch({
            type: LIST_DETAILS_FAIL
        });
    };
}


const baseURL = `http://localhost:8000`;

/* Spør server om want to watch list */


export const getBackendMediaID = () => async (dispatch, getState) => {

    dispatch({
        type: BACKEND_IDS_LOADING
    })

    try {
    const token = tokenConfig(getState);
    const res = await fetch(baseURL + `/api/lists/wantToWatch`, {
        method: "GET",
        mode: "cors",
        headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + token
        },
        body: null
    });
    const data = await res.json();
    if (res.status !== 200) {
        throw Error(data);
    }
    dispatch({
        type: BACKEND_IDS_LOADED,
        payload: data
    });
    } catch (err) {
    // dispatch({
    //     type: WANT_TO_WATCH_FAILED
    // });
    }
};


// export const getBackendMediaID =(token) => async dispatch =>{

//     console.log("token: " + token)

//     dispatch({
//         type: BACKEND_IDS_LOADING
//     })

//     let res = await fetch("watchlist.social/api/lists/wantToWatch", {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': token
//         }
//       })

//     console.log("res: " + res)

//     if (res.status !== 200) {
//         console.log("error")
//     };

//     const data = await res.json();

//     dispatch({
//         type: BACKEND_IDS_LOADED,
//         payload: data
//     });

// }