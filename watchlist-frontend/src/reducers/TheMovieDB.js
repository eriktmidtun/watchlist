import {
    MOVIE_RESULTS_LOADED,
    MOVIE_RESULTS_LOADING,
    SERIES_RESULTS_LOADED,
    SERIES_RESULTS_LOADING,
    SEARCH_FAIL
} from "../actions/types";

const initialState = {
    isLoading: false,
    input: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SERIES_RESULTS_LOADED:
        case MOVIE_RESULTS_LOADED:
            console.log("RESULTS_LOADED");
            return {
                ...state,
                isLoading: false,
                input: null
            }
        case SERIES_RESULTS_LOADING:
        case MOVIE_RESULTS_LOADING:
            console.log("RESULTS_LOADING");
            return {
                ...state,
                isLoading: true,
                input: localStorage.getItem("keyword")
            }
        case SEARCH_FAIL:
            console.log("SEARCH_FAIL");
            return {
                state
            }
    }
}
