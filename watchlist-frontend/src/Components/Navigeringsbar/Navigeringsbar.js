
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from './Logo';
import SearchBar from './SearchBar'
import { LinkContainer } from 'react-router-bootstrap';
import { Col, Row, Container, FormControl, InputGroup, Button } from 'react-bootstrap';
/* import NavDropdown from 'react-bootstrap/NavDropdown'; */

const Navigeringsbar = () => {

    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" style={{height: '60px'}}  >
      <LinkContainer to="/">
        <Navbar.Brand >
            <Logo/>
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Container style={{width: '476px'}} >
            <InputGroup >         
              <FormControl md="12"/>
              <Button variant="primary" >Søk</Button>
            </InputGroup>
          </Container>
        </Nav>
        <Nav>
        <LinkContainer to="/registrering">
          <Nav.Link >Registrering</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/logginn">
          <Nav.Link eventKey={2}>
            Logg inn
          </Nav.Link>
        </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigeringsbar;



