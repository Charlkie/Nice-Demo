import React, { Component } from 'react';
import { Button, Container, Grid, Input, Segment } from 'semantic-ui-react';
import Typewriter from './typing';

const Content: React.SFC<{}> = () => (
	<Segment vertical={true} className='main'>
		<Responsive />
		<UX />
	</Segment>
)

const Responsive = () => (
	<Grid className='first' centered={true} style={{ paddingTop: '100px', width: '100%' }}>
		<Grid.Column width={14}>
			<Container align='center'>
				<div style={{ position: 'relative' }}>
					<img
						style={{ position: 'relative', top: "0px", left: "0px", zIndex: 1, width: '600px' }}
						src="https://brolik.com/blog/wp-content/uploads/2013/05/BRO_ResponsiveDesign_Main2.png" // http://www.pngpix.com/wp-content/uploads/2016/04/Responsive-Web-Design-PNG-Image2.png
						alt="responsive"
						className="responsive"
					/>
					<h1>Avaliable on all devices</h1>
					<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Mollitia asperiores molestias sunt pariatur rerum soluta
						assumenda ipsam repellat error, modi labore.</h2>
				</div>
			</Container>
		</Grid.Column>
	</Grid>
)

const UX = () => (
	<Grid stackable={true} className='second' centered={true} style={{ paddingTop: '50px' }}>
		<Grid.Column width={7}>
			<Container align='center' >
				<div className='code'>
					<pre>
						<span className='pink'>class </span><span>Dynamic </span><span className='pink'>extends </span>
						<span>{'Component<{}, IState>'}</span><br />
						<span>{'\t'}</span><span className='green'>render</span><span>()</span> <span>{'{'}</span> <br />
						<span>{'\t\treturn ('}</span><br/>
						<span>{'\t\t\t'}</span><span className='gray'>{'<'}</span><span>h1</span><span className='gray'>{'>'}</span>
						<span>{'{this.state.text}'}</span><span className='gray'>{'<'}</span><span className='gray'>{'/'}</span>
						<span>h1</span><span className='gray'>{'>'}</span><br/>
						<span>{'\t\t}'}</span><br/>
						<span>{'\t}'}</span><br/>
						<span>}</span><br/>
						<span className='pink'>export default <span>Dynamic</span></span>
					</pre>
				</div>
			</Container>
		</Grid.Column>
		<Grid.Column className='typewriter-contain' width={7} >
			<Typewriter text='Dynamic Rendering'/>
		</Grid.Column>
		<Email />
	</Grid>
)

class Email extends Component {

	public state = {
		email: ''
	}

	public updateMail = (e: any) => {
		this.setState({ email: e.target.value })
	}

	public sendMail = async (e: any) => {
		console.log('Bills a bitch')
		const emailSent = await fetch('http://127.0.0.1:5000/', {
			body: JSON.stringify({
				email: this.state.email
			}),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			method: 'POST',
		}).then(res => res.json())
		if (emailSent) {
		 	console.log('email sent')
		} else {
			console.log('failed to send email')
		}
	}

	public render() {
		return (
			<div className='email'>
				<Container>
					<h2>Signup to test out API's</h2>
					<p>Email us to see if you eligable for an account</p>
					<div>
						<Input onChange={this.updateMail} placeholder='Search...'/>
						<Button onClick={this.sendMail}>send</Button>
					</div>
				</Container>
			</div>
		)
	}
}

export default Content