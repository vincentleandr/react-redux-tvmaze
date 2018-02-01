import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index';

import Box from '../components/box'

class Show extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onInputChange(event) {
        this.setState({input: event.target.value});
    }

    onSubmitForm(event) {
        event.preventDefault();

        this.props.loadShow(this.state.input);
        this.setState({input: ''});
    }


    render() {
        return (
            <Box handleClick={this.props.loadshow} name={this.props.name} network={this.props.network}>
                <form onSubmit={this.onSubmitForm}>
                    <input id="input" value={this.state.input} onChange={this.onInputChange} />
                    
                </form>
                <button 
                    onClick={this.props.loadshow}
                >Show Name</button>
                
            </Box>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect (mapStateToProps, actionCreators)(Show);