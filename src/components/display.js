import React from 'react';

class Display extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
                
                <h1>{this.props.name}</h1>
                <img src={this.props.image} />
                
                
                
            </div>
            
        );
    }
}

export default Display;