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

		default:
			return state;
	}
}
