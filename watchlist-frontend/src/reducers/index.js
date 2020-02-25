import { combineReducers } from "redux";
import auth from "./auth";
import { LOGOUT_SUCCESS } from "../actions/types";

const appReducer = combineReducers({
  auth
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
