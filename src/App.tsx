import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Nav from './compenents/Nav'

function App() {
  return (
  <Router>
    <div>
      <Nav />
      
    </div>
  </Router>
  );
}

export default App;
