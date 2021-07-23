import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Nav from './compenents/Nav'

function App() {
  return (
  <Router>
    <div>
      <Nav />
      <h1 className = "text-4xl text-center text-blue-500">Hello World</h1>
    </div>
  </Router>
  );
}

export default App;
