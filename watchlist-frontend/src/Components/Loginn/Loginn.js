
import React from 'react';
import {Card, Button, Form } from 'react-bootstrap/';
import { Link } from 'react-router-dom';

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
    <Link to="/registrering" style={{textAlign: 'right', marginTop: '0.5em'}}>
        Mangler du konto? Registrering
    </Link>
    </Card>
  );
};

export default Loginn;


