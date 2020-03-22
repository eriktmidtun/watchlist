import {
    WTW_ITEM_LOADING,
    WTW_ITEM_FAILED,
    WTW_ITEM,
    HW_ITEM_LOADING,
    HW_ITEM_FAILED,
    HW_ITEM,
    LIST_LOADING,
    ADD_TO_LIST_LOADING,
    ADD_TO_WTW,
    ADD_TO_HW,
    ADD_TO_LIST_FAILED,
    DELETE_FROM_HW,
    DELETE_FROM_WTW,
    DELETE_FROM_LIST_LOADING,
    DELETE_FROM_LIST_FAILED,
    LIST_FAILED,
    WTW_LIST_LOADED,
    HW_LIST_LOADED
} from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case HW_LIST_LOADED:
            return {
                ...state,
                hwList: action.payload,
                listLoading: false,
            }
        case WTW_LIST_LOADED:
            return {
                ...state,
                wtwList: action.payload,
                listLoading: false,
            }
        case LIST_LOADING:
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
        case WTW_ITEM:
            return {
                ...state,
                listItemLoading: false,
                isInWantToWatch:  true,
            }
        case WTW_ITEM_LOADING:
            //console.log("LIST_LOADING");
            return {
                ...state,
                listItemLoading: true,
                isInWantToWatch:  false,
            }
        case WTW_ITEM_FAILED:
            return {
                ...state,
                listItemLoading: false,
                isInWantToWatch:  false,
            }

        /* have watched in list */
        case HW_ITEM:
            return {
                ...state,
                listItemLoading: false,
                isInHaveWatched: true,
            }
        case HW_ITEM_LOADING:
            return {
                ...state,
                listItemLoading: true,
                isInHaveWatched: false,
            }
        case HW_ITEM_FAILED:
            return {
                ...state,
                listItemLoading: false,
                isInHaveWatched: false,
            }
        /* add to list */
        case ADD_TO_WTW:
            return {
                ...state,
                addLoading: false,
                isInWantToWatch:  true,
            }
        case ADD_TO_HW:
            return {
                ...state,
                addLoading: false,
                isInHaveWatched: true,
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
        case DELETE_FROM_LIST_LOADING:
            //console.log("DELETE_FROM_LIST_LOADING")
            return{
                ...state,
                deleteFromListLoading: true,
            }
        /* Delete from list */
        case DELETE_FROM_WTW:
            //console.log("DELETE_FROM_WTW")
            return {
                ...state,
                deleteFromListLoading: false,
                isInWantToWatch:  false,
            }
        case DELETE_FROM_HW:
            //console.log("DELETE_FROM_HW")
            return {
                ...state,
                deleteFromListLoading: false,
                isInHaveWatched: false,
            }
        case DELETE_FROM_LIST_FAILED:
            return {
                ...state,
                deleteFromListLoading: false,
            }
        
        default:
            return state
    }
}
