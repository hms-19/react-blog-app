import { ActionTypes } from "./ActionTypes";

export const initialState = {
    blogs : [],
    blog : {},
}

export const reducer = (state, {type,payload}) => {
    switch(type) {
        case ActionTypes.FETCH_BLOGS : return {
            ...state,
            blogs : payload
        }

        case ActionTypes.ADD_BLOG : return {
            ...state,
            blogs : [...state.blogs, payload]
        }

        case  ActionTypes.SELECTED_BLOG : return {
            ...state,
            blog : payload
        }

    }
}