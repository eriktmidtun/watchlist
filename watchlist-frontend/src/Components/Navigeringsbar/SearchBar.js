import React, { Component } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { Redirect } from "react-router-dom";

class SearchBar extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    return (
      <Redirect
        to={{
          pathname: "/søk/filmer",
          state: { query: this.inputNode.value }
        }}
      />
    );
  };

  render() {
    return (
      <InputGroup style={{ width: "40%", marginLeft: "0%" }}>
        <FormControl
          ref={n => {
            this.inputNode = n;
          }}
          placeholder="Søk etter filmer og serier"
        />
        <Button onClick={this.handleClick} variant="primary">
          Søk
        </Button>
      </InputGroup>
    );
  }
}

export default SearchBar;
