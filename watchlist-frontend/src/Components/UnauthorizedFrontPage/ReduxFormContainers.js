import React from "react";

/* Styling */
import { Form, Alert } from "react-bootstrap/";

/* A container component for validation with Redux Form. */
export const RenderField = ({
  input,
  label,
  type,
  placeholder,
  name,
  meta: { touched, error }
}) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        name={name}
        value={input.value}
        onChange={input.onChange}
        isInvalid={touched && error}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  );
};

/* Component for showing error messages from the server to the user. */
export const BackendResponsMeldingsboks = ({ meta: { error } }) => {
  return (
    <Alert variant={"danger"} style={{ display: error ? "Block" : "None" }}>
      {error}
    </Alert>
  );
};
