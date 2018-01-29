import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';

import '../styles/reset.css';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import Get_Started from './Get_Started';
import Home_Page from "./Home_Page";

const customHistory = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <Router history={customHistory}>
                <div>
                    <Route path='/login' component={Get_Started}/>
                    <Route path='/home' component={Home_Page}/>
                </div>
            </Router>
        )
    }
}

export default App;