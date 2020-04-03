import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import medier from "./TheMovieDB";
import list from "./lists";
import { LOGOUT_SUCCESS } from "../actions/types";

const appReducer = combineReducers({
  form: formReducer,
  auth,
  medier,
  list
});

const rootReducer = (state, action) => {
  // Deletes all data if the user is logged out.
  if (action.type === LOGOUT_SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
