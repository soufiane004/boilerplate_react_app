import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import Routes from './config/Routes.js';
import 'normalize.css/normalize.css'
import './public/styles/styles.scss'


ReactDOM.render(
  <Router history={hashHistory} routes={Routes}></Router>,document.getElementById('root'));
