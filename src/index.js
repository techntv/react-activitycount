import React from 'react';
import ReactDOM from 'react-dom';
// import SkiDayList from './components/SkiDayList.jsx';
// import SkiDayCount from './components/SkiDayCount.jsx';
import App from './components/App.jsx';
import { Router, Route, hashHistory } from 'react-router';

import jQuery from 'jquery';
global.jQuery = jQuery;
global.$ = jQuery;

let Bootstrap = require('bootstrap');
import 'bootstrap/dist/css/bootstrap.min.css';

import 'font-awesome/css/font-awesome.min.css';
window.React = React;
ReactDOM.render(<App />, document.getElementById('app'));

// ReactDOM.render(<SkiDayCount />, 
//             document.getElementById('app')
// );