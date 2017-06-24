import * as types from './actionTypes';
import initialState from './initialState';
import {Alert} from 'react-native';

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
        default:
            return state;
    }
}

function preview(state = initialState.preview, action) {
    let pos = getPosByFlat(state, action.flat);
    if (pos === undefined) return state;
    let modification = getModification(action, state[pos]);
    switch (action.type) {
        case types.EDIT_RENTAL_WATERL:
        case types.EDIT_RENTAL_WATERT:
        case types.EDIT_RENTAL_WATERUSE:
        case types.EDIT_RENTAL_WATER:
        case types.EDIT_RENTAL_POWERL:
        case types.EDIT_RENTAL_POWERT:
        case types.EDIT_RENTAL_POWERUSE:
        case types.EDIT_RENTAL_POWER:
        case types.EDIT_RENTAL_HOUSE:
        case types.EDIT_RENTAL_MANAGE:
        case types.EDIT_RENTAL_NET:
            return [
                ...state.slice(0, pos),
                modification,
                ...state.slice(pos+1),
            ];
        default:
            return state;
    }
}

const getModification = (action, flat) => {
    let {type, val, price} = action;
    let {
        waterT,
        waterL,
        waterUse,
        water,
        powerL,
        powerT,
        powerUse,
        power,
    } = flat.rental;
    switch (type) {
        case types.EDIT_RENTAL_WATERL:
            waterL = val;
            waterUse = parseInt(waterT) - parseInt(waterL);
            water = Math.round(waterUse * price);
            return {
                ...flat,
                rental: {
                    ...flat.rental,
                    waterL,
                    waterT,
                    waterUse,
                    water,
                }
            };
        case types.EDIT_RENTAL_WATERT:
            waterT = val;
            waterUse = parseInt(waterT) - parseInt(waterL);
            water = Math.round(waterUse * price);
            return {
                ...flat,
                rental: {
                    ...flat.rental,
                    waterL,
                    waterT,
                    waterUse,
                    water,
                }
            };
        case types.EDIT_RENTAL_WATERUSE:
            return {
                ...flat,
                rental: {
                    ...flat.rental,
                    waterUse: val,
                }
            };
        case types.EDIT_RENTAL_WATER:
            return {
                ...flat,
                rental: {
                    ...flat.rental,
                    water: val,
                }
            };
        case types.EDIT_RENTAL_POWERL:
            powerL = val;
            powerUse = parseInt(powerT) - parseInt(powerL);
            power = Math.round(powerUse * price);
            return {
                ...flat,
                rental: {
                    ...flat.rental,
                    powerL,
                    powerT,
                    powerUse,
                    power,
                }
            };
        case types.EDIT_RENTAL_POWERT:
            powerT = val;
            powerUse = parseInt(powerT) - parseInt(powerL);
            power = Math.round(powerUse * price);
            return {
                ...flat,
                rental: {
                    ...flat.rental,
                    powerL,
                    powerT,
                    powerUse,
                    power,
                }
            };
        case types.EDIT_RENTAL_POWERUSE:
            return {
                ...flat,
                rental: {
                    ...flat.rental,
                    powerUse: val,
                }
            };
        case types.EDIT_RENTAL_POWER:
            return {
                ...flat,
                rental: {
                    ...flat.rental,
                    power: val,
                }
            };
        case types.EDIT_RENTAL_HOUSE:
            return {
                ...flat,
                rental: {
                    ...flat.rental,
                    house: val,
                }
            };
        case types.EDIT_RENTAL_MANAGE:
            return {
                ...flat,
                rental: {
                    ...flat.rental,
                    manage: val,
                }
            };
        case types.EDIT_RENTAL_NET:
            return {
                ...flat,
                rental: {
                    ...flat.rental,
                    net: val,
                }
            };
        default:
            return flat;
    }
}

const getPosByFlat = (flats, flatNum) => {
    for (let [index, flat] of Object.entries(flats)) {
        if (flat.title === flatNum) {
            return index - '';
        }
    }
}

export {single, history, preview};
