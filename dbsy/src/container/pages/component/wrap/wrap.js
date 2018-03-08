import React, { Component } from 'react';

import './wrap.css';

class Wrap extends Component {
	constructor(props) {
		super(props);
		this.state={

		}
	};

	render() {
		return (
			<div className="y_wrap" {...this.props}>
				{this.props.children}
			</div>
		);
	}
}

export default Wrap;
