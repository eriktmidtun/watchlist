import React, { Component } from "react";

/* Styling */
import { Card, Button, Form } from "react-bootstrap/";

/* Routing */
import { Link, Redirect } from "react-router-dom";

/* Redux */
import { connect } from "react-redux";
import { register } from "../../../actions/auth";
import { Field, reduxForm } from "redux-form";
import {
  RenderField,
  BackendResponsMeldingsboks
} from "../ReduxFormContainers";

/* Validations */
import {
  required,
  minLength3,
  maxLength100,
  passwordsMatch,
  isEmail,
  firstCharCapital
} from "../ValidationFunctions";

/*** 
 * registrationform 
 * Handles the registration process with validations and displaying validation errors
*/
class Registrering extends Component {
  onSubmit = formValues => {
    this.props.register(formValues);
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <Card style={{ padding: "32px" }}>
        <Card.Title style={{ textAlign: "center", fontSize: "2em" }}>
          Registrering
        </Card.Title>

        <Form noValidate onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            label="Fornavn"
            name="first_name"
            type="text"
            component={RenderField}
            placeholder="John"
            validate={[required, minLength3, firstCharCapital, maxLength100]}
          />
          <Field
            label="Etternavn"
            name="last_name"
            type="text"
            component={RenderField}
            placeholder="Doe"
            validate={[required, minLength3, firstCharCapital, maxLength100]}
          />
          <Field
            label="Epost"
            name="email"
            type="email"
            component={RenderField}
            placeholder="navn@domene.no"
            validate={[required, isEmail]}
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
            label="Gjenta passord"
            name="password2"
            type="password"
            component={RenderField}
            placeholder="Passord"
            validate={[required, passwordsMatch]}
          />
          <Field
            name="non_field_errors"
            component={BackendResponsMeldingsboks}
          />
          <Button variant="primary" type="submit" block>
            Registrer deg
          </Button>
        </Form>
        <p style={{ textAlign: "right", marginTop: "10px" }}>
          Allerede en konto?
          <Link to="/logginn"> Logg inn</Link>
        </p>
      </Card>
    );
  }
}

/* Props we would like from Redux Store. */
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

Registrering = connect(mapStateToProps, { register })(Registrering);

export default reduxForm({
  form: "registerForm"
})(Registrering);
