let defaultState = {
    image: '',
    name: '',
    summary: ''
}

const tvshowReducer = (state = defaultState, action) => {
    
    switch (action.type) {
        case "LOAD_DETAILS":
            return {
                ...state,
                image: action.image,
                name: action.name,
                summary: action.summary
            };

        default:
            return {
                ...state
            };
    }
    
};

export default tvshowReducer;