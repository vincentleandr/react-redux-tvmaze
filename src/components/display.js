import React from 'react';
import Parallax from 'parallax-js';

class Display extends React.Component {
    componentDidMount() {
        this.parallax = new Parallax(this.refs.poster)
    }
    
    componentWillUnmount() {
        this.parallax.disable()
    }

    render() {
        return (
            <div className="display-inner-container animated fadeIn">
                
                <div className="shows-img" ref="poster">
                    <img src={this.props.image} alt="Show's Poster" data-depth="0.15" />
                </div>
                
                <div className="shows-details">
                    <h1 className="shows-title">{this.props.name}</h1>
                    <div className="shows-summary">{this.props.summary}</div>
                </div>
                
                
            </div>
            
        );
    }
}

export default Display;