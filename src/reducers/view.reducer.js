import * as types from './actionTypes';
import initialState from './initialState';

export default function (state = initialState, action) {
	switch (action.type) {

        case types.VIEW_LATEST:
            return {
                ...state,
                date: state.rental[state.rental.length - 1].date
            };

		case types.VIEW_BY_DATE:
			return {
				...state,
				date: action.date
			};

		case types.RETRIEVE_MOVIES_GENRES_SUCCESS:
			return {
				...state,
				genres: action.moviesGenres
			};

		case types.RETRIEVE_MOVIES_LIST_SUCCESS:
			return {
				...state,
				list: action.list
			};

		case types.RETRIEVE_MOVIE_DETAILS_SUCCESS:
			return {
				...state,
				details: action.details
			};

		case types.RETRIEVE_MOVIES_SEARCH_RESULT_SUCCESS:
			return {
				...state,
				searchResults: action.searchResults
			};
		default:
			return state;
	}
}
