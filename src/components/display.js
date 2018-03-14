import React from 'react';

class Display extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <img src={this.props.image} />
                
                {this.props.children}
                
            </div>
            
        );
    }
}

export default Display;