import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';
import './index.css';

export default class Login extends Component {

	public render() {
		return (
			<div className='ui form-container container'>
				<div className='row'>
					<h1>Signup to test out API's</h1>
					<p>Email us to see if you eligable for an account</p>
					<div>
						<Input placeholder='Search...'/>
						<Button >send</Button>
					</div>
				</div>
			</div>
		)
	}
}
