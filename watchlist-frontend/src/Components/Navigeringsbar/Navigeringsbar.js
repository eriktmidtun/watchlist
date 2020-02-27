import React, { Component } from "react";

/* Komponenter */
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import DropdownButton from "./DropdownButton";

/* Bootstrap styling */
import { Nav, Navbar } from "react-bootstrap";

/* Routing */
import { LinkContainer } from "react-router-bootstrap";

/* Redux */
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

class Navigeringsbar extends Component {

  render() {
    const { user, isAuthenticated } = this.props.auth;
    /* Hva som vises om brukeren er logget inn */
    const unauthorizedLinks = () => {
      return (
        <Nav className="ml-auto">
          <LinkContainer to="/logginn">
            <Nav.Link eventKey={2}>Logg inn</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/registrering">
            <Nav.Link>Registrering</Nav.Link>
          </LinkContainer>
        </Nav>
      );
    };

    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
        style={{ height: "60px" }}
        onMouseEnter={() => console.log("navbar", user, isAuthenticated)} //for testing av redirects
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Logo />
        {isAuthenticated ? (
          <Navbar.Collapse id="responsive-navbar-nav">
            <SearchBar />
            <DropdownButton name={user} logout={this.props.logout} />
          </Navbar.Collapse>
        ) : (
          unauthorizedLinks()
        )}
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navigeringsbar);
