import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Container, Divider, Form, Input } from 'semantic-ui-react';
import AppContext from '../../../contexts/AppContext';
import LoginContext, { ILoginState } from '../../../contexts/LoginContext';
import './index.css';

const Field = Form.Field
const { Provider, Consumer } = LoginContext

class Login extends Component<any, ILoginState> {

	public state = {
		flash: '',
		inputElements: [
			{ value: '', 'label': 'username', 'placeholder': 'Johndoe', required: false, error: false },
			{ value: '', 'label': 'password', 'placeholder': 'P@ssw0rd', required: false, error: false }
		],
		loginError: false,
		password: '',
		redirect: false,
		username: ''
	}

	public onSubmit = () => {
		const { username, password } = this.state
		if (username.length === 0) {
			this.state.inputElements[0].placeholder = 'please enter a username'
			this.state.inputElements[0].error = true
		}
		if (password.length === 0) {
			this.state.inputElements[1].placeholder = 'please enter a password'
			this.state.inputElements[1].error = true
		}
		else {
			this.login(username, password)
		}
		this.setState({})
	}

	public login = async (username: string, password: string) => {
		const auth = await fetch('http://127.0.0.1:5000/login', {
			body: JSON.stringify({
				password,
				username
			}),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			method: 'POST',
		}).then(res => res.json())
		console.log(auth)
		if (auth.token) {
			this.props.signinUser(auth)
			this.setState({ redirect: true })
		} else {
			this.setState({ loginError: true })
			this.flash()
		}
	}

	public handleLoginError() {
		this.flash()
	}

	public handleUpdate = (fieldType: keyof ILoginState) => (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ [fieldType]: e.target.value } as any)
	}

	public handleFocus = (index: number, fieldType: string) => (e: React.ChangeEvent<HTMLInputElement>) => {

		if (this.state.loginError) {
			this.setState({ [fieldType]: '' } as any)
		}
		this.state.inputElements[index].error = false
		this.setState({})
	}

	public flash() {
		this.setState({ flash: 'flash' })
		setTimeout(() => this.setState({ flash: '' }), 100)
	}

	public render() {

		if (this.state.redirect) {
			return <Redirect to='/dashboard' />
		}

		return (
			<Fragment>
				<Container className='form-container'>
					<div className='form-grid row'>
						<Form>
							<h2>Sign-In</h2>
							<Provider value={{ ...this.state, handleFocus: this.handleFocus, handleUpdate: this.handleUpdate }}>
								<InputField />
							</Provider>
							{this.state.loginError &&
								<div className='row'>
									<span className='incorrect'>Username of password is incorrect</span>
								</div>
							}
							<Button onClick={this.onSubmit}>
								Submit
							</Button>
						</Form>
					</div>
				</Container>
				<Divider />
			</Fragment>
			)
		}
	}

const InputField = () => (
	<Consumer>
		{ value =>
			<Fragment>
				{ value.inputElements.map((obj, index) =>
					<Field key={index} className={(value.inputElements[index].error ? 'error': '')}>
						<label>{obj.label} *</label>
						<Input
							className={value.flash}
							type="text"
							onChange={value.handleUpdate(obj.label)}
							placeholder={obj.placeholder}
							required={obj.required}
							onFocus={value.handleFocus(index, obj.label)}
						/>
					</Field>
					)}
			</Fragment>
		}
	</Consumer>
)

export default (props:any) => (
	<AppContext.Consumer>
		{value => <Login {...value}/>}
	</AppContext.Consumer>
)