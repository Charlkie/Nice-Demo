import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Card } from 'semantic-ui-react'
import AppContext from '../../../contexts/AppContext';
import './index.css'

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
	<div className='ui form-container container dash'>
		<h1>Dashboard</h1>
		<CardExampleHeaderCard />
	</div>
)



const CardExampleHeaderCard = () => (
	<div className='row'>
		<Card.Group>
		<Card>
			<Card.Content>
			<Card.Header>Matthew Harris</Card.Header>
			<Card.Meta>Co-Worker</Card.Meta>
			<Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
			</Card.Content>
		</Card>
		<Card>
			<Card.Content>
			<Card.Header content='Jake Smith' />
			<Card.Meta content='Musicians' />
			<Card.Description content='Jake is a drummer living in New York.' />
			</Card.Content>
		</Card>
		<Card>
			<Card.Content
			header='Elliot Baker'
			meta='Friend'
			description='Elliot is a music producer living in Chicago.'
			/>
		</Card>
		<Card
			header='Jenny Hess'
			meta='Friend'
			description='Jenny is a student studying Media Management at the New School'
		/>
		<Card
			header='Jenny Hess'
			meta='Friend'
			description='Jenny is a student studying Media Management at the New School'
		/>
		<Card
			header='Jenny Hess'
			meta='Friend'
			description='Jenny is a student studying Media Management at the New School'
		/>
		</Card.Group>
	</div>
  )



export default (props: any) => (
	<AppContext.Consumer>
		{ value => <Dashboard token={value.token} /> }
	</AppContext.Consumer>
)