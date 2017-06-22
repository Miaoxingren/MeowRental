import * as types from './actionTypes';

export function editSingle(key, val) {
	return {
		type: types.VIEW_LATEST,
	};
}

export function retrieveByDate(date) {
	return {
        type: types.VIEW_BY_DATE,
		date
	};
}
