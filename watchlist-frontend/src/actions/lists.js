import {
    LIST_LOADED,
    LIST_ITEM_LOADING,
    LIST_ITEM_FAILED,
    LIST_ITEM,
    LIST_LOADING,
    ADD_TO_LIST_LOADING,
    ADD_TO_LIST,
    ADD_TO_LIST_FAILED,
    DELETE_FROM_LIST,
    DELETE_FROM_LIST_LOADING,
    DELETE_FROM_LIST_FAILED,
    LIST_FAILED,
} from "./types";
import {tokenConfig} from './auth'

const baseURL = `http://localhost:8000`;

/* Spør server om want to watch list */
export const getBackendMediaID = (list) => async (dispatch, getState) => {
    dispatch({ type: LIST_LOADING });

    try {
    const token = tokenConfig(getState);
    const res = await fetch(baseURL + `/api/lists/` + list +`/`, {
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
        type: LIST_LOADED,
        payload: data
    });
    } catch (err) {
    dispatch({
        type: LIST_FAILED
    });
    }
};


export const addMediaToList = (mdbID, mediaType, list) => async (dispatch, getState) => {
    dispatch({ type: ADD_TO_LIST_LOADING });

    try {
    const token = tokenConfig(getState);

    const body = {
        mdbID: mdbID,
        mediaType: mediaType
    }
    const res = await fetch(baseURL + `/api/lists/` + list +`/` , {
        method: "GET",
        mode: "cors",
        headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + token
        },
        body: JSON.stringify(body)
    });
    const data = await res.json();
    if (res.status !== 200 || res.status !== 204 ) {
        throw Error(data);
    }
    dispatch({
        type: ADD_TO_LIST,
    });
    } catch (err) {
    dispatch({
        type: ADD_TO_LIST_FAILED
    });
    }
};

export const isMediaInList = (mdbID, list) => async (dispatch, getState) => {
    dispatch({ type: LIST_ITEM_LOADING });

    try {
    const token = tokenConfig(getState);
    const res = await fetch(baseURL + `/api/lists/` + list + `/` + mdbID `/` , {
        method: "GET",
        mode: "cors",
        headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + token
        },
        body: null
    });
    const data = await res.json();
    if (res.status !== 200 || res.status !== 204 ) {
        throw Error(data);
    }
    dispatch({
        type: LIST_ITEM,
    });
    } catch (err) {
    dispatch({
        type: LIST_ITEM_FAILED
    });
    }
};

export const deleteMediaFromList = (mdbID, list) => async (dispatch, getState) => {
    dispatch({ type: DELETE_FROM_LIST_LOADING });

    try {
    const token = tokenConfig(getState);

    const res = await fetch(baseURL + `/api/lists/` + list + `/` + mdbID `/` , {
        method: "DELETE",
        mode: "cors",
        headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + token
        }
    });
    const data = await res.json();
    if (res.status !== 200 || res.status !== 204 ) {
        throw Error(data);
    }
    dispatch({
        type: DELETE_FROM_LIST
    });
    } catch (err) {
    dispatch({
        type: DELETE_FROM_LIST_FAILED
    });
    }
};
