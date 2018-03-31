import React from 'react';
import Parallax from 'parallax-js';

class Display extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            convText: '',
            convGenre: ''
        }
    }

    componentDidMount() {
        this.parallax = new Parallax(this.refs.poster);
    }

    componentDidUpdate() {
        let summaryText = this.props.summary;
        this.summaryText = summaryText.replace(/<p>|<\/p>|<b>|<\/b>|<i>|<\/i>/g, "");

        //This if statement is to avoid infinite loop
        if(this.summaryText !== this.state.convText) {
            const listGenres = this.props.genres;
            const separateGenres = listGenres.map((genre) => 
                <li key={genre}>{genre}</li>
            );

            this.setState({
                convText: this.summaryText,
                convGenre: separateGenres
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
                    <div className="flex-row">
                        <span className="shows-rating"><i className="fa fa-star fa-fw"></i> {this.props.rating} / 10</span>
                        <ul className="shows-genres">
                            {this.state.convGenre}
                        </ul>

                    </div>
                    <p className="shows-summary">{this.state.convText}</p>
                </div>
                
            </div>
            
        );
    }


}

export default Display;