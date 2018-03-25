import React from 'react';
import Parallax from 'parallax-js';

class Display extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            convText: ''
        }
    }

    componentDidMount() {
        this.parallax = new Parallax(this.refs.poster);
    }

    componentDidUpdate() {
        let summaryText = this.props.summary;
        this.summaryText = summaryText.replace(/<p>|<\/p>|<b>|<\/b>|<i>|<\/i>/g, "");

        if(this.summaryText !== this.state.convText) {
            this.setState({
                convText: this.summaryText
            });
        }

        
        
    }
    
    componentWillUnmount() {
        this.parallax.disable();
    }

    render() {
        return (
            <div className="display-inner-container animated fadeIn">
                
                <div className="shows-img" ref="poster">
                    <img src={this.props.image} alt="Show's Poster" data-depth="0.15" />
                </div>
                
                <div className="shows-details">
                    <h1 className="shows-title">{this.props.name}</h1>
                    <div className="shows-summary">{this.state.convText}</div>
                </div>
                
            </div>
            
        );
    }


}

export default Display;