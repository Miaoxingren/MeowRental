import * as types from './actionTypes';
import initialState from './initialState';
import {Alert} from 'react-native';
import lang from '../modules/lang';

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

function history(state = initialState.history, action) {
    switch (action.type) {

        case types.HISTORY_PUSH_LATEST:
            let latest = {data: action.data, date: action.date};
            if (state && state.length && state[state.length - 1].date === action.date) {
                return [
                    ...state.slice(0, -1),
                    latest
                ];
            }
            return [
                ...state,
                latest
            ];
        case types.HISTORY_SAVE_MONTH:
            let dataStr = formatAsCSV(action.data, action.date);
            saveAsFile(dataStr, action.date);
            return state;
        case types.HISTORY_SAVE_FLAT:
            saveByFlat(state);
            return state;
        default:
            return state;
    }
}

const saveByFlat = (history) => {
    let flats = {};
    let heads = [
        lang.date,
        lang.house,
        lang.manage,
        lang.net,
        lang.waterL,
        lang.waterT,
        lang.waterUse,
        lang.water,
        lang.powerL,
        lang.powerT,
        lang.powerUse,
        lang.power,
        lang.total
    ];
    for (let month of history) {
        for (let flat of month.data) {
            flats[flat.title] = flats[flat.title] || flat.title + '\n';
            flats[flat.title] += formatFlat(flat, month.date);
        }
    }
    for (let [key, val] of Object.entries(flats)) {
        saveAsFile(val, key);
    }
}

const formatFlat = (flat, date) => {
    let result ='';
    let {
        rented,
        rental,
    } = flat;
    let {
        waterL,
        waterT,
        waterUse,
        water,
        powerL,
        powerT,
        powerUse,
        power,
        house,
        manage,
        net,
    } = rental;
    let total = rented ? water + power + house + manage + net : 0;
    let row = [
        date,
        house,
        manage,
        net,
        waterL,
        waterT,
        waterUse,
        water,
        powerL,
        powerT,
        powerUse,
        power,
        total,
    ];
    result += row.join(seperator) + '\n';
    return result;
};

const seperator = ',';
const formatAsCSV = (data, date) => {
    let result = date + '\n';
    let heads = [
        lang.flat,
        lang.house,
        lang.manage,
        lang.net,
        lang.waterL,
        lang.waterT,
        lang.waterUse,
        lang.water,
        lang.powerL,
        lang.powerT,
        lang.powerUse,
        lang.power,
        lang.total
    ];
    result += heads.join(seperator) + '\n';
    for (let flat of data) {
        let {
            title,
            key,
            rented,
            rental,
        } = flat;
        let {
            waterL,
            waterT,
            waterUse,
            water,
            powerL,
            powerT,
            powerUse,
            power,
            house,
            manage,
            net,
        } = rental;
        let total = rented ? water + power + house + manage + net : 0;
        let row = [
            title,
            house,
            manage,
            net,
            waterL,
            waterT,
            waterUse,
            water,
            powerL,
            powerT,
            powerUse,
            power,
            total,
        ];
        result += row.join(seperator) + '\n';
    }
    return result;
};

const RNFS = require('react-native-fs');
const saveAsFile = (dataStr, filename) => {
    let path = RNFS.ExternalDirectoryPath + '/' + filename + '.csv';

    RNFS.writeFile(path, dataStr, 'utf8')
        .then((success) => {
            Alert.alert('File saved!', path);
        })
        .catch((err) => {
            Alert.alert('Error!', err.message);
        });
};

function preview(state = initialState.preview, action) {
    let pos = getPosByFlat(state, action.flat);
    switch (action.type) {
        case types.EDIT_RENTAL_RENTED:
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
            if (pos === undefined) return state;
            let modification = getModification(action, state[pos]);
            return [
                ...state.slice(0, pos),
                modification,
                ...state.slice(pos+1),
            ];
        case types.EDIT_ADD_FLAT:
            if (pos !== undefined) {
                return state;
            }
            return insertFlat(state, action.flat);
        case types.EDIT_REMOVE_FLAT:
            if (pos === undefined) return state;
            return [
                ...state.slice(0, pos),
                ...state.slice(pos+1),
            ];
        default:
            return state;
    }
}

const insertFlat = (flats, flat) => {
    let result = [
        ...flats,
        {
            title: flat,
            key: flat,
            rented: false,
            rental: {
                waterL: 0,
                waterT: 0,
                waterUse: 0,
                water: 0,
                powerL: 0,
                powerT: 0,
                powerUse: 0,
                power: 0,
                house: 0,
                manage: 20,
                net: 50
            }
        }
    ];
    result.sort((a, b) => a.title-b.title);
    return result;
};

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
        case types.EDIT_RENTAL_RENTED:
            return {
                ...flat,
                rented: val,
                rental: {
                    ...flat.rental,
                }
            };
        case types.EDIT_RENTAL_WATERL:
            waterL = val;
            waterUse = Math.max(parseInt(waterT) - parseInt(waterL), 1);
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
            waterUse = Math.max(parseInt(waterT) - parseInt(waterL), 1);
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
            powerUse = Math.max(parseInt(powerT) - parseInt(powerL), 1);
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
            powerUse = Math.max(parseInt(powerT) - parseInt(powerL), 1);
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
            return parseInt(index);
        }
    }
}

export {single, history, preview};
