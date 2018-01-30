import React from 'react';

class Box extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.content}</h2>
                <button 
                    onClick={
                        () => {
                            this.props.handleClick()
                        }}
                >Show Name</button>
            </div>
            
        );
    }
}

export default Box;