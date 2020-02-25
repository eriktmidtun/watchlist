import React, { Component } from "react";

import { Card, Button, Form } from "react-bootstrap/";

import { Link, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { login } from "../../../actions/auth";

class Logginn extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
    this.eventHandler = this.eventHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  eventHandler(event) {
    const value = event.target.value;
    const name = event.target.name;
    //console.log(name,value);
    this.setState({
      [name]: value
    });
  }
  onSubmit() {
    const formValues = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.login(formValues)
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
            <Form.Control type="username" placeholder="navn@domene.com" onChange={this.eventHandler} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Passord</Form.Label>
            <Form.Control type="password" placeholder="Passord" onChange={this.eventHandler} />
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

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Logginn);
