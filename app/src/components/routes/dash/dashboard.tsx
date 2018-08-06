import React, { Component, Fragment } from 'react';
import { Line } from 'react-chartjs-2';
import { Redirect } from 'react-router-dom';
import { Card, Divider } from 'semantic-ui-react';
import AppContext from '../../../contexts/AppContext';
import data from './analytics';
import './index.css';

class Dashboard extends Component<{token: any}> {

	public state = {
		auth: false,
		loading: 'initial'
	}

	public authUser = async (token: any) => {
		const auth = await fetch('http://127.0.0.1:5000/dashboard', {
			body: JSON.stringify({
				token
			}),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			method: 'POST',
		}).then( res => res.json())
		this.setState({
			auth: auth.auth,
			loading: 'false'
		})
	}

	public componentDidMount() {
		this.setState({ loading: 'true' })
		this.authUser(this.props.token)
	}

	public render() {
	if (this.state.loading === 'initial') { return <h2>Intializing...</h2> }
	if (this.state.loading === 'true') { return <h2>Loading...</h2> }
	if (!this.state.auth) { return <Redirect to='/'/> }
	return <Dash />
	}
}

const Dash = () => (
	<Fragment>
		<div className='ui form-container container dash'>
			<CardExampleHeaderCard />
			<Analytics />
		</div>
		<Divider />
	</Fragment>
)

const CardExampleHeaderCard = () => (
	<div className='row'>
		<Card.Group style={{paddingBottom: '50px'}}>
			<Card
				header='Hear Our Voice'
				meta='api1'
				description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quidem!'
			/>
			<Card
				header='Interact Instantly'
				meta='api2'
				description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quidem!'
			/>
			<Card
				header='Engage Electronically'
				meta='api3'
				description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quidem!'
			/>
			<Card
				header='Impressively Intuitive IVR'
				meta='api3'
				description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quidem!'
			/>
			<Card
				header='Texters Rejoice'
				meta='api5'
				description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quidem!'
			/>
		</Card.Group>
	</div>
  )

const Analytics = () => (
<Line
	data={data}
	width={80}
	height={20}
	options={{
		maintainAspectRatio: true
	}}
/>
)

export default (props: any) => (
	<AppContext.Consumer>
		{ value => <Dashboard token={value.token} /> }
	</AppContext.Consumer>
)

