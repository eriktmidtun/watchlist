import React, { Component } from "react";

/* Styling */
import { Row, Col, Card } from "react-bootstrap";

/* Redux */
import { connect } from "react-redux";

class Profil extends Component {
  render() {
    const  {user} = this.props.auth;
    return (
      <Row className="justify-content-center">
        <Col xs={{ span: "12" }}>
          <Card style={{ margin: "2em", padding: "2em" }}>
            <Card.Title style={{ textAlign: "left", fontSize: "1em" }}>
              Min Profil
            </Card.Title>
            <h1>{user.first_name + " " + user.last_name}</h1>
            <h2>{user.email}</h2>
          </Card>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(Profil);
