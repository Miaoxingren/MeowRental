import { combineReducers } from 'redux';
import view from './view.reducer';
import edit from './edit.reducer';

const rootReducer = combineReducers({
	rental: view,
    single: edit
});

export default rootReducer;
