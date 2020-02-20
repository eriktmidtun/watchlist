import { ButtonGroup, Dropdown, Button} from 'react-bootstrap';
import React from 'react';

const DropdownButton_1 = () =>{

    return (
        <Dropdown as={ButtonGroup} className="ml-auto">
        <Button variant="primary">Navn</Button>
        <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />
        <Dropdown.Menu alignRight>
          <Dropdown.Item href="#/action-1">Følger</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Følgere</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Innstillinger</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Logg ut</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    )
};

export default DropdownButton_1

