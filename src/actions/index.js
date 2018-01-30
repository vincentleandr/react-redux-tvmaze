import axios from 'axios';

export function loadTv() {
    return (dispatch) => {
        return axios.get('http://api.tvmaze.com/search/shows?q=sherlock')
        .then((response) => {
            dispatch(showTv(response.name));
        })
    }
}

export function showTv(showname) {
    return{
        type: "SHOW_TV",
        name: showname
    }
}