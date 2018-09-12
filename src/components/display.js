import React from 'react';

class Display extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            convText: '',
            convGenre: '',
            convRating: ''
        }
    }

    componentDidUpdate() {
        let summaryText = this.props.summary;

        if(summaryText == null) {
            this.summaryText = 'N/A'
        } else {
            this.summaryText = summaryText.replace(/<p>|<\/p>|<b>|<\/b>|<i>|<\/i>/g, "");
        }

        //This if statement is to avoid infinite loop
        if(this.summaryText !== this.state.convText) {
            let listGenres = this.props.genres;
            let showRating = this.props.rating;

            if(listGenres.length === 0 || listGenres === 'N/A') {
                this.listGenres = 'N/A';
            } else {
                this.listGenres = listGenres.map((genre) => 
                    <li key={genre}>{genre}</li>
                );
            }

            if(showRating == null) {
                this.showRating = 'N/A';
            } else {
                this.showRating = showRating;
            }
            
            this.setState({
                convText: this.summaryText,
                convGenre: this.listGenres,
                convRating: this.showRating
            });
        }
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
                    <div className="shows-img">
                        <img src={this.props.image} alt={this.props.name}/>
                    </div>
                    
                    <div className="shows-details">
                        <span id="errMsg"></span>
                        <h1 className="shows-title">{this.props.name}</h1>
                        <div className="info-row">
                            <ul className="shows-genres">
                                {this.state.convGenre}
                            </ul>

                            <span className="shows-rating"><i className="fa fa-star fa-fw"></i> {this.state.convRating} / 10</span>
                            
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