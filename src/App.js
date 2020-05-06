import React from 'react';
 
import {BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from './components/Login/login';
import Patient from './components/Patient/patient';
import Hospital from './components/Hospital/hospital';

function App() {
  return (
     <Router>
       <Route path="/" component={Login} exact={true}/>
       <Route path="/patient" component={Patient}/>
       <Route path="/hospital" component={Hospital}/>
     </Router>
  );
}

export default App;
