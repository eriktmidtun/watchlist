import React, { Component } from "react";

/* Styling */
import { Row, Col, Card, Nav } from "react-bootstrap";

import Results from "./Results";

/* Redux */
import { connect } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Switch, Route } from "react-router-dom";

/* Viser en brukerprofil, samt dens lister */
class SearchPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className="justify-content-center">
          <Col xs={{ span: "12" }}>
            <Card style={{ marginBottom: "32px", padding: "32px" }}>
              <Card.Title style={{ textAlign: "left", fontSize: "2em" }}>
                Søk: " {this.props.query} "
              </Card.Title>
              <Nav variant="tabs" defaultActiveKey="/filmer">
                <Nav.Item>
                  <LinkContainer to="filmer">
                    <Nav.Link eventKey="link-1">Filmer (0)</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                  <LinkContainer to="serier">
                    <Nav.Link eventKey="link-2">Serier (0)</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="disabled" disabled>
                    Brukere (0)
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card>
          </Col>
        </Row>
        
          <Route path={"/filmer"}>
            
          </Route>
          <Route path={"/serier"} component={Results} />
          <Route path={"/brukere"} />
        
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, null)(SearchPage);
