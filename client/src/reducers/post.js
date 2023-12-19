import { CREATE_POST, DELETE_POST, FETCH_ALL_POST, LIKE_POST, UPDATE_POST } from "../actions/actionTypes";

export const postReducer = (state = [],action) => {
    switch(action.type){
        case FETCH_ALL_POST:
            return action.payload
        case CREATE_POST:
            return [action.payload,...state]
        case LIKE_POST:
        case UPDATE_POST:
            return state.map(post =>
                    post._id === action.payload._id ? action.payload : post
            )
        case DELETE_POST:
            return state.filter(post => post._id !== action.payload);
        default:
            return state
    }
}