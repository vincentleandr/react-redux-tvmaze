import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/tvshowAction';

import Display from '../components/display';

import style from './styles/main.css';

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            showDisp: 'hidden',
            gotoTop: ''
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
        this.setState({
            input: '',
            showDisp: 'show',
            gotoTop: 'top'
        });
    }

    render() {
        return (
            <div class="container">
                <form onSubmit={this.onSubmitForm}>
                    <div className={"searchbar-container animated fadeIn " + this.state.gotoTop}>
                        <input className="searchbar" value={this.state.input} onChange={this.onInputChange} placeholder="Try 'Game of Thrones'" autofocus="autofocus"/>
                        <button className="searchbtn" type="submit" onClick={this.props.loadshow}>Search</button>
                    </div>
                </form>
                <div className={"display-container animated fadeIn " + this.state.showDisp}>
                    <Display 
                        name={this.props.name} 
                        image={this.props.image}
                    >
                    </Display>
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect (mapStateToProps, actionCreators)(App);