let defaultState = {
    title: '',
    content: ''
}

const mainReducer = (state = defaultState, action) => {
    
    if(action.type === "SHOW_TV") {
        return {
            ...state,
            title: action.title,
            content: action.content
        }
    } else {
        return {
            ...state
        }
    }
    
};

export default mainReducer;