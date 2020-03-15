import {
    WANT_TO_WATCH_LOADED,
    HAVE_WATCHED_LOADED,
    WANT_TO_WATCH_LOADING,
    HAVE_WATCHED_LOADING,
    ADD_WANT_TO_WATCH,
    ADD_HAVE_WATCHED,
    DELETE_WANT_TO_WATCH,
    DELETE_HAVE_WATCHED,
    WANT_TO_WATCH_FAILED,
    HAVE_WATCHED_FAILED,
} from "./types";
import {tokenConfig} from './auth'

const baseURL = `http://localhost:8000`;

/* Spør server om want to watch list */
export const getWantToWatch = () => async (dispatch, getState) => {
    dispatch({ type: WANT_TO_WATCH_LOADING });

    try {
    const token = tokenConfig(getState);
    const res = await fetch(baseURL + `/api/mediaItems`, {
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
        type: WANT_TO_WATCH_LOADED,
        payload: data
    });
    } catch (err) {
    dispatch({
        type: WANT_TO_WATCH_FAILED
    });
    }
};
