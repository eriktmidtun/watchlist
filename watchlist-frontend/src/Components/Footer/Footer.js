import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import './styles.css';

function Footer() {
    return (
      <footer className="footer">
        <Container>
        <Row>
          <Col className="justify-content-sm-center">
            Her kommer logo til TheMovieDB om vi skal bruke deres API
          </Col>
        </Row>
        </Container>
      </footer>
    );
  }
  
  export default Footer;
