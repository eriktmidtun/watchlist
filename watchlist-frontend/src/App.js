import React from 'react';
import './App.css';
import Registrering from './Components/Registrering/Registrering';
import Loginn from './Components/Loginn/Loginn';
import Navigeringsbar from './Components/Navigeringsbar/Navigeringsbar';
import Footer from './Components/Footer/Footer';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navigeringsbar/>
      <Container>
        <Row className="justify-content-center">
          <Col lg="6" xs="12"  >
            <Registrering />
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
