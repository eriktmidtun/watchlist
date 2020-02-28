import React, { Component } from "react";

/* Styling */
import { Container } from "react-bootstrap";
import "./App.css";

/* Routing */
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./Components/Common/PrivateRoute";
import UautorisertFrontPage from "./Components/UautorisertFrontPage/UautorisertFrontPage";

/* Komponenter */
import Registrering from "./Components/UautorisertFrontPage/Registrering/Registrering";
import Logginn from "./Components/UautorisertFrontPage/Logginn/Logginn";
import FrontPage from "./Components/FrontPage/FrontPage";
import Navigeringsbar from "./Components/Navigeringsbar/Navigeringsbar";
import Footer from "./Components/Footer/Footer";

/* Redux */
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import history from "./history";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="App">
            <Navigeringsbar />
            <Container>
              <Switch>
                <PrivateRoute exact path="/" component={FrontPage} />
                <UautorisertFrontPage
                  exact
                  path="/logginn"
                  component={Logginn}
                />
                <UautorisertFrontPage
                  exact
                  path="/registrering"
                  component={Registrering}
                />
              </Switch>
            </Container>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
