import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './auth/login';
import Register from './auth/register';
import Dashboard from './dash/dashboard';
import Landing from './landing/index';

const Routes: React.SFC<{}> = () => (
    <Switch>
        <Route exact={true} path='/' component={Landing}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Register}/>
        <Route path='/dashboard' component={Dashboard}/>
    </Switch>
)

export default Routes
