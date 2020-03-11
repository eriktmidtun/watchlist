import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import Anmeldelser from "./Anmeldelser";

const MediaDetailPage = () => {
  return (
    <React.Fragment>
    <Row className="justify-content-center">
      <Col xs={{ span: "12" }}>
        <Card style={{marginBottom: "32px", padding: "32px" }}>
        <Container>
        <Row className="justify-content-center">
        <Col xs="9">
        <Card.Title style={{ textAlign: "left", fontSize: "2em", marginRight:"auto" }}>
            Film1
          </Card.Title>
        </Col>
        <Col xs="3" classN>
          <Button>Vil se</Button>
          <Button>Har sett</Button>
        </Col>
        </Row>
        <Row>
        <Col xs="3" classN>
          <Image></Image>
        </Col>
        Her kommer filmdetaljer
        </Row>
        </Container>
        </Card>
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Col xs={{ span: "12" }}>
        <Anmeldelser />
      </Col>
    </Row>
  </React.Fragment>
  );
};

export default MediaDetailPage;
