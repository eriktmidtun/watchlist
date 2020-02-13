
import React from 'react';
import {Card, Button, Form } from 'react-bootstrap/';

const Registrering = () => {
  return (
    <Card style={{ margin: '2em', padding: '2em'}}>
      <Card.Title style={{textAlign: 'center', fontSize: '2em'}}>Registrering</Card.Title>
        <Form>
      <Form.Group controlId="formName">
        <Form.Label>Fornavn</Form.Label>
        <Form.Control type="email" placeholder="Skriv inn fornavn" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Etternavn</Form.Label>
        <Form.Control type="email" placeholder="Skriv inn etternavn" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Epost</Form.Label>
        <Form.Control type="email" placeholder="Skriv inn epost" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Passord</Form.Label>
        <Form.Control type="password" placeholder="Passord" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword2">
        <Form.Label>Gjenta passord</Form.Label>
        <Form.Control type="password" placeholder="Passord" />
      </Form.Group>
      <Button variant="primary" type="submit" block>
        Registrer
      </Button>
    </Form>
    <a style={{textAlign: 'right', marginTop: '0.5em'}}href="#loginn">Allerede en konto? Log inn</a>
    </Card>
  );
};

export default Registrering;


