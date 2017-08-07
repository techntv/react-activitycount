import React from 'react';
import ReactDOM from 'react-dom';
import SkiDayList from './components/SkiDayList.jsx';


import jQuery from 'jquery';
global.jQuery = jQuery;
global.$ = jQuery;

let Bootstrap = require('bootstrap');
import 'bootstrap/dist/css/bootstrap.min.css';

import 'font-awesome/css/font-awesome.min.css';
window.React = React;
ReactDOM.render(<SkiDayList days={
    [
        {
            resort: "Squaw Valley",
            date: new Date("1/2/2016"),
            powder: true,
            backcountry: false
        },
         {
            resort: "Kirkwood",
            date: new Date("3/28/2016"),
            powder: false,
            backcountry: false
        },
         {
            resort: "Mt. Tallac",
            date: new Date("4/2/2016"),
            powder: false,
            backcountry: true
        }
    ]
    }/>, 
            document.getElementById('app')
);