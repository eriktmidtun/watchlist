import React, { Component } from "react";

/* Components */
import Liste from "./Liste";

/* Styling */
import { Row, Col, Card } from "react-bootstrap";

/* Redux */
import { connect } from "react-redux";

/* Shows a user profile and its lists. */
class Profil extends Component {
  render() {
    const { user } = this.props.auth;
    const følgere = "N/A"; // Has to be hooked up to the backend at some point.
    const følger = "N/A"; // Same as the above comment.
    return (
      <React.Fragment>
        <Row className="justify-content-center">
          <Col xs={{ span: "12" }}>
            <Card style={{ marginBottom: "32px", padding: "32px" }}>
              <Card.Title style={{ textAlign: "left", fontSize: "1em" }}>
                Min Profil
              </Card.Title>
              <h1>{user.first_name + " " + user.last_name}</h1>
              <h5>{user.email}</h5>
              <h6>
                Følgere: <span style={{ color: "red" }}>{følgere}</span> Følger:{" "}
                <span style={{ color: "red" }}>{følger}</span>{" "}
              </h6>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={{ order: 2, span: "12" }} lg={{ order: 1, span: "6" }}>
            <Liste listeNavn={"Skal se"} apiUrl={"wantToWatch"}>
              {" "}
            </Liste>
          </Col>
          <Col xs={{ order: 1, span: "12" }} lg={{ order: 2, span: "6" }}>
            <Liste listeNavn={"Har sett"} apiUrl={"haveWatched"}></Liste>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(Profil);
