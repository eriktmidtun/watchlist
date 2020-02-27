
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from './Logo';
import DropdownButton from './DropdownButton'
import SearchBar from './SearchBar'
import { LinkContainer } from 'react-router-bootstrap';
import { ButtonGroup, Dropdown, Button, Container, FormControl, InputGroup} from 'react-bootstrap';
/* import NavDropdown from 'react-bootstrap/NavDropdown'; */

const NavBarAut = () => {
  
  const isAuthenticated = true

  const unauthorizedLinks = () =>{
    return(
      <Nav className="ml-auto">
        <LinkContainer to="/logginn">
        <Nav.Link eventKey={2}>
          Logg inn
        </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/registrering">
        <Nav.Link>
          Registrering
        </Nav.Link>
        </LinkContainer>
      </Nav>
    )
  };

  return (
    <Navbar 
    collapseOnSelect expand="lg" 
    bg="dark" 
    variant="dark" 
    sticky="top" 
    style={{height: '60px'}} >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Logo/>
        {isAuthenticated ?
          <Navbar.Collapse id="responsive-navbar-nav">
              <SearchBar/>
              <DropdownButton/>
          </Navbar.Collapse>
          : unauthorizedLinks()}
    </Navbar>
  );
};

export default NavBarAut;