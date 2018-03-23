import axios from 'axios';

export function loadShow(showName) {
    return (dispatch) => {

        const url = 'http://api.tvmaze.com/singlesearch/shows?q='+showName;
        return axios.get(url)
        .then((response) => {
            dispatch(loadDetails(response.data.name, response.data.image.original));
            
        })
    }
}

export function loadDetails(showName, showImage) {
    return{
        type: "LOAD_DETAILS",
        name: showName,
        image: showImage
    }
}
