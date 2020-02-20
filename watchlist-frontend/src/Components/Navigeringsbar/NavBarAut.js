
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
  return (
    <Navbar 
    collapseOnSelect expand="lg" 
    bg="dark" 
    variant="dark" 
    sticky="top" 
    style={{height: '60px'}} >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Logo/>
            <SearchBar />
            <DropdownButton/>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarAut;



