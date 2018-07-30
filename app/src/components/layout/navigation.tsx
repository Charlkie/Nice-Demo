import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

export default class Navigation extends Component {

    public state = {
        style: 'fade'
    }

    public componentDidMount() {
        window.addEventListener("scroll", this.consoleWhenUpTop)
    }

    public consoleWhenUpTop = () => this.setState({ style: window.scrollY === 0 ? 'fade' : '' })

    public render() {
        return (
            <Container>
                <Menu
                    className={'fixed ' + this.state.style + (location.pathname === '/' ? '' : ' landing')}
                    borderless={true}
                    size='tiny'
                    stackable={false}
                >
                    <Link to='/' className='active item'>
                        <img src="https://www.contactcenterworld.com/images/company/NICE-Systems-1200px-logo.png" alt="" />
                    </Link>
                    <Item link='login' />
                    <Item link='signup' />
                </Menu>
            </Container>
        )
    }
}

const Item: React.SFC<{ link: string }> = (props) => (
    <Menu.Item
        className='active item'
        name={props.link}
        as={Link}
        to={`/${props.link}`}
    >
        {props.link}
    </Menu.Item>
)