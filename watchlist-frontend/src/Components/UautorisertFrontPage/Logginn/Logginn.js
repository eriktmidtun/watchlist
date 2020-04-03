import React, { Component } from "react";

/* Styling */
import { Card, Button, Form } from "react-bootstrap/";

/* Routing */
import { Link, Redirect } from "react-router-dom";

/* Redux */
import { connect } from "react-redux";
import { login } from "../../../actions/auth";
import { Field, reduxForm } from "redux-form";
import {
  RenderField,
  BackendResponsMeldingsboks
} from "../ReduxFormContainers";

/* Validations */
import { required, minLength3 } from "../ValideringsFunksjoner";

/*** 
 * Loginform 
 * Handles the login process with validations and displaying validation errors
*/
class Logginn extends Component {
  onSubmit = formValues => {
    this.props.login(formValues);
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <Card style={{ padding: "32px" }}>
        <Card.Title style={{ textAlign: "center", fontSize: "2em" }}>
          Logg inn
        </Card.Title>
        <Form noValidate onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            label="Epost"
            name="username"
            type="text"
            component={RenderField}
            placeholder="navn@domene.no"
            validate={[required, minLength3]}
          />
          <Field
            label="Passord"
            name="password"
            type="password"
            component={RenderField}
            placeholder="Passord"
            validate={[required, minLength3]}
          />
          <Field
            name="non_field_errors"
            component={BackendResponsMeldingsboks}
          />
          <Button variant="primary" type="submit" block>
            Logg inn
          </Button>
        </Form>
        <p style={{ textAlign: "right", marginTop: "10px" }}>
          Mangler du konto?
          <Link to="/registrering"> Registrering</Link>
        </p>
      </Card>
    );
  }
}

/* The props we would like from Redux Store. */
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

Logginn = connect(mapStateToProps, { login })(Logginn);

/* Connects the Redux Form library to our Redux Store. */
export default reduxForm({
  form: "loginForm"
})(Logginn);
