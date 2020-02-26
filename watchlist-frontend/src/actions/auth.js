/* import axios from 'axios'; */
/* import { stopSubmit } from 'redux-form'; */

import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS
} from './types';

// LOAD USER
export const loadUser = () => async (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  console.log("load user");

  try {
    const token = tokenConfig(getState);
    console.log(token);
    const res =  await fetch(`http://localhost:8000/api/auth/user`, {
      method: "GET",
      mode: "cors",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": "Token " + token
      },
      body: null,
    });
    console.log("res.ok",res)
    if(res.status != 200){
      throw Error(res.json())
    }
    const data = await res.json();
    dispatch({
      type: USER_LOADED,
      payload: data
    });
    console.log("User-loaded");

  } catch (err) {
    console.log("error", err);
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// REGISTER USER
export const register = ({ username, email, password, first_name, last_name }) => async dispatch => {
  console.log("register user");
  // Request Body
  const body = JSON.stringify({ username, email, password, first_name, last_name });

  try {
    const res = await fetch(`http://localhost:8000/api/auth/register`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: body
    });
    const data = await res.json();
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data
    });
    console.log("Register_succes")
  } catch (err) {
    console.log("error", err)
    dispatch({
      type: REGISTER_FAIL
    });
    /* dispatch(stopSubmit('registerForm', err.response.data)); */
  }
};

// LOGIN USER
export const login = ({ username, password }) => async dispatch => {
  console.log("logginn user");
  // Request Body
 /*  console.log("username " + username + " password " + password); */
  const body = JSON.stringify({ username, password });

  try {
    const res = await fetch(`http://localhost:8000/api/auth/login`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: body
    });
    console.log("response");
    const data = await res.json();
    await console.log(data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data
    });
    
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL
    });
   /*  dispatch(stopSubmit('loginForm', err.response.data)); */
  }
};

// LOGOUT USER
export const logout = () => async (dispatch, getState) => {
  console.log("logout user");
  const token = tokenConfig(getState);

  await fetch(`http://localhost:8000/api/auth/logout`, {
    method: "POST",
    mode: "cors",
    headers: { 
      "Content-Type": "application/json",
      "Authorization": "Token " + token
    },
    body : null
  });

  dispatch({
    type: LOGOUT_SUCCESS
  });
};  

// helper function
export const tokenConfig = getState => {
  console.log("get token");
  // Get token
  const token = getState().auth.token;
  console.log("token", token)
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }
  console.log("config", config)

  return token;
};