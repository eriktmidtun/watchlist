import {
    MOVIE_RESULTS_LOADED,
    MOVIE_RESULTS_LOADING,
    SERIES_RESULTS_LOADED,
    SERIES_RESULTS_LOADING,
    SEARCH_FAIL
} from "../actions/types";

const initialState = {
    resultsLoading: false,
};

export default function(state = initialState, action) {
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
                resultsLoading: false,
                ...state,
            }
        default:
            return state
    }
}
