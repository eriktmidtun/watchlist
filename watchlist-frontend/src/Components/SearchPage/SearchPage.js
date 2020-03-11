import React, { Component } from "react";

/* Styling */
import { Row, Col, Card, Nav } from "react-bootstrap";

import Results from "./Results";

/* Redux */
import { connect } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { searchForMovies, searchForSeries } from "../../actions/TheMovieDB"
/* import { Switch, Route } from "react-router-dom"; */

/* Viser en brukerprofil, samt dens lister */
class SearchPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      mediaType: "filmer",
      søk: "Game of"
    }
  }
  componentDidMount() {
    this.props.searchForSeries(this.state.søk);
    console.log("componentD", this.props.medier)
  }
  render() {
    return (
      <React.Fragment>
        <Row className="justify-content-center">
          <Col xs={{ span: "12" }}>
            <Card style={{ marginBottom: "32px", padding: "32px" }}>
              <Card.Title style={{ textAlign: "left", fontSize: "2em" }}>
                Søk: "{this.state.søk}"
              </Card.Title>
              <Nav variant="tabs" defaultActiveKey="/filmer">
                <Nav.Item>
                  <LinkContainer to="filmer">
                    <Nav.Link 
                    onClick={()=> this.setState({mediaType:"filmer"})}
                    active={this.state.mediaType === "filmer"}
                    >
                      Filmer
                    </Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                  <LinkContainer to="serier">
                    <Nav.Link 
                    onClick={()=> this.setState({mediaType:"serier"})}
                    active={this.state.mediaType === "serier"}
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
              <Results results={this.props.medier.mediums} mediaType={this.state.mediaType}/>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  medier: state.medier
});

export default connect(mapStateToProps, { searchForMovies, searchForSeries })(SearchPage);
