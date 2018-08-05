
import React, { Component } from 'react';
import { Button, Container, Divider, Grid } from 'semantic-ui-react';

export default class Footer extends Component {

	public state = {
		colOne: ['React', 'is the best', 'javascript', 'framework'],
		colTwo: ['React', 'is the best', 'javascript', 'framework']
	}
	
	public render() {
		return (
			<Container className='footer-contain' textAlign='center'>
				<Grid className='footer' stackable={true} style={{ paddingTop: '20px' }}>   
					<Links links={this.state.colOne} title='Javascript'/> 
					<Links links={this.state.colTwo} title='Python'/>                 
					<Grid.Column width={7} floated='right'>
					<ul>
						<h4>Support me</h4>
						<p>Support is very much appreciated, any contributions will go towards
						   my various hospital bills that have arisen from making awesome websites
						</p>
						<Button primary={true} color='blue'>Donate Today</Button>
					</ul>
					</Grid.Column>
				</Grid>
				<Divider />
				<img 
					src="https://www.contactcenterworld.com/images/company/NICE-Systems-1200px-logo.png" 
					alt="Nice"
					style={{ 
							height: '20px',
							marginTop: '10px'
						   }}
				/>
				<h4 style={{ marginTop: '5px', marginBottom: '30px' }}>Content for inContact, Copywright © 2013-2015 | All rights reserved.</h4>
			</Container>
		)
	}
}

const Links: React.SFC<{ links: string[], title:string }> = (props) => (
	<Grid.Column width={3} className="footer-links">
		<ul>
		<h4>{props.title}</h4>
		{props.links.map((link: string, index: number) =>
				<li key={index}><a href="">{link}</a></li>
			)}
		</ul>
	</Grid.Column>
)