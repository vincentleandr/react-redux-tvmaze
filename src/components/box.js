import React from 'react';

class Box extends React.Component {
    

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.network}</h2>
                {this.props.children}
                
                
                
            </div>
            
        );
    }
}

export default Box;