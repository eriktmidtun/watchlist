import React from "react";

/* Styling */
import { Row, Col, Card } from "react-bootstrap";

/* Blir rendret om ingen av de andre pathene passer. feks watchlist.socail/eksempel skal komme hit */
const NotFound = () => {
  return (
    <Row className="justify-content-center">
      <Col xs={{ span: "12" }}>
        <Card style={{ padding: "32px" }}>
          <Card.Title style={{ textAlign: "center", fontSize: "2em" }}>
            404 - side ikke funnet
          </Card.Title>
          <p>Bruk navigeringsbaren over til å komme til riktig side</p>
        </Card>
      </Col>
    </Row>
  );
};

export default NotFound;
