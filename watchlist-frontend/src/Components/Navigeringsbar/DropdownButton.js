import React, { Component } from "react";

/* Styling */
import { ButtonGroup, Dropdown, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
/* Routing */
import { withRouter } from "react-router-dom";

class DropdownButton extends Component {
  render() {
    const OnCLickDropdown = () => {
      this.props.logout();
    };
    return (
      <Dropdown as={ButtonGroup} className="ml-auto">
        <Button
          onClick={() => this.props.history.push("/profil")}
          variant="primary"
          type="button"
          style={{ minWidth: "200px" }}
        >
          {this.props.name ? this.props.name.first_name : "Placeholder"}
        </Button>
        <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />
        <Dropdown.Menu alignRight>
          <LinkContainer to="/profil">
            <Dropdown.Item>Profil</Dropdown.Item>
          </LinkContainer>
          {/* <Dropdown.Item onClick={OnCLickDropdown1} deactivate>
            Følger
          </Dropdown.Item>
          <Dropdown.Item onClick={OnCLickDropdown2} deactivate>
            Følgere
          </Dropdown.Item> */}
          <Dropdown.Item onClick={OnCLickDropdown}>Logg ut</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default withRouter(DropdownButton);
