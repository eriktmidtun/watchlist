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

/* Requests user data from server. */
export const loadUser = () => async (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  try {
    const token = tokenConfig(getState);
    if (!token) {
      throw Error("No saved token.");
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

/* Register user. */
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
  // Request body.
  const body = JSON.stringify(formData);

  try {
    const res = await fetch(backendBaseURL + `/api/auth/register`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: body
    });

    if (res.status !== 200) {
      // Something went wrong.
      throw res;
    }
    const data = await res.json();
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data
    });
  } catch (err) {
    const response = await err.json(); // Extract the error messsage from the server response.
    dispatch({
      type: REGISTER_FAIL
    });
    dispatch(stopSubmit("registerForm", response));
  }
};

/* Log in user. */
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
      // Things did not work as expected.
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

/* Log out user. We are not expecting a response. */
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

/* Helper function. */
export const tokenConfig = getState => {
  const token = getState().auth.token;
  return token;
};
