import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/tvshowAction';

import Display from '../components/display';

import './styles/main.min.css';


class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            showDisp: 'hidden',
            gotoTop: '',
            loading: true
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onInputChange(event) {
        this.setState({input: event.target.value});
    }

    onSubmitForm(event) {
        event.preventDefault();

        this.props.loadShow(this.state.input, this.state.loading);
        this.setState({
            input: '',
            showDisp: 'show',
            gotoTop: 'top',
            loading: false
        });
    }

    render() {
        const loading = this.state.loading;
        console.log(loading);
        return (
            <div className="container">

                <form onSubmit={this.onSubmitForm}>
                    <div className={"searchbar-container animated fadeIn " + this.state.gotoTop}>
                        <div class="input-container">
                            <input className="searchbar" value={this.state.input} onChange={this.onInputChange} placeholder="Try 'Game of Thrones'" autoFocus="autofocus"/>

                            <button className="searchbtn" type="submit" onClick={this.props.loadshow}><i className="fa fa-search fa-fw"></i></button>
                        </div>
                        
                    </div>
                </form>
                {loading ? 
                'Loading...' 
                : 
                <div className={"display-container animated fadeIn " + this.state.showDisp}>   
                    <Display 
                        image={this.props.image}
                        name={this.props.name} 
                        summary={this.props.summary}
                        genres={this.props.genres}
                        rating={this.props.rating}
                    >
                    </Display>
                </div>
                }
            </div>
        );
    }


    
}

const mapStateToProps = (state) => {
    return state;
}

export default connect (mapStateToProps, actionCreators)(App);