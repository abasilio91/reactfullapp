import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import Dash from '../pages/Dash';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/dash" component={Dash} />
        </Switch>
    )
}

export default Routes;