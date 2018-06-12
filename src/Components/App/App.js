import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Home from '../Home/Home';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import ShowBusinesses from '../Businesses/ShowBusinesses';

class App extends Component {
  render() {
      return (
          <Router>
              <div>
                  <Header />
                  <Route exact path='/' component={Home} />
                  <Route exact path='/api/v2/business/all' component={ShowBusinesses} />
                  <Route path='/api/v2/auth/login' component={Login} />
                  <Route path='/api/v2/auth/register' component={Signup} />
                  <Footer />
              </div>
          </Router>
      );
  }
}

export default App;

