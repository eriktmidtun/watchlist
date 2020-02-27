import React from 'react';
import './App.css';
import UautorisertFrontPage from './Components/UautorisertFrontPage/UautorisertFrontPage';
import FrontPage from './Components/FrontPage/FrontPage';
import Navigeringsbar from './Components/Navigeringsbar/Navigeringsbar';
import NavBarAut from './Components/Navigeringsbar/NavBarAut';
import Footer from './Components/Footer/Footer';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  /* Switch,
  Route,
  Redirect,
  Link,
  useHistory,
  useLocation, */
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        {/*<Navigeringsbar/> */}
        <NavBarAut/>
        <Container style={{ minHeight: "100%"}}>
          <FrontPage />
          {/*<UautorisertFrontPage /> */}
        </Container>
        {/* <div style={{height:"200px"}}></div>
        <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
