let defaultState = {
    name: '',
    network: ''
}

const mainReducer = (state = defaultState, action) => {
    
    switch (action.type) {
        case "SHOW_TV":
            return {
                ...state,
                name: action.name,
                network: action.network
            };

        default:
            return {
                ...state
            };
    }
    
};

export default mainReducer;