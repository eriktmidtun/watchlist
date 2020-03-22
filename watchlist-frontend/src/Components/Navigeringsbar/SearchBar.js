import React, { Component } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

/* Routing */
import {LinkContainer} from 'react-router-bootstrap';
import { withRouter } from 'react-router-dom'

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      query : ''
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  /* Søk med enter knappen */
  handleKeyPress(target){
    if(target.charCode===13 && this.state.query !== ''){
      this.props.history.push("/søk/filmer?q=" + this.state.query)
    }
  }

  render() {
    return (
      <InputGroup style={{ width: "50%", marginLeft: "0%" }}>
        <FormControl
          ref={n => {
            this.inputNode = n;
          }}
          placeholder="Søk etter filmer og serier"
          onChange={() => this.setState({query: this.inputNode.value})}
          onKeyPress={this.handleKeyPress}
        />
        <LinkContainer to={"/søk/filmer?q=" + this.state.query}>
          <Button variant="primary">
            Søk
          </Button>
        </LinkContainer>
      </InputGroup>
    );
  }
}

export default withRouter(SearchBar);
