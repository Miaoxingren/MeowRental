import * as types from './actionTypes';
import initialState from './initialState';

function single(state = initialState.single, action) {
    switch (action.type) {
        case types.EDIT_SINGLE_WATER :
            return {
                ...state,
                water: action.val
            };
        case types.EDIT_SINGLE_POWER :
            return {
                ...state,
                power: action.val
            };
        case types.EDIT_SINGLE_NET :
            return {
                ...state,
                net: action.val
            };
        case types.EDIT_SINGLE_MANAGE :
            return {
                ...state,
                manage: action.val
            };
        default:
            return state;
    }
}

function history(state = initialState, action) {
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

function preview(state = initialState, action) {
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


export {single, history, preview};
