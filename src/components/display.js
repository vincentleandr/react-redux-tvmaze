import React from 'react';
import Parallax from 'parallax-js';

class Display extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            convText: '',
            convGenre: '',
            noNetwork: ''
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
            <div>
                {this.props.loading ? 

                <div className="loading-container">
                    <svg className="loading" width="70" height="26">
                        <circle className='a' cx="9" cy="13" r="6" fill="grey" />
                        <circle className='b' cx="32" cy="13" r="6" fill="grey" />
                        <circle className='c'  cx="55" cy="13" r="6"  fill="grey" />
                    </svg>
                </div>
                
                :

                <div className="display-inner-container animated fadeIn">
                    <div className="shows-img" ref="poster">
                        <img src={this.props.image} alt={this.props.name} data-depth="0.15" />
                    </div>
                    
                    <div className="shows-details">
                        <span id="errMsg"></span>
                        <h1 className="shows-title">{this.props.name}</h1>
                        <div className="info-row">
                            <ul className="shows-genres">
                                {this.state.convGenre}
                            </ul>

                            <span className="shows-rating"><i className="fa fa-star fa-fw"></i> {this.props.rating} / 10</span>
                            
                        </div>
                        <p className="shows-summary" id="summary">{this.state.convText}</p>
                    </div>
                </div>

                }
            </div>
            
        );
    }
}

export default Display;