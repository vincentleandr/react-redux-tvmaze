let defaultState = {
    name: '',
    image: ''
}

const tvshowReducer = (state = defaultState, action) => {
    
    switch (action.type) {
        case "LOAD_DETAILS":
            return {
                ...state,
                name: action.name,
                image: action.image
            };

        default:
            return {
                ...state
            };
    }
    
};

export default tvshowReducer;