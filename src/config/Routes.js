import React from 'react';
import Main from '../components/layouts/Main';
import Dashboard from '../containers/Dashboard/Dashboard.js'
import Detail from '../containers/Detail/Detail.js'
import Data from '../containers/Data/Data.js'


import Page1 from '../views/Page1.js';
import Page2 from '../views/Page2.js';


import Page3 from '../views/Page3.js';

import Login from '../containers/Login/Login.js'
import Auth from '../utils/Auth.js'



//import {Route, Router, IndexRedirect, browserHistory} from 'react-router';
import { Router, Route,hashHistory } from 'react-router';

//import {BrowserRouter as Router , Switch,Route } from 'react-router-dom';

function requireLogin() {
  console.log("requireLogin ")
  //if (!Auth.isUserAuthenticated()) {
    //console.log("not authenticated")
    //hashHistory.push("/");
  //}
};


function redirectToIndex() {
  console.log("redirectToIndex ")
  //if (!Auth.isUserAuthenticated()) {
    //hashHistory.push("/CFPBKM/#/reporting/synthese");
  //}
};

export default (
    <Router>
        <Route path="/" component={Login} history={hashHistory}/>

        <Route path="/" component={Main} >
            <Route path="dashboard" component={Dashboard} onEnter={requireLogin}/>
            <Route path="detail" component={Detail} onEnter={requireLogin}/>
            <Route path="data" component={Data} onEnter={requireLogin}/>
        </Route>
    </Router>
  );
