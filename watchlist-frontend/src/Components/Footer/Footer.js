import React from "react";

/* Styling */
import { Row, Container } from "react-bootstrap";
import "./styles.css";

/* Components */
import DBlogo from "./DBlogo";

/*** 
 * Footer.
 * Renders a footer in the bottom of the screen
 */
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
