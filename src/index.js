import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';


import jQuery from 'jquery';
global.jQuery = jQuery;
global.$ = jQuery;

let Bootstrap = require('bootstrap');
import 'bootstrap/dist/css/bootstrap.min.css';

import 'font-awesome/css/font-awesome.min.css';

// ReactDOM.render(
//         <Router>
//             <div>
           
//             <Switch>
//                  <Route exact path='/' component={App}/>
//                  <Route path="/list-days" component={App}>
//                     <Route path=":filter" component={App} />
//                  </Route>
//                  <Route path="/add-day" component={App}/>
//                  <Route path='/about' component={About}/>
//                  <Route component={Page404}/>
//             </Switch>
//            </div>
//         </Router>,
//         document.getElementById('app')
// );

ReactDOM.render(
    <App />,
    document.getElementById('app')
);