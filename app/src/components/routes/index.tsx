import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppContext from '../../contexts/AppContext';
import Login from './auth/login';
import Register from './auth/register';
import Dashboard from './dash/dashboard';
import Landing from './landing/index';

class Routes extends Component {

	public state = {
		avatarUrl: null,
		signedIn: false,
		token: null
	}

	public signinUser = (userInfo: any) => {
		this.setState({ ...userInfo })
	}

	public render() {
		return (
			<AppContext.Provider value={{ ...this.state, signinUser: this.signinUser }}>
				<Switch>
					<Route exact={true} path='/' component={Landing}/>
					<Route path='/login' component={Login}/>
					<Route path='/signup' component={Register}/>
					<Route path='/dashboard' component={Dashboard}/>
				</Switch>
			</AppContext.Provider>
		)
	}
}

export default Routes