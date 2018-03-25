import React, {Component} from 'react';

import './dynamicDetails.css';
// import { withRouter } from 'react-router-dom'
//
// @withRouter
class dynamicDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };


    componentDidMount() {

    }

    render() {
        return (
            <div className="">
                {this.props.match.params.name}
            </div>
        );
    }
}

export default dynamicDetails;
