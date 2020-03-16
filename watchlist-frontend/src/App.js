import React, { Component } from "react";

/* Styling */
import { Container } from "react-bootstrap";
import "./App.css";

/* Routing */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Components/Common/PrivateRoute";
import NotFound from "./Components/Common/NotFound";
import UautorisertFrontPage from "./Components/UautorisertFrontPage/UautorisertFrontPage";

/* Komponenter */
import Registrering from "./Components/UautorisertFrontPage/Registrering/Registrering";
import Logginn from "./Components/UautorisertFrontPage/Logginn/Logginn";
import FrontPage from "./Components/FrontPage/FrontPage";
import Navigeringsbar from "./Components/Navigeringsbar/Navigeringsbar";
import Profil from "./Components/Profil/Profil";
import SearchPage from "./Components/SearchPage/SearchPage";
import Footer from "./Components/Footer/Footer";
import MediaDetailPage from "./Components/SearchPage/MediaDetaljer/MediaDetailPage";

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
            <Container style={{padding:"30px"}}>
              <Switch>
                <PrivateRoute exact path="/" component={FrontPage} />
                <PrivateRoute path="/søk/:medium" component={SearchPage} />
                <PrivateRoute exact path="/profil" component={Profil} />
                <PrivateRoute exact path="/filmer/:id" component={MediaDetailPage} />
                <PrivateRoute exact path="/serier/:id" component={MediaDetailPage} />
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
                <Route component={NotFound}/>
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
