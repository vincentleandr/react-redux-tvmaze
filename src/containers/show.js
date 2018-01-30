import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index';

import Box from '../components/box'

class Show extends React.Component{
    render() {
        return (
            <Box handleClick={this.props.loadShow} name={this.props.title} network={this.props.content} />
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect (mapStateToProps, actionCreators)(Show);