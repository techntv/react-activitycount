import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Member from './components/Member.jsx';
import jQuery from 'jquery';
global.jQuery = jQuery;
global.$ = jQuery;

let Bootstrap = require('bootstrap');
import 'bootstrap/dist/css/bootstrap.min.css';

import 'font-awesome/css/font-awesome.min.css';

// ReactDOM.render(
//     <App />,
//     document.getElementById('app')
// );

ReactDOM.render(
    <Member admin={true}
            name="Edna Welch"
            email="edna.welch88@example.com"
            thumbnail="https://randomuser.me/api/portraits/women/90.jpg"
            makeAdmin={(email) => console.log(email)}/>,
    document.getElementById('app')
);