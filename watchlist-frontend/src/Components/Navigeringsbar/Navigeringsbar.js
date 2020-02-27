import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "./Logo";
import { LinkContainer } from "react-router-bootstrap";
/* import NavDropdown from 'react-bootstrap/NavDropdown'; */

/* Redux */
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

class Navigeringsbar extends Component {
  render() {
    const  {user, isAuthenticated } = this.props.auth;
    
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
        style={{ height: "60px" }}
        onMouseEnter={() => console.log("navbar",user, isAuthenticated)} //for testing av redirects
      >
        <LinkContainer to="/">
          <Navbar.Brand>
            <Logo />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">{/*  searchbar om logged inn } */}</Nav>
          <Nav>
            <LinkContainer to="/registrering">
              <Nav.Link>Registrering</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/logginn">
              <Nav.Link eventKey={2}>Logg inn</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navigeringsbar);

