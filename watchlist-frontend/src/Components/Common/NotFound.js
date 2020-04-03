import React from "react";

/* Styling */
import { Row, Col, Card } from "react-bootstrap";

/*** 
 * Simple 404- page. Can take in a custom error massage.
 * Should be renderd if the URL route does not have a component associated with it
 */
const NotFound = ({ error }) => {
  return (
    <Row className="justify-content-center">
      <Col xs={{ span: "12" }}>
        <Card style={{ padding: "32px" }}>
          <Card.Title style={{ textAlign: "center", fontSize: "2em" }}>
            404 - side ikke funnet
          </Card.Title>
          <p>
            {error
              ? error
              : "Bruk navigeringsbaren over til å komme til riktig side"}
          </p>
        </Card>
      </Col>
    </Row>
  );
};

export default NotFound;
