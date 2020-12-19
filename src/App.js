import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Menu from './Menu/Menu';
import HomePage from './HomePage/HomePage';
import LoginButton from './components/LoginButton';
import SignUpButton from './components/SignUpButton';
import SignOutButton from './components/SignOutButton';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Menu/>
      <div className="mainContainer">
        <Switch>

          <Route path="/db">
            <Dashboard/>
          </Route>

          <Route path="/">
            <HomePage/>
            <LoginButton/>
            <SignUpButton/>
            <SignOutButton/>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
