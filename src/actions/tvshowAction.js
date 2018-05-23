import axios from 'axios';

export function loadShow(showName) {
    return (dispatch) => {

        const url = 'http://api.tvmaze.com/singlesearch/shows?q='+showName;
        return axios.get(url)
        .then((response) => {
            dispatch(
                loadDetails(
                    response.data.image.original, 
                    response.data.name,
                    response.data.summary,
                    response.data.genres,
                    response.data.rating.average
                )
            );
        })
        .catch(error => {
            
        });
        

    }
}

export function loadDetails(showImage, showName, showSummary, showGenres, showRating, showNetwork) {
    return{
        type: "LOAD_DETAILS",
        image: showImage,
        name: showName,
        summary: showSummary,
        genres: showGenres,
        rating: showRating
    }
}
