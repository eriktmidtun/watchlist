import React from 'react';
import { Button, Container, Row, InputGroup, Col, FormControl } from 'react-bootstrap';

const SearchBar = () => {
    return(
        <InputGroup style={{width: "30%"}} className="mx-auto" >
            <FormControl placeholder="Søk etter filmer og serier" />
            <Button variant="primary" >Søk</Button>
        </InputGroup>

    )
};

export default SearchBar;