import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Routes from '../routes';
import Footer from './footer';
import './index.css';
import Navigation from './navigation';

class PageLayout extends Component<{ location: any }> {
	public render() {

		const { location } = this.props

		return (
			<div className='content-contain'>
				<Navigation className={(location.pathname === '/' ? '' : ' landing' )}/>
				<div className='content'>
					<Routes />
					<Footer />
				</div>
			</div>
		)
	}
}

const TopNavWithRouter = withRouter(PageLayout as any)
export default TopNavWithRouter