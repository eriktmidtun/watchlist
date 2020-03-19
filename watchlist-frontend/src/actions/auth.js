import { stopSubmit } from "redux-form";

import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS
} from "./types";

/* Bytt denne addressen til http://admin.watchlist.social for å kjøre mot backend serveren vår */
const baseURL = `http://localhost:8000`;

/* Spør server om brukerdata */
export const loadUser = () => async (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  try {
    const token = tokenConfig(getState);
    if(!token) {
      throw Error("ingen token lagret");
    }
    const res = await fetch(baseURL + `/api/auth/user`, {
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
      type: USER_LOADED,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

/* Registrer bruker */
export const register = ({
  email,
  password,
  first_name,
  last_name
}) => async dispatch => {
  let formData = {
    first_name: first_name,
    last_name: last_name,
    username: email,
    email: email,
    password: password
  };
  // Request Body
  const body = JSON.stringify(formData);

  try {
    const res = await fetch(baseURL + `/api/auth/register`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: body
    });

    if (res.status !== 200) {
      //noe gikk galt
      throw res;
    }
    const data = await res.json();
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data
    });
  } catch (err) {
    const response = await err.json(); //ta ut melding fra respons fra server
    dispatch({
      type: REGISTER_FAIL
    });
    dispatch(stopSubmit("registerForm", response));
  }
};

/* Logg inn bruker */
export const login = ({ username, password }) => async dispatch => {
  const body = JSON.stringify({ username, password });

  try {
    const res = await fetch(baseURL +`/api/auth/login`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: body
    });
    const data = await res.json();

    if (res.status !== 200) {
      //ting gikk ikke som planlagt
      throw data;
    }
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL
    });
    dispatch(stopSubmit("loginForm", err));
  }
};

/* Logg ut bruker
 vi forventer ikke svar */
export const logout = () => async (dispatch, getState) => {
  const token = tokenConfig(getState);

  await fetch(baseURL +`/api/auth/logout`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + token
    },
    body: null
  });

  dispatch({
    type: LOGOUT_SUCCESS
  });
};

// helper function
export const tokenConfig = getState => {
  const token = getState().auth.token;
  return token;
};
