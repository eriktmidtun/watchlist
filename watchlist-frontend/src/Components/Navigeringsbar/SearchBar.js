import React from 'react';
import { Button, Container, Row, InputGroup, Col, FormControl } from 'react-bootstrap';

const SearchBar = () => {
    return(
        <InputGroup  >
            <FormControl md="12"/>
            <Button variant="primary" >Søk</Button>
        </InputGroup>

    )
};

export default SearchBar;