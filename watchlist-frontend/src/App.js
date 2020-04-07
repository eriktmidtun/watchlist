import React, { Component } from "react";

/* Styling */
import { Container } from "react-bootstrap";
import "./App.css";

/* Routing */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Components/Common/PrivateRoute";
import NotFound from "./Components/Common/NotFound";
import UnauthorizedFrontPage from "./Components/UnauthorizedFrontPage/UnauthorizedFrontPage";

/* Components */
import Registration from "./Components/UnauthorizedFrontPage/Registration/Registration";
import Login from "./Components/UnauthorizedFrontPage/Login/Login";
import FrontPage from "./Components/FrontPage/FrontPage";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Profil from "./Components/Profile/Profile";
import SearchPage from "./Components/SearchPage/SearchPage";
import Footer from "./Components/Footer/Footer";
import MediaDetailPage from "./Components/SearchPage/MediaDetails/MediaDetailPage";

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
            <NavigationBar />
            <Container style={{ padding: "30px" }}>
              <Switch>
                <PrivateRoute exact path="/" component={FrontPage} />
                <PrivateRoute path="/søk/:medium" component={SearchPage} />
                <PrivateRoute exact path="/profil" component={Profil} />
                <PrivateRoute
                  exact
                  path="/filmer/:id"
                  component={MediaDetailPage}
                />
                <PrivateRoute
                  exact
                  path="/serier/:id"
                  component={MediaDetailPage}
                />
                <UnauthorizedFrontPage
                  exact
                  path="/logginn"
                  component={Login}
                />
                <UnauthorizedFrontPage
                  exact
                  path="/registrering"
                  component={Registration}
                />
                <Route component={NotFound} />
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
