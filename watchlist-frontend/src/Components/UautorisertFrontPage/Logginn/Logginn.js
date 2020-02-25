import React, { Component } from "react";

/* Styling */
import { Card, Button, Form } from "react-bootstrap/";

/* Routing */
import { Link, Redirect } from "react-router-dom";

/* Redux */
import { connect } from "react-redux";
import { login } from "../../../actions/auth";

class Logginn extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    /* Gjør at vi kan kalle metodene i JSX i render */
    this.eventHandler = this.eventHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /* Tar ut verdien av det som blir skrevet i Form.Contol inputboksene og oppdaterer state*/
  eventHandler(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  /* Hva som skal gjøres når logginn knappen blir trykket på */
  onSubmit(event) {
    const formValues = {
      // hva som skal bli sendt til backenden
      username: this.state.username,
      password: this.state.password
    };
    this.props.login(formValues);
    event.preventDefault(); // stopper nettleseren fra å prøve å redirecte oss
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <Card style={{ margin: "2em", padding: "2em" }}>
        <Card.Title style={{ textAlign: "center", fontSize: "2em" }}>
          Log inn
        </Card.Title>
        <Form noValidate onSubmit={this.onSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Fornavn</Form.Label>
            <Form.Control
              type="username"
              name="username"
              placeholder="navn@domene.com"
              onChange={this.eventHandler}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Passord</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Passord"
              onChange={this.eventHandler}
            />
          </Form.Group>
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

export default connect(mapStateToProps, { login })(Logginn);
