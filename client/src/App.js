import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from './components/login';
import Register from './components/register';
import Jokes from './components/jokes';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/jokes" component={Jokes} />
      </div>
      </Router>
    );
  }
}

export default App;
