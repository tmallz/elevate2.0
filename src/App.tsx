import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Nav from './compenents/Nav'
import Homepage from './pages/homepage'
import Login from './pages/login'
import Signup from './pages/signup'

function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Route exact path ='/'>
          <Homepage />
        </Route>
        <Route exact path ='/login'>
          <Login />
        </Route>
        <Route exact path ='/signup'>
          <Signup />
        </Route>
      </Router>
    </div>
  );
}

export default App;
