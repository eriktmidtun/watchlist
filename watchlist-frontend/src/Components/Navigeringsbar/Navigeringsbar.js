
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from './Logo';
import { LinkContainer } from 'react-router-bootstrap';
/* import NavDropdown from 'react-bootstrap/NavDropdown'; */

const Navigeringsbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <LinkContainer to="/">
        <Navbar.Brand>
          <Logo/>
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/*  searchbar om logged inn } */}
        </Nav>
        <Nav>
        <LinkContainer to="/registrering">
          <Nav.Link >Registrering</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/loginn">
          <Nav.Link eventKey={2}>
            Log inn
          </Nav.Link>
        </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigeringsbar;



