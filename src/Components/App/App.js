import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "../Home/Home";
import CreateBusiness from "../CreateBusiness/CreateBusiness";
import HeaderContainer from "../Header/HeaderContainer";
import BusinessContainer from "../BusinessDetail/BusinessContainer";
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
            <Route
              exact
              path="/businesses"
              component={ShowBusinessesContainer}
            />
            <Route path="/business/:id" component={BusinessContainer} />
            <ProtectedRoute path="/business/new" component={CreateBusiness} />
            <Route path="/api/v2/auth/login" component={LoginContainer} />
            <Route path="/api/v2/auth/register" component={SignupContainer} />
          </Fragment>
        </Switch>
      </div>
    );
  }
}

export default App;
