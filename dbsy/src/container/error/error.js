import React, { Component } from 'react';

import './error.css';
// import { withRouter } from 'react-router-dom'
//
// @withRouter
class Error extends Component {
	constructor(props) {
		super(props);
		this.state={

		}
	};
	handleClick = () =>{
		this.props.history.push('/home')
	};
	componentDidMount(){
		if(this.props.match.path==='/error') return;
	  this.props.history.push('/error')
	}

	render() {
		return (
			<div className="error">
				<div className="handle">
					<img className={'home'} src={'/img/error/home.png'} onClick={this.handleClick}/>
					<p>返回首页</p>
				</div>
			</div>
		);
	}
}

export default Error;
