import React, { Component } from 'react';

import './backTop.css';
import { BackTop } from 'antd';
class backTop extends Component {
	constructor(props) {
		super(props);
		this.state={

		}
	};

	render() {
		return (

				<BackTop visibilityHeight="10">
					<div className="ant-back-top-inner">UP</div>
				</BackTop>

		);
	}
}

export default backTop;
