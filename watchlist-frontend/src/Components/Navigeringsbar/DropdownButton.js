import { ButtonGroup, Dropdown, Button } from "react-bootstrap";
import React, { Component } from "react";

class DropdownButton_1 extends Component {

  render() {
    const OnCLickNameButton = () => {
      console.log("Name Button pressed");
    };

    const OnCLickDropdown1 = () => {
      console.log("Dropdown action 1 pressed");
    };

    const OnCLickDropdown2 = () => {
      console.log("Dropdown action 2 pressed");
    };

    const OnCLickDropdown3 = () => {
      this.props.func();
    };
    return (
      <Dropdown as={ButtonGroup} className="ml-auto" >
        <Button variant="primary" type="button" onClick={OnCLickNameButton} style={{minWidth: "200px"}}>
          {this.props.name ? this.props.name.first_name  : "Placeholder"}
        </Button>
        <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />
        <Dropdown.Menu alignRight>
          {/* <Dropdown.Item onClick={OnCLickDropdown1} deactivate>
            Følger
          </Dropdown.Item>
          <Dropdown.Item onClick={OnCLickDropdown2} deactivate>
            Følgere
          </Dropdown.Item> */}
          <Dropdown.Item onClick={OnCLickDropdown3} >
            Logg ut
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default DropdownButton_1;
