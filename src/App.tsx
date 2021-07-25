import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Nav from './compenents/Nav'
import Homepage from './pages/homepage'

function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Route exact path ='/'>
          <Homepage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
