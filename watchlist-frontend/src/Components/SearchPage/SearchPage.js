import React, { Component } from "react";

/* Styling */
import { Row, Col, Card, Nav } from "react-bootstrap";

/* Components */
import Results from "./Results";
import NotFound from "../Common/NotFound.js";

/* Routing */
import { LinkContainer } from "react-router-bootstrap";
import { Route } from "react-router-dom";
import queryString from "query-string"; //for parsing av URL

/***
 * Parses the url for searching movies and series
 * This is the landing page after searching something
 */ 
class SearchPage extends Component {
  render() {
    /* parses url to get search results and mediatype */
    const query = queryString.parse(this.props.location.search).q;
    const mediaType = this.props.location.pathname.split("/")[2];
    if (
      !(
        mediaType === "serier" ||
        mediaType === "filmer" ||
        mediaType === "brukere"
      )
    ) {
      //wrong path
      return <NotFound />;
    }
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
                    <Nav.Link active={mediaType === "filmer"}>Filmer</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                  <LinkContainer to={"serier?q=" + query}>
                    <Nav.Link active={mediaType === "serier"}>Serier</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="disabled" disabled>
                    Brukere
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Route path="/søk/filmer">
                <Results query={query} mediaType={"filmer"} />
              </Route>
              <Route path="/søk/serier">
                <Results query={query} mediaType={"serier"} />
              </Route>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default SearchPage;
