import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";

/* Redux */
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

class FrontPage extends Component {
  render() {
    const  {user, isAuthenticated } = this.props.auth;
    console.log(user)
    return (
      <Row className="justify-content-center">
        <Col xs={{ span: "12" }}>
          <Card style={{ margin: "2em", padding: "2em" }}>
            <Card.Title style={{ textAlign: "center", fontSize: "2em" }}>
              Forside
            </Card.Title>
            <p>Du er logget inn som {user? user.username: "BLANK"} og authicated = {isAuthenticated} </p>
            <button onClick={this.props.logout}>Logg ut</button>
          </Card>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(FrontPage);
