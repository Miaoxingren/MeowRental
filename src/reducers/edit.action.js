import * as types from './actionTypes';

export function editSingle(type, val) {
	return {
		type: types['EDIT_SINGLE_' + type.toUpperCase()] || types.EDIT_DEFAULT,
        val,
	};
}

export function editRental(flat, type, val) {
	return {
		type: types['EDIT_RENTAL_' + type.toUpperCase()] || types.EDIT_DEFAULT,
        flat,
        val,
	};
}
