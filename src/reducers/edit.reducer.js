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
            saveAsFile();
            let latest = generateHistory(action.data, action.date);
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
            let str = formatAsCSV(action.data, action.date);
            saveAsFile(str, action.date);
            return state;
        default:
            return state;
    }
}

const getFloorNum = (flatNum) => {
    return flatNum[0] || '0';
};

const generateHistory = (data, date) => {
    let floors = [];
    for (let flat of data) {
        let floorNum = getFloorNum(flat.title);
        let floor = floors[floorNum];
        if (!floor) {
            floor = floors[floorNum] = [];
        }
        floor.push(flat);
    }
    let result = [];
    for (let [index, floor] of Object.entries(floors)) {
        result.push({
            data: floor,
            key: index
        });
    }
    return {data: result, date};
}

const formatAsCSV = (flats, date) => {
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
    result += heads.join(',') + '\n';
    for (let flat of flats) {
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
        result += row.join(',') + '\n';
    }
    return result;
};

const RNFS = require('react-native-fs');
const saveAsFile = (dataStr, fileName) => {

    let path = RNFS.ExternalDirectoryPath + '/' + fileName + '.csv';

    RNFS.writeFile(path, dataStr, 'utf8')
        .then((success) => {
            Alert.alert('FILE WRITTEN!', path);
        })
        .catch((err) => {
            Alert.alert('Error', err.message);
        });
};

function preview(state = initialState.preview, action) {
    let pos = getPosByFlat(state, action.flat);
    if (pos === undefined) return state;
    let modification = getModification(action, state[pos]);
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
