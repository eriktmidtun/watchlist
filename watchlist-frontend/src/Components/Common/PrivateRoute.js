import React from "react";
/* Routing */
import { Route, Redirect } from "react-router-dom";
/* Redux */
import { connect } from "react-redux";
/* Components */
import { Loader } from "./Loader";

/*** 
 * Wrapper Routing component.
 * Redirects the user to login/register if not loged in
 */
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
