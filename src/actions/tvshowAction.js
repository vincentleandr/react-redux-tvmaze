import axios from 'axios';

export function loadShow(showName) {
    
    return (dispatch) => {

        const url = 'http://api.tvmaze.com/singlesearch/shows?q='+showName;

        dispatch({ type: "IS_LOADING" });

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
        .catch(() => {
            dispatch(
                loadError()
            );
        });
        

    }
}

export function loadDetails(showImage, showName, showSummary, showGenres, showRating) {
    return{
        type: "LOAD_DETAILS",
        image: showImage,
        name: showName,
        summary: showSummary,
        genres: showGenres,
        rating: showRating
    }
}

export function loadError() {
    return{
        type: "LOAD_ERROR",
        image: 'N/A',
        name: 'Not Found',
        summary: 'N/A',
        genres: 'N/A',
        rating: 'N/A'
    }
}