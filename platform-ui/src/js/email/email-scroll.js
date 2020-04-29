import React from 'react';

class EmailScroll extends React.Component {

	constructor(props) {
		super(props);
		this.state.message = props.message;
	}

	state ={
		selected: false,
		message: null
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

		let cardClassName = "email-scroll-view-card";
		if (this.state.selected == true) {
			cardClassName = cardClassName + " email-card-selected";
		}
		return (
			<div className={cardClassName} onClick={() => {
				if (this.props.handleClick) {
					this.props.handleClick(this.state.message);
				}
				this.handleClick();
			}}>
	      <div className="email-scroll-view-card-header">
	        <div className="email-scroll-view-card-header-author"><p>{this.props.message.author}</p></div>
	        <div className="email-scroll-view-card-header-status-time">
	          {this.props.message.isNew === true && <div className="email-scroll-view-card-header-status"></div>}
	          <div className="email-scroll-view-card-header-time"><p>{this.props.message.time}</p></div>
	        </div>
	      </div>
	      <div className="email-scroll-view-card-title">
	        <p>{this.props.message.title}</p>
	      </div>
	      <div className="email-scroll-view-card-content">
	        <p>{this.props.message.body}</p>
	      </div>
	    </div>
		);
	}
}

export default EmailScroll;