import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
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
class App extends React.Component {
  render() {
    return (
        <Provider >
            <HashRouter>
                <Switch>
                    <Route path='/' exact component={Login}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/error' component={Error}/>
                    <Route component={Login}/>
                </Switch>
            </HashRouter>
        </Provider>
    );
  }
}
export default App;


