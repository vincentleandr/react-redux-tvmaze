import axios from 'axios';


export function loadShow(show) {
    return (dispatch) => {

        const url = 'http://api.tvmaze.com/singlesearch/shows?q='+show;
        return axios.get(url)
        .then((response) => {
            dispatch(showTv(response.data.name, response.data.network.name));
            
        })
    }
}

export function showTv(name, network) {
    return{
        type: "SHOW_TV",
        name: name,
        network: network
    }
}
