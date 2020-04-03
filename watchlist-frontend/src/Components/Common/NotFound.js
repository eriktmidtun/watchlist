import React from "react";

/* Styling */
import { Row, Col, Card } from "react-bootstrap";

/* Is rendered if no other paths fit (e.g.: watchlist.social/example would trigger this). */
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
