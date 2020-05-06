import React from 'react';

class EmailSendScroll extends React.Component {

	constructor(props) {
		super(props);
		this.state.author = props.author;
	}

	state ={
		selected: false,
		author: null
	}

	handleClick = () => {
		this.setState({
			selected: true
		})
	};

	selectedFalse = () => {
		this.setState({
			selected: false
		});
	};

	getMessage() {
		return this.state.message;
	}

	render() {
		const { selected } = this.state;

		let cardClassName = "email-send-scroll-view-card";
		if (this.state.selected == true) {
			cardClassName = cardClassName + " email-card-selected";
		}
		console.log('email send scrool render author - ', this.props);
		let consumerName = !this.props.author ? 'Неизвестен' :
			(!this.props.author.firstName || !this.props.author.lastName) ?
			'Пользователь с айди ' + this.props.author.id :
			this.props.author.firstName + ' ' + this.props.author.lastName + ' (' + this.props.author.id + ')'
		return (
			<div className={cardClassName} onClick={() => {
				console.log('this.state.author - ', this.state.author);
				if (this.props.handleClick) {
					this.props.handleClick(this.state.author);
				}
				this.handleClick();
			}}>
	        	<p>{consumerName}</p>
	    	</div>
		);
	}
}

export default EmailSendScroll;
