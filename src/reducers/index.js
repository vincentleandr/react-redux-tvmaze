import * as types from '../actions/index';

let defaultState = {
    name: ''
}

const mainReducer = (state = defaultState.name, action) => {
    
    /*
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
    */

    switch(action.type) {
        case types.SHOW_TV:
            return Object.assign(state, action.name); 
        default: 
            return state;
    }
};

export default mainReducer;