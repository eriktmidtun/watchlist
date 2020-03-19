import {
    LIST_LOADED,
    LIST_ITEM_LOADING,
    LIST_ITEM_FAILED,
    LIST_ITEM,
    LIST_LOADING,
    ADD_TO_LIST_LOADING,
    ADD_TO_LIST,
    ADD_TO_LIST_FAILED,
    //DELETE_FROM_LIST,
    LIST_FAILED,
} from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case LIST_LOADED:
            return {
                ...state,
                list: action.payload,
                listLoading: false,
            }
        case LIST_LOADING:
            console.log("LIST_LOADING");
            return {
                ...state,
                listLoading: true,
            }
        case LIST_FAILED:
            return {
                ...state,
                listLoading: false,
            }
        /* for one item in a list */
        case LIST_ITEM:
            return {
                ...state,
                listItemLoading: false,
            }
        case LIST_ITEM_LOADING:
            console.log("LIST_LOADING");
            return {
                ...state,
                listItemLoading: true,
            }
        case LIST_ITEM_FAILED:
            return {
                ...state,
                listItemLoading: false,
            }
        /* add to list */
        case ADD_TO_LIST:
            return {
                ...state,
                addLoading: false,
            }
        case ADD_TO_LIST_LOADING:
            return {
                ...state,
                addLoading: true,
            }
        case ADD_TO_LIST_FAILED:
            return {
                ...state,
                addLoading: false,
            }
        default:
            return state
    }
}
