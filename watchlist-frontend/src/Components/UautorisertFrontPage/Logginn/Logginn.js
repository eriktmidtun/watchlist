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

/* Valideringer */
import { required, minLength3 } from "../ValideringsFunksjoner";

/* Her bruker vi redux-form for å gjøre ting mye lettere sammen med react-redux */
class Logginn extends Component {
  onSubmit = formValues => {
    this.props.login(formValues);
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <Card style={{ margin: "2em", padding: "2em" }}>
        <Card.Title style={{ textAlign: "center", fontSize: "2em" }}>
          Log inn
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
            Log inn
          </Button>
        </Form>
        <p style={{ textAlign: "right", marginTop: "0.5em" }}>
          Mangler du konto?
          <Link to="/registrering"> Registrering</Link>
        </p>
      </Card>
    );
  }
}

/* Hvikle props vi vil ha fra redux store */
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

Logginn = connect(mapStateToProps, { login })(Logginn);

/* Kobler til biblioteket reduxform til vår reduxstore */
export default reduxForm({
  form: "loginForm"
})(Logginn);
