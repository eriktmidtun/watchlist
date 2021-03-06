import React, { Component } from "react";

/* Components */
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

/*** 
 * Navigationbar.
 * Is always visible on top of the page.
 * Changes depending on logged in or out
 */
class NavigationBar extends Component {
  render() {
    const { user, isAuthenticated } = this.props.auth;
    /* Renders if not logged in */
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

export default connect(mapStateToProps, { logout })(NavigationBar);
