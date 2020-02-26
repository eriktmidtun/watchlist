import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col, Image } from 'react-bootstrap';
import './styles.css';
import Logo from './dbLogo';
import { LinkContainer } from 'react-router-bootstrap';

 function Footer() {
    return (
      <footer className="footer">
        <Container>
        <Row>
          <Col className="justify-content-sm-center">
            <LinkContainer to="/">
             <Logo/>
            </LinkContainer>
          </Col>
        </Row>
        </Container>   
      </footer>
    );
  }
  
  export default Footer; 
