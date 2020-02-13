import React from 'react';
import './App.css';
import Registrering from './Components/Registrering/Registrering';
import Loginn from './Components/Loginn/Loginn';
import Navigeringsbar from './Components/Navigeringsbar/Navigeringsbar';
import Footer from './Components/Footer/Footer';
import { Row, Col, Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  /*Redirect,
  Link,
  useHistory,
  useLocation, */
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigeringsbar/>
        <Container>
          <Row className="justify-content-center">
            <Col lg="6" xs="12">
              <Switch>
                <Route path="/" exact component={Registrering} /> {/* midlertidig path for testing av registreringskjema, må sette opp redirects senere */}
                <Route path="/registrering"  component={Registrering} />
                <Route path="/loginn" component={Loginn} />
              </Switch>
            </Col>
          </Row>
        </Container>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
