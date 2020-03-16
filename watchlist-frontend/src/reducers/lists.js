import {
    WANT_TO_WATCH_LOADED,
    HAVE_WATCHED_LOADED,
    WANT_TO_WATCH_LOADING,
    HAVE_WATCHED_LOADING,
    ADD_WANT_TO_WATCH,
    ADD_HAVE_WATCHED,
    DELETE_WANT_TO_WATCH,
    DELETE_HAVE_WATCHED,
    WANT_TO_WATCH_FAILED,
    HAVE_WATCHED_FAILED,
} from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case WANT_TO_WATCH_LOADED:
        case HAVE_WATCHED_LOADED:
            return {
                ...state,
                lists: action.payload,
                listsLoading: false,
            }
        case WANT_TO_WATCH_LOADING:
        case HAVE_WATCHED_LOADING:
            console.log("RESULTS_LOADING");
            return {
                ...state,
                listsLoading: true,
            }
        case WANT_TO_WATCH_FAILED:
        case HAVE_WATCHED_FAILED:
            return {
                ...state,
                listsLoading: false,
            }
        case ADD_WANT_TO_WATCH:
        case ADD_HAVE_WATCHED:
            return {
                ...state,
                listsLoading: false,
            }
        case DELETE_WANT_TO_WATCH:
        case DELETE_HAVE_WATCHED:
            return {
                ...state,
                listsLoading: false,
            }
        default:
            return state
    }
}
