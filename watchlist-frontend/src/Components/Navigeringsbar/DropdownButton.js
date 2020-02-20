import { ButtonGroup, Dropdown, Button} from 'react-bootstrap';
import React from 'react';

const DropdownButton_1 = () =>{

  const OnCLickNameButton = () => {
    console.log("Name Button pressed")
  }

  const OnCLickDropdown1 = () => {
    console.log("Dropdown action 1 pressed")
  }

  const OnCLickDropdown2 = () => {
    console.log("Dropdown action 2 pressed")
  }

  const OnCLickDropdown3 = () => {
    console.log("Dropdown action 3 pressed")
  }

  const OnCLickDropdown4 = () => {
    console.log("Dropdown action 4 pressed")
  }

    return (
        <Dropdown as={ButtonGroup} className="ml-auto">
        <Button 
          variant="primary"
          type="button"
          onClick={OnCLickNameButton}
        >Navn</Button>
        <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />
        <Dropdown.Menu alignRight>
          <Dropdown.Item onClick ={OnCLickDropdown1} href="#/action-1">Følger</Dropdown.Item>
          <Dropdown.Item onClick ={OnCLickDropdown2} href="#/action-2">Følgere</Dropdown.Item>
          <Dropdown.Item onClick ={OnCLickDropdown3} href="#/action-3">Innstillinger</Dropdown.Item>
          <Dropdown.Item onClick ={OnCLickDropdown4} href="#/action-4">Logg ut</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    )
};

export default DropdownButton_1

