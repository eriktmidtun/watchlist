import UautorisertFrontPage from './Components/UautorisertFrontPage/UautorisertFrontPage';
import FrontPage from './Components/FrontPage/FrontPage';
import Navigeringsbar from './Components/Navigeringsbar/Navigeringsbar';
import Footer from './Components/Footer/Footer';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import React, { Component } from 'react';

import PrivateRoute from './Components/Common/PrivateRoute';

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';
import history from '../history';


class App extends Component {
  // added
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
        <div className="App">
          <Navigeringsbar />
          <Container style={{ minHeight: "100%"}}>
              <Switch>
                <PrivateRoute exact path='/' component={FrontPage} /> 
                <UautorisertFrontPage /> 
              </Switch>
          </Container>
          <Footer/> 
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;



/* function App() {
  return (
    <Router>
      
        <Navigeringsbar/>
        <Container style={{ minHeight: "100%"}}>
           <FrontPage /> 
          <UautorisertFrontPage />
        </Container>
         <div style={{height:"200px"}}></div>
        <Footer/> 
      </div>
    </Router>
  );
}

export default App; */