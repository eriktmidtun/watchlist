
import React, { Component } from 'react';
import {Card, Button, Form } from 'react-bootstrap/';
import { Link } from 'react-router-dom';


class Registrering extends Component {
  constructor() {
    super(); 
    this.state = {
        first_name: '',
        first_nameValid: false,
        last_name: '',
        last_nameValid: false,
        email: '',
        emailValid: false,
        isEmailUsed: false,
        password: '',
        passwordValid:false,
        repeatPassword: '',
        repeatPasswordValid:false,
        isPasswordEqual:false,
        submited: false,
        error: {

        }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this)

  }


  addAccount(){
    // JSON fetch

    /* const handleErrors = (response) => {
      if(!response.ok){
        console.log(response.json())
        throw Error(response)
      }
      return response
    } */

    var req =    {
      "username":this.state.email,
      "email":this.state.email,
      "password":this.state.password,
      "first_name":this.state.first_name,
      "last_name":this.state.last_name,
     }

    fetch(`http://localhost:8000/api/auth/register`, {method:'POST', mode:'cors',
  headers:{"Content-Type":"application/json"}, body:JSON.stringify(req)})
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        if (response.status === 400){
          this.setState({isEmailUsed: true})
          throw new Error('Email in use'); 
        }
        else {
          throw new Error('Something went wrong ...');
      }
    })
      .catch(jsonError => this.setState({error: jsonError}, () => console.log(jsonError)))

  }


  handleSubmit(event) {

    // er input valid?
    if (this.state.first_nameValid && this.state.last_nameValid && this.state.emailValid && this.state.passwordValid 
      && this.state.repeatPasswordValid && this.state.isPasswordEqual && !this.state.isEmailUsed) {
      console.log("success")
      this.addAccount()
      if (!this.state.isEmailUsed){
          console.log("email used")

      }
      
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
    this.setState({isEmailUsed:false})
    const target = event.target;
    const value = target.value;
    const name = target.name;
    //console.log(name,value);
    this.setState({
      [name]: value,

    });
    // regexp på hvordan input kan være
    const patterns = {
      last_name: /[A-Z][a-zA-Z]{1,100}$/, //stor bokstav som første bokstav i hvert navn
      first_name:  /[A-Z][a-zA-Z]{1,100}$/, // /[A-Z]$/,
      email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    };

    this.setState({[name + 'Valid']: patterns[name].test(value)});
    console.log({[name + 'Valid']: patterns[name].test(value)})

  }
   
  handlePasswordInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    const patterns = {
      password:   /\S{2,100}$/,
      repeatPassword: /\S{2,100}$/,
    }

    if( name === "password"){
      this.setState({password: value})
      this.setState({passwordValid : patterns["password"].test(value)},
      () => this.setState({isPasswordEqual: (this.state.password === this.state.repeatPassword)}))
    
    }
    else{
      this.setState({repeatPassword: value})
      this.setState({repeatPasswordValid : patterns["repeatPassword"].test(value)},
      () => this.setState({isPasswordEqual: (this.state.password === this.state.repeatPassword)}))
    }
  }

  render() {
    return (
      <Card style={{ margin: '2em', padding: '2em'}}>
        <Card.Title style={{textAlign: 'center', fontSize: '2em'}}>Registrering</Card.Title>
          <Form noValidate onSubmit={this.handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Fornavn</Form.Label>
          <Form.Control
            required
            type="text"
            name="first_name"
            placeholder="'John'"
            onChange={this.handleInputChange}
            isInvalid = {(!this.state.first_nameValid && this.state.first_name.length > 0)}
            />
        <Form.Control.Feedback type="invalid">Navn ugyldig. Skriv på formen John</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Etternavn</Form.Label>
          <Form.Control 
            required  
            type="text"
            name="last_name"
            placeholder="'Doe'"
            onChange={this.handleInputChange}
            isInvalid = {(!this.state.last_nameValid && this.state.last_name.length > 0)}
          />
          <Form.Control.Feedback type="invalid">Navn ugyldig. Skriv på formen Doe</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Epost</Form.Label>
          <Form.Control 
            required
            type="email"
            name="email" 
            placeholder="navn@domene.com"
            onChange={this.handleInputChange}
            isInvalid = {(!this.state.emailValid && this.state.email.length > 0) || this.state.isEmailUsed}         
         />
          <Form.Control.Feedback type="invalid">Email ugyldig eller i bruk</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Passord</Form.Label>
          <Form.Control t
            required
            type="password"
            name="password" 
            placeholder="Passord" 
            onChange={this.handlePasswordInputChange}
            isInvalid = {(!this.state.passwordValid && this.state.password.length > 0)}
          />
        <Form.Control.Feedback type="invalid">Passord for kort</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicPassword2">
          <Form.Label>Gjenta passord</Form.Label>
          <Form.Control 
            required
            type="password"
            name="repeatPassword" 
            placeholder="Passord"
            onChange={this.handlePasswordInputChange}
            isInvalid = {(!this.state.isPasswordEqual && this.state.repeatPassword.length > 0)}
          />
          <Form.Control.Feedback type="invalid">Passordene er ikke identiske</Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit" block>
          Registrer
        </Button>
      </Form>
      <p style={{textAlign: 'right', marginTop: '0.5em'}}>Allerede en konto?
      <Link to="/logginn"> Log inn</Link></p>
      </Card>
      );
    }
}

export default Registrering;


