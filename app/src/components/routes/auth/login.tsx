import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom';
import { Button, Container, Form, Input } from 'semantic-ui-react';
// import login from '../../../api/auth';
import './index.css';

/* Login component, this component uses context to share the 
   username globally as it is used in multiple routes */ 

// typechecker for state
interface ILoginState {
    username: string
    password: string
}

// typechecker for input component
interface IAppContext {
    username: string
    password: string
    handleUpdate: (fieldChange: string) => (e: React.ChangeEvent<HTMLInputElement>) => void
}

const { Provider, Consumer } = React.createContext({} as IAppContext)

const Field = Form.Field

export default class Login extends Component<{}, ILoginState> {

    public state = {
        password: '',
        username: ''
    }

    public onSubmit = async () => {
        const { username, password } = this.state
        // login(username, password)
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
        // tslint:disable-next-line:no-console
        console.log(auth)
    }

    // public class field syntax 
    public handleUpdate = (fieldType: keyof ILoginState) => (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [fieldType]: e.target.value } as any)
    }

    public render() {
        return (
            <Container className='form-container'>
                <div className='form-grid'>
                    <Form>
                        <h2>Sign-In</h2>
                        <Provider value={{ ...this.state, handleUpdate: this.handleUpdate }}>
                            <InputField />
                        </Provider>
                        <Button onClick={this.onSubmit}> {/* fluid={true} as={Link} to='/dashboard' */}
                            Submit
                        </Button>
                    </Form>
                </div>
            </Container>
            )
        }
    }

const InputField: React.SFC<{}> = () => (
    <Consumer>
        { value => 
            <Fragment>
                <Field 
                    control={Input}
                    label='username'
                    onChange={value.handleUpdate('username')}
                    placeholder='Johndo'
                    required={true}
                />
                <Field 
                    control={Input}
                    label='password'
                    onChange={value.handleUpdate('password')}
                    placeholder='P@ssw0rd'
                    required={true}
                />
            </Fragment>
        }
    </Consumer>
)