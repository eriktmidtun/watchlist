
import React from 'react';
import {Card, Button, Form } from 'react-bootstrap/';

const Loginn = () => {
  return (
    <Card style={{ margin: '2em', padding: '2em'}}>
      <Card.Title style={{textAlign: 'center', fontSize: '2em'}}>Log inn</Card.Title>
        <Form>
      <Form.Group controlId="formName">
        <Form.Label>Fornavn</Form.Label>
        <Form.Control type="email" placeholder="navn@domene.com" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Passord</Form.Label>
        <Form.Control type="password" placeholder="Passord" />
      </Form.Group>
      <Button variant="primary" type="submit" block>
        Log inn
      </Button>
    </Form>
    <a style={{textAlign: 'right', marginTop: '0.5em'}}href="#registrering">Mangler du konto? Registrering</a>
    </Card>
  );
};

export default Loginn;


