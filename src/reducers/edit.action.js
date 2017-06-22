import * as types from './actionTypes';

export function retrieveLatest() {
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
