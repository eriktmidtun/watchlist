import React from "react";
import { Card, Row, Col } from "react-bootstrap/";

const Results = ({media}) => {
  return (
    <Row className="justify-content-center">
      <Col xs={{ span: "12" }}>
        <Card style={{ marginBottom: "32px", padding: "32px" }}>
          <Card.Title style={{ textAlign: "left", fontSize: "1em" }}>
            {media}
          </Card.Title>
        </Card>
      </Col>
    </Row>
  );
};

export default Results;
