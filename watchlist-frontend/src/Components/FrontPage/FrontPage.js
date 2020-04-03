import React, { Component } from "react";

/* Styling */
import { Row, Col, Card } from "react-bootstrap";

/* Redux */
import { connect } from "react-redux";

/*** 
 * FrontPage
 * This is where the user will be redirected to after logging in
 */
class FrontPage extends Component {
  render() {
    const { user } = this.props.auth;
    return (
      <Row className="justify-content-center">
        <Col xs={{ span: "12" }}>
          <Card style={{ padding: "32px" }}>
            <Card.Title style={{ textAlign: "center", fontSize: "2em" }}>
              Forside
            </Card.Title>
            <p>
              Du er logget inn som <b>{user ? user.username : "INGEN"} </b>
            </p>
            <p>Her kommer feed</p>
          </Card>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(FrontPage);
