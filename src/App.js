import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainView from './views/Main.js';
import MinorView from './views/Minor.js';



import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter as Router , Switch,Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router basename={'/BKGMODELS'}>
               <Switch>
                  <Route exact path='/' component={MainView} />
                  <Route path="/main" component={MainView}/>
                  <Route path="/minor" component={MinorView}/>
               </Switch>
      </Router>
    );
  }
}

export default App;
