import React from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import "./styles.css";

import DBlogo from "./DBlogo";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-sm-center">
          <DBlogo />
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
