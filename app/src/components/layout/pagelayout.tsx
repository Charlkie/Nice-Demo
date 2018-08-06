import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Routes from '../routes';
import Footer, { MinFooter } from './footer';
import './index.css';
import Navigation from './navigation';

class PageLayout extends Component<{ location: any }> {
	public render() {

		const { location } = this.props
		console.log("LOCATION: ", location)
		return (
			<div className='content-contain'>
				<Navigation location={location.pathname}/>
				<div className='content'>
					<Routes />
					{ location.pathname === '/dashboard' ? (
						<MinFooter />
					) :
					(
						<Footer />
					)
					}
				</div>
			</div>
		)
	}
}

const TopNavWithRouter = withRouter(PageLayout as any)
export default TopNavWithRouter