let defaultState = {
    name: 'Game of Thrones',
    image: 'http://static.tvmaze.com/uploads/images/medium_portrait/143/359013.jpg'
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