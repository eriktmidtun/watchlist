import {
    HW_LIST_LOADED,
    WTW_ITEM_LOADING,
    WTW_ITEM_FAILED,
    WTW_ITEM,
    HW_ITEM_LOADING,
    HW_ITEM_FAILED,
    HW_ITEM,
    LIST_LOADING,
    ADD_TO_LIST_LOADING,
    ADD_TO_WTW,
    ADD_TO_HW,
    ADD_TO_LIST_FAILED,
    DELETE_FROM_LIST,
    DELETE_FROM_LIST_LOADING,
    DELETE_FROM_LIST_FAILED,
    LIST_FAILED,
    WTW_LIST_LOADED
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
    if (list === "wantToWatch"){
        dispatch({
            type: WTW_LIST_LOADED,
            payload: data
        });
    } else {
        dispatch({
            type: HW_LIST_LOADED,
            payload: data
        });
    }

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
        mediumType: mediaType
    }
    const res = await fetch(baseURL + `/api/lists/` + list +`/` , {
        method: "POST",
        mode: "cors",
        headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + token
        },
        body: JSON.stringify(body)
    });
    const data = await res.json();
    if (res.status !== 201 ) {
        throw Error(data);
    }
    if(list === 'wantToWatch'){
        dispatch({
            type: ADD_TO_WTW,
        });
    } else {
        dispatch({
            type: ADD_TO_HW,
        });
    }
    
    } catch (err) {
    dispatch({
        type: ADD_TO_LIST_FAILED
    });
    }
};

export const isMediaInWTW = (mdbID) => async (dispatch, getState) => {
    dispatch({ type: WTW_ITEM_LOADING });

    try {
    const token = tokenConfig(getState);
    const res = await fetch(baseURL + `/api/lists/wantToWatch/` + mdbID  , {
        method: "GET",
        mode: "cors",
        headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + token
        }
    });
    if (res.status !== 200 ) {
        throw Error("den er ikke i listen");
    }
    dispatch({
        type: WTW_ITEM,
    });
    } catch (err) {
        console.log("isMediaInWTW err",err);
    dispatch({
        type: WTW_ITEM_FAILED
    });
    }
};

export const isMediaInHW = (mdbID) => async (dispatch, getState) => {
    dispatch({ type: HW_ITEM_LOADING });
    console.log("isMediaInHW mdbID",mdbID);
    try {
    const token = tokenConfig(getState);
   console.log("isMediaInHW token",token);
    const res = await fetch(baseURL + `/api/lists/haveWatched/` + mdbID + `/` , {
        method: "GET",
        mode: "cors",
        headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + token
        },
        body: null
    });
   console.log("isMediaInHW res",res);
    if (res.status !== 200 ) {
        throw Error("Den er ikke i listen");
    }
    dispatch({
        type: HW_ITEM,
    });
    } catch (err) {
        console.log(err)
    dispatch({
        type: HW_ITEM_FAILED
    });
    }
};

export const deleteMediaFromList = (mdbID, list) => async (dispatch, getState) => {
    
    dispatch({ type: DELETE_FROM_LIST_LOADING });

    try {
        const token = tokenConfig(getState);

        const res = await fetch(baseURL + `/api/lists/` + list + `/` + mdbID  + `/` , {
            method: "DELETE",
            mode: "cors",
            headers: {
            "Content-Type": "application/json",
            Authorization: "Token " + token
            }
        });
        
        if (res.status !== 204 ) { 
            throw Error("No gikk galt med deletefrom list");
        }
        
        console.log("Delete media from list res: " + res.status + " ID: " + mdbID)
        dispatch({
            type: DELETE_FROM_LIST
        });
    } catch (err) {
    dispatch({
        type: DELETE_FROM_LIST_FAILED
    });
    }
};


