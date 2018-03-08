import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './container/login/login.js';
import Home from './container/home/home.js';
import Error from './container/error/error.js';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import {
    HashRouter,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom'
import App from './App';
ReactDOM.render(
    <App/>, document.getElementById('root'));
registerServiceWorker();
