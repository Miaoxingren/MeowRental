import * as types from './actionTypes';
import {Alert} from 'react-native';

export function editSingle(type, val) {
	return {
		type: types['EDIT_SINGLE_' + type.toUpperCase()] || types.EDIT_DEFAULT,
        val,
	};
}

export function editRental(flat, type, val, price) {
	return {
		type: types['EDIT_RENTAL_' + type.toUpperCase()] || types.EDIT_DEFAULT,
        flat,
        val,
        price
	};
}

export function generateLatest(data) {
	return {
		type: types.HISTORY_PUSH_LATEST,
        data,
        date: new Date().toISOString().substr(0, 7),
	};
}

export function saveByMonth(data, date) {
    return {
        type: types.HISTORY_SAVE_MONTH,
        data,
        date,
    }
}

export function saveByFlat() {
    return {
        type: types.HISTORY_SAVE_FLAT,
    }
}
