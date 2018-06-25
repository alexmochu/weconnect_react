import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "../Home/Home";
import HeaderContainer from "../Header/HeaderContainer";
import Footer from "../Footer/Footer";
import SignupContainer from "../Signup/SignupContainer";
import LoginContainer from "../Login/LoginContainer";
import ProtectedRoute from "../Routes/ProtectedRoute";
import ShowBusinessesContainer from "../Businesses/ShowBusinessesContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Fragment>
            <HeaderContainer />
            <Route exact path="/" component={Home} />
            <ProtectedRoute
              exact
              path="/api/v2/business/all"
              component={ShowBusinessesContainer}
            />
            <Route path="/api/v2/auth/login" component={LoginContainer} />
            <Route path="/api/v2/auth/register" component={SignupContainer} />
            <Footer />
          </Fragment>
        </Switch>
      </div>
    );
  }
}

export default App;
