
import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Registrering = () => {
  return (
    <Container bg="primary" text="white" className="text-center p-3">
        Registrering
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
      <Button variant="primary" type="submit">
        Registrer
      </Button>
    </Form>
    </Container>
  );
};

export default Registrering;


