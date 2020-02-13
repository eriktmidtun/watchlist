
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class Registrering extends Component {
  constructor() {
    super();
    this.state = {
        name: '',
        nameValid: false,
        email: '',
        emailValid: false,
        password: '',
        passwordValid:false,
        repeatPassword: '',
        repeatPasswordValid:false,
        submited: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this)

  }

  handleSubmit(event) {

    // er input valid?
    if (this.state.nameValid && this.state.emailValid && this.state.phoneValid && this.state.areacode) {

    }
    else {
        console.log("Failed");
        // gir feilmelding i form av farger på inputboks
        this.setState({submited:true})
        /* console.log("Input not valid") */
    }
    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    //console.log(name,value);
    this.setState({
      [name]: value,

    });


    const patterns = {
      lastName: /[A-Z][a-zA-Z]{1,100}$/, //stor bokstav som første bokstav i hvert navn
      firstName:  /[A-Z][a-zA-Z]{1,100}$/, // /[A-Z]$/,
      password:   /\S{2,100}$/,
      email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

      //regexp med unicode support, siden vi er i norge og kan bruke ø æ å
    };
    //console.log(patterns[name])
    this.setState({[name + 'Valid']: patterns[name].test(value)});
    console.log({[name + 'Valid']: patterns[name].test(value)})

  }

  handlePasswordInputChange(event){
    //this.setState({[this.state.repeatPasswordValid]: (event.target.password.value === event.target.repeatPassword.value)});
    //console.log([repeatPasswordValid])
    if (this.state.repeatPasswordValid){

    }
  }

  handleClassNames(input) {}

  render() {
    return (
      <Container bg="primary" text="white" className="text-center p-3">
          Registrering
          <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Fornavn</Form.Label>
          <Form.Control
            required
            type="text"
            name="firstName"
            placeholder="Skriv inn fornavn"
            onChange={this.handleInputChange}
            />
          <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Etternavn</Form.Label>
          <Form.Control 
            required  
            type="text"
            name="lastName"
            placeholder="Skriv inn etternavn"
            onChange={this.handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Epost</Form.Label>
          <Form.Control 
            required
            type="email"
            name="email" 
            placeholder="Skriv inn epost"
            onChange={this.handleInputChange}
            
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Passord</Form.Label>
          <Form.Control t
            required
            type="password"
            name="password" 
            placeholder="Passord" 
            onChange={this.handlePasswordInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword2">
          <Form.Label>Gjenta passord</Form.Label>
          <Form.Control 
            required
            type="password"
            name="repeatPassword" 
            placeholder="Passord"
            onChange={this.handlePasswordInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Registrer
        </Button>
      </Form>
      </Container>
    );
    }

}

export default Registrering;


