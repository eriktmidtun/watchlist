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
  DELETE_FROM_HW,
  DELETE_FROM_WTW,
  DELETE_FROM_LIST_LOADING,
  DELETE_FROM_LIST_FAILED,
  LIST_FAILED,
  WTW_LIST_LOADED
} from "./types";
import { tokenConfig } from "./auth";
import { backendBaseURL } from "./constants";

/***  Spør server om alle filmer/serier i en av listene */
export const getBackendMediaID = list => async (dispatch, getState) => {
  dispatch({ type: LIST_LOADING });

  try {
    const token = tokenConfig(getState);
    const res = await fetch(backendBaseURL + `/api/lists/` + list + `/`, {
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
    if (list === "wantToWatch") {
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

/***  Legger til en Film/serie i list */
export const addMediaToList = (mdbID, mediaType, list) => async (
  dispatch,
  getState
) => {
  dispatch({ type: ADD_TO_LIST_LOADING });

  try {
    const token = tokenConfig(getState);
    const body = {
      mdbID: mdbID,
      mediumType: mediaType
    };
    const res = await fetch(backendBaseURL + `/api/lists/` + list + `/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + token
      },
      body: JSON.stringify(body)
    });
    const data = await res.json();
    if (res.status !== 201) {
      throw Error(data);
    }
    if (list === "wantToWatch") {
      dispatch({
        type: ADD_TO_WTW
      });
    } else {
      dispatch({
        type: ADD_TO_HW
      });
    }
  } catch (err) {
    dispatch({
      type: ADD_TO_LIST_FAILED
    });
  }
};

/***  Spør server om  filmen/serien er i want to watch listen */
export const isMediaInWTW = mdbID => async (dispatch, getState) => {
  dispatch({ type: WTW_ITEM_LOADING });
  try {
    const token = tokenConfig(getState);
    const res = await fetch(
      backendBaseURL + `/api/lists/wantToWatch/` + mdbID,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + token
        }
      }
    );
    if (res.status !== 200) {
      throw Error("den er ikke i listen");
    }
    dispatch({
      type: WTW_ITEM
    });
  } catch (err) {
    dispatch({
      type: WTW_ITEM_FAILED
    });
  }
};

/***  Spør server om  filmen/serien er i hav watched listen */
export const isMediaInHW = mdbID => async (dispatch, getState) => {
  dispatch({ type: HW_ITEM_LOADING });
  try {
    const token = tokenConfig(getState);
    const res = await fetch(
      backendBaseURL + `/api/lists/haveWatched/` + mdbID + `/`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + token
        },
        body: null
      }
    );
    if (res.status !== 200) {
      throw Error("Den er ikke i listen");
    }
    dispatch({
      type: HW_ITEM
    });
  } catch (err) {
    //console.log(err)
    dispatch({
      type: HW_ITEM_FAILED
    });
  }
};

/***  Sletter film/serie fra list */
export const deleteMediaFromList = (mdbID, list) => async (
  dispatch,
  getState
) => {
  dispatch({ type: DELETE_FROM_LIST_LOADING });

  try {
    const token = tokenConfig(getState);

    const res = await fetch(
      backendBaseURL + `/api/lists/` + list + `/` + mdbID + `/`,
      {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + token
        }
      }
    );

    if (res.status !== 204) {
      throw Error("No gikk galt med deletefrom list");
    }
    if (list === "wantToWatch") {
      dispatch({
        type: DELETE_FROM_WTW
      });
    } else {
      dispatch({
        type: DELETE_FROM_HW
      });
    }
  } catch (err) {
    dispatch({
      type: DELETE_FROM_LIST_FAILED
    });
  }
};
