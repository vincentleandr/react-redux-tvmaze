import axios from 'axios';

export function loadTv() {
    return(dispatch) => {
        return axios.get('http://api.tvmaze.com/search/shows?q=sherlock')
        .then((response) => {
            dispatch(showTv(response.data.show.name));
        })
    }
}

export function showTv(tvshow) {
    return{
        type: "SHOW_TV",
        name: tvshow
    }
}