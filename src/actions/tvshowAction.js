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
                    response.data.summary
                ));
            
        })
    }
}

export function loadDetails(showImage, showName, showSummary) {
    return{
        type: "LOAD_DETAILS",
        image: showImage,
        name: showName,
        summary: showSummary
    }
}
