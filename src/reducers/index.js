let defaultState = {
    name: ''
}

const mainReducer = (state = defaultState, action) => {
    if(action.type === "SHOW_TV") {
        return {
            ...state,
            name: action.name
        }
    } else {
        return {
            ...state
        }
    }
};

export default mainReducer;