import React from 'react';
import ReactDOM from 'react-dom';
import SkiDayCount from './components/SkiDayCount.jsx';


import jQuery from 'jquery';
global.jQuery = jQuery;
global.$ = jQuery;

let Bootstrap = require('bootstrap');
import 'bootstrap/dist/css/bootstrap.min.css';

import 'font-awesome/css/font-awesome.min.css';
window.React = React;
ReactDOM.render(<SkiDayCount total={50}
                             powder={20}
                             backcountry={10}
                             goal={100}/>, 
            document.getElementById('app')
);