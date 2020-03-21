import {
    MOVIE_RESULTS_LOADED,
    MOVIE_RESULTS_LOADING,
    SERIES_RESULTS_LOADED,
    SERIES_RESULTS_LOADING,
    SEARCH_FAIL,
    MOVIE_LOADED,
    MOVIE_LOADING,
    SERIES_LOADED,
    SERIES_LOADING,
    MEDIA_DETAILS_FAIL,
    LIST_DETAILS_LOADING,
    HW_LIST_DETAILS_LOADED,
    LIST_DETAILS_FAIL,
    WTW_LIST_DETAILS_LOADED
} from "../actions/types";

/* const initialState = {
    resultsLoading: false,
    detailResultLoading: false,
}; */

export default function(state = {}, action) {
    switch (action.type) {
        case SERIES_RESULTS_LOADED:
        case MOVIE_RESULTS_LOADED:
            console.log("RESULTS_LOADED");
            console.log(action.payload)
            return {
                ...state,
                mediums: action.payload,
                resultsLoading: false,
            }
        case SERIES_RESULTS_LOADING:
        case MOVIE_RESULTS_LOADING:
            console.log("RESULTS_LOADING");
            return {
                ...state,
                resultsLoading: true,
            }
        case SEARCH_FAIL:
            console.log("SEARCH_FAIL");
            return {
                ...state,
                resultsLoading: false,
            }
        /* For getting media details  */
        case SERIES_LOADED:
        case MOVIE_LOADED:
            console.log("RESULT_LOADED");
            console.log(action.payload)
            return {
                ...state,
                mediumDetails: action.payload,
                detailResultLoading: false,
            }
        case SERIES_LOADING:
        case MOVIE_LOADING:
            console.log("RESULT_LOADING");
            return {
                ...state,
                detailResultLoading: true,
            }
        case MEDIA_DETAILS_FAIL:
            console.log("MEDIA_DETAILS_FAIL");
            return {
                ...state,
                detailResultLoading: false,
            }
        /* For getting list details */
        case HW_LIST_DETAILS_LOADED:
            return {
                ...state,
                hwListDetails: action.payload,
                detailResultLoading: false,
            }
        case WTW_LIST_DETAILS_LOADED:
            return {
                ...state,
                wtwListDetails: action.payload,
                detailResultLoading: false,
            }
        case LIST_DETAILS_LOADING:
            return {
                ...state,
                detailResultLoading: true,
            }
        case LIST_DETAILS_FAIL:
            return {
                ...state,
                detailResultLoading: false,
            }

        default:
            return state
    }
}
