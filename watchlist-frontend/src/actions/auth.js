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
import { backendBaseURL } from "./constants";

/*** Asks the server for userdata */
export const loadUser = () => async (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  try {
    const token = tokenConfig(getState);
    if (!token) {
      throw Error("ingen token lagret");
    }
    const res = await fetch(backendBaseURL + `/api/auth/user`, {
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

/*** Registers user based on form data*/
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
    const res = await fetch(backendBaseURL + `/api/auth/register`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: body
    });

    if (res.status !== 200) {
      //something went wrong
      throw res;
    }
    const data = await res.json();
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data
    });
  } catch (err) {
    const response = await err.json(); //extracts data from server data
    dispatch({
      type: REGISTER_FAIL
    });
    dispatch(stopSubmit("registerForm", response));
  }
};

/***  Login the user based on username and password. dispatches error massage if not correct */
export const login = ({ username, password }) => async dispatch => {
  const body = JSON.stringify({ username, password });

  try {
    const res = await fetch(backendBaseURL + `/api/auth/login`, {
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

/*** log the user out. We dont expact any respons from the server*/
export const logout = () => async (dispatch, getState) => {
  const token = tokenConfig(getState);

  await fetch(backendBaseURL + `/api/auth/logout`, {
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

/*** returns the token, if it exists*/
export const tokenConfig = getState => {
  const token = getState().auth.token;
  return token;
};
