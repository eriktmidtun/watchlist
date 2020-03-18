import React, { Component } from "react";

/* Styling */
import { ButtonGroup, Dropdown, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default class DropdownButton_1 extends Component {
  render() {
    /* const OnCLickNameButton = () => {
      console.log("Name Button pressed");
    };

    const OnCLickDropdown1 = () => {
      console.log("Dropdown action 1 pressed");
    };

    const OnCLickDropdown2 = () => {
      console.log("Dropdown action 2 pressed");
    }; */

    const OnCLickDropdown = () => {
      this.props.logout();
    };
    return (
      <Dropdown as={ButtonGroup} className="ml-auto">
          <Button href="/profil" variant="primary" type="button" style={{ minWidth: "200px" }}>
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
