import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "../Home/Home";
import CreateBusiness from "../CreateBusiness/CreateBusiness";
import HeaderContainer from "../Header/HeaderContainer";
import SignupContainer from "../Signup/SignupContainer";
import SearchBusinesses from "../SearchBusinesses/SearchBusinesses";
import LoginContainer from "../Login/LoginContainer";
import EditBusinessContainer from "../EditBusiness/EditBusinessContainer";
import ProtectedRoute from "../Routes/ProtectedRoute";
import BusinessContainer from "../BusinessDetail/BusinessContainer";
import MyBusinessContainer from "../BusinessDetail/MyBusinessContainer";
import MyBusinessesContainer from "../Businesses/MyBusinessesContainer";
import ShowBusinessesContainer from "../Businesses/ShowBusinessesContainer";
import ReviewBusinessContainer from "../ReviewBusiness/ReviewBusinessContainer";

class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <Switch>
          {/* <Fragment> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/businesses" component={ShowBusinessesContainer} />

          <Route path="/business/:id" component={BusinessContainer} />
          <Route path="/my/business/:id" component={MyBusinessContainer} />
          <ProtectedRoute path="/biz/new" component={CreateBusiness} />
          <ProtectedRoute
            path="/user/:id/businesses"
            component={MyBusinessesContainer}
          />
          <ProtectedRoute
            path="/edit/business/:id"
            component={EditBusinessContainer}
          />
          <ProtectedRoute
            path="/review/business/:id"
            component={ReviewBusinessContainer}
          />

          <Route path="/search/businesses" component={SearchBusinesses} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/register" component={SignupContainer} />
          {/* </Fragment> */}
        </Switch>
      </div>
    );
  }
}

export default App;
