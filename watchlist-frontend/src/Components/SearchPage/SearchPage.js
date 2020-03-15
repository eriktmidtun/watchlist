import React, { Component } from "react";

/* Styling */
import { Row, Col, Card, Nav } from "react-bootstrap";

import Results from "./Results";

/* Redux */
import { connect } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import queryString from 'query-string'
import { searchForMovies, searchForSeries } from "../../actions/TheMovieDB"
import { Route } from "react-router-dom";
/* import { Switch, Route } from "react-router-dom"; */

/* Viser en brukerprofil, samt dens lister */
class SearchPage extends Component {

  /* componentDidMount() {
    const mediaType = this.props.location.pathname.split("/")[2];
    const query = queryString.parse(this.props.location.search).q;
    this.search(mediaType, query);
  } */

  render() {
    const query = queryString.parse(this.props.location.search).q
    const mediaType = this.props.location.pathname.split("/")[2];
    return (
      <React.Fragment>
        <Row className="justify-content-center">
          <Col xs={{ span: "12" }}>
            <Card style={{ marginBottom: "32px", padding: "32px" }}>
              <Card.Title style={{ textAlign: "left", fontSize: "2em" }}>
                Søk: "{query}"
              </Card.Title>
              <Nav variant="tabs" defaultActiveKey="/filmer">
                <Nav.Item>
                  <LinkContainer to={"filmer?q=" + query}>
                    <Nav.Link 
                    active={mediaType === "filmer"}
                    >
                      Filmer
                    </Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                  <LinkContainer to={"serier?q=" + query}>
                    <Nav.Link 
                    active={mediaType === "serier"}
                    >
                      Serier
                    </Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="disabled" disabled>
                    Brukere
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Route path="/søk/filmer">
                <Results query={query} mediaType={'filmer'}/>
              </Route>
              <Route path="/søk/serier">
                <Results query={query} mediaType={'serier'}/>
              </Route>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default SearchPage;
