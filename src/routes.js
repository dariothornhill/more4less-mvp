import React from 'react';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import User from './pages/User';
import App from  './pages/App';
import Ping from  './pages/Ping';

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/user" component={User} />
            <Route exact path="/ping" component={Ping} />
        </Switch>
    </Router>
);
