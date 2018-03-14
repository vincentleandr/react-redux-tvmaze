import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/tvshowAction';

import Display from '../components/display';

class App extends React.Component{
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
            <Display 
                    name={this.props.name} 
                    image={this.props.image}
            >
                <form onSubmit={this.onSubmitForm}>
                    <input value={this.state.input} onChange={this.onInputChange} />
                    <button onClick={this.props.loadshow}>Show Name</button>
                </form>
            </Display>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect (mapStateToProps, actionCreators)(App);