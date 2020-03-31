import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { Loader } from "./Loader";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (auth.isLoading) {
        return <Loader />;
      } else if (!auth.isAuthenticated) {
        return <Redirect to="/logginn" />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
