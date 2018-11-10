import React from 'react';
import Main from '../components/layouts/Main';


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
            <Route path="reporting/synthese" component={Page1} onEnter={requireLogin}/>
            <Route path="reporting/historique" component={Page2} onEnter={requireLogin}/>
            <Route path="administration" component={Page3} onEnter={requireLogin}/>
        </Route>
    </Router>
  );
