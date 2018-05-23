let defaultState = {
    image: '',
    name: '',
    summary: '',
    genres: '',
    rating: ''
}

const tvshowReducer = (state = defaultState, action) => {
    
    switch (action.type) {
        case "LOAD_DETAILS":
            return {
                ...state,
                image: action.image,
                name: action.name,
                summary: action.summary,
                genres: action.genres,
                rating: action.rating
            };

        default:
            return {
                ...state
            };
    }
    
};

export default tvshowReducer;