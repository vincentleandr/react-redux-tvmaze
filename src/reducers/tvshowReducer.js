let defaultState = {
    image: '',
    name: '',
    summary: '',
    genres: '',
    rating: '',
    error: '',
    loading: false
}

const tvshowReducer = (state = defaultState, action) => {
    
    switch (action.type) {
        case "LOAD_DETAILS":
            return {
                ...state,
                loading: false,
                image: action.image,
                name: action.name,
                summary: action.summary,
                genres: action.genres,
                rating: action.rating
                
            };
        case "LOAD_ERROR":
            return {
                ...state,
                loading: false,
                error: 'Error Loading!'
            }
        case "IS_LOADING":
            return {
                ...state,
                loading: true
            }

        default:
            return {
                ...state
            };
    }
    
};

export default tvshowReducer;