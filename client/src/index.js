// Import dependencies
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

// Import Bootstrap
import $ from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Import custom CSS
import './styles/custom.css';
import './assets/bearalegal_face.png';

ReactDOM.render(<App />, document.getElementById('root'));