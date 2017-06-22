import * as types from './actionTypes';

export function editSingle(key, val) {
	return {
		type: types['EDIT_SINGLE_' + key.toUpperCase()] || types.EDIT_DEFAULT,
        val,
	};
}

export function retrieveByDate(date) {
	return {
        type: types.VIEW_BY_DATE,
		date
	};
}
