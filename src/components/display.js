import React from 'react';

class Display extends React.Component {
    render() {
        return (
            <div className="display-inner-container animated fadeIn">
                
                <div className="tv-img">
                    <img src={this.props.image} />
                </div>
                
                <div className="tv-details">
                    <h1>{this.props.name}</h1>
                </div>
                
                
                
            </div>
            
        );
    }
}

export default Display;