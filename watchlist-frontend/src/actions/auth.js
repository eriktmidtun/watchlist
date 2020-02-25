import axios from 'axios';
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

  try {
    const res = await axios.get('/api/auth/user', tokenConfig(getState));
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// REGISTER USER
export const register = ({ username, email, password, first_name, last_name }) => async dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request Body
  const body = JSON.stringify({ username, email, password, first_name, last_name });

  try {
    const res = await fetch(`http://localhost:8000/api/auth/register`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: body
    });
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.json
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL
    });
    /* dispatch(stopSubmit('registerForm', err.response.data)); */
  }
};

// LOGIN USER
export const login = ({ username, password }) => async dispatch => {

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
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.json
    });
    
  } catch (err) {
    console.log(err.json);
    dispatch({
      type: LOGIN_FAIL
    });
   /*  dispatch(stopSubmit('loginForm', err.response.data)); */
  }
};

// LOGOUT USER
export const logout = () => async (dispatch, getState) => {
  await axios.post('/api/auth/logout', null, tokenConfig(getState));
  dispatch({
    type: LOGOUT_SUCCESS
  });
};  

// helper function
export const tokenConfig = getState => {
  // Get token
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config;
};