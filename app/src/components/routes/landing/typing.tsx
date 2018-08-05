import React, { Component } from 'react'

interface ITextProp {
	text: string
}

interface IState {
	blink: boolean
	text: string
}

export default class Typewriter extends Component<ITextProp, IState> {

	public state = {
		blink: true,
		text: '',
	}

	private interval: any

	public updateText = () => {
		if (this.state.text === this.props.text) {
			clearInterval(this.interval)
			this.setState({ blink: true })
		} else {
			this.setState( prevState => {
				return {
					blink: false,
					text: prevState.text+this.props.text[prevState.text.length]
				}
			})
		}
	}

	public componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	public componentWillUnmount() {
		clearInterval(this.interval)
	}

	public handleScroll = () => {
		if (window.scrollY > 800 && window.scrollY < 900) {
			this.interval = setInterval(() => this.updateText(), Math.floor((Math.random() * 500) + 1))
		}
	}

	public render() {
		// style={{height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}
		return (
			<div className='type-contain'>
				<p className={(this.state.blink ? 'blinking' : '') + ' typewriter'}>{this.state.text}</p>
			</div>
		)
	}
}
