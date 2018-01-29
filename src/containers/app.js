import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index';

import Box from '../components/box'

class App extends React.Component{
    render() {
        return (
            <div>
                <Box name={this.props.name} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect (mapStateToProps, actionCreators)(Box);