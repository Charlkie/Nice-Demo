import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

export default class Navigation extends Component<{location: any}> {

	public state = {
		style: 'fade'
	}

	public componentDidMount() {
		window.addEventListener("scroll", this.consoleWhenUpTop)
	}

	public consoleWhenUpTop = () => this.setState({ style: window.scrollY < 10 ? 'fade' : '' })

	public render() {
		return (
			<Container>
				<Menu
					className={'fixed ' +this.state.style+(this.props.location === '/' ? '' : ' landing' )}
					borderless={true}
					size='tiny'
					stackable={false}
				>
					<Link to='/' className='active item'>
						<img src="https://www.contactcenterworld.com/images/company/NICE-Systems-1200px-logo.png" alt="" />
					</Link>
					{ this.props.location === '/dashboard' ?
						<DashMenu /> :
						<LandingMenu />

					}
				</Menu>
			</Container>
		)
	}
}

const LandingMenu = () => (
	<Fragment>
		<Item link='login' />
		<Item link='signup' />
	</Fragment>
)

const DashMenu = () => (
	<Fragment>
		<Item link='dashboard' />
	</Fragment>
)

const Item: React.SFC<{ link: string }> = (props) => (
	<Menu.Item
		className='active item'
		name={props.link.toUpperCase()}
		as={Link}
		to={`/${props.link}`}
	>
		{props.link}
	</Menu.Item>
)
