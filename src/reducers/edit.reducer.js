import * as types from './actionTypes';
import initialState from './initialState';

export default function(state = initialState, action) {
    switch (action.type) {

        case types.EDIT_SINGLE:
            return {
                ...state,
                date: state.rental[state.rental.length - 1].date
            };

        case types.EDIT_RENTAL:
            return {
                ...state,
                date: action.date
            };

        case types.EDIT_WATER:
            return {
                ...state,
                date: state.rental[state.rental.length - 1].date
            };

        case types.EDIT_POWER:
            return {
                ...state,
                date: action.date
            };
        default:
            return state;
    }
}
