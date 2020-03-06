import React from "react";

/* Styling */
import { Row, Col, Card } from "react-bootstrap";

const NotFound = () => {
  return (
    <Row className="justify-content-center">
      <Col xs={{ span: "12" }}>
        <Card style={{ margin: "2em", padding: "2em" }}>
          <Card.Title style={{ textAlign: "center", fontSize: "2em" }}>
            404 side ikke funnet
          </Card.Title>
        </Card>
      </Col>
    </Row>
  );
};

export default NotFound;
