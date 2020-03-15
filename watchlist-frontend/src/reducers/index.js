import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import medier from "./TheMovieDB";
import lists from "./lists";
import { LOGOUT_SUCCESS } from "../actions/types";

const appReducer = combineReducers({
  form: formReducer,
  auth,
  medier,
  lists,
});

const rootReducer = (state, action) => {
  //sletter all data om bruker om bruker er logger ut
  if (action.type === LOGOUT_SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;