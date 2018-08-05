import React, { Component, Fragment } from 'react';
import Content from './content';
import Head from './head';
import './index.css';

export default class Landing extends Component {
	public render() {
		return (
			<Fragment>
				<Head />
				<div>
					<Content />
				</div>
			</Fragment>
		)
	}
}

// remove div from outer content