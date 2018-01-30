import axios from 'axios';

export function loadShow() {
    return (dispatch) => {
        return axios.get('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=')
        .then((response) => {
            dispatch(showTv(response.title, response.content));
            
        })
    }
}

export function showTv(title, content) {
    return{
        type: "SHOW_TV",
        title: title,
        content: content
    }
}
