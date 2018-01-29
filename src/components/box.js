import React from 'react';

class Box extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
            </div>
        );
    }
}

export default Box;