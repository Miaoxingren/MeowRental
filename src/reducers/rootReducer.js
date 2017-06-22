import { combineReducers } from 'redux';
import edit from './edit.reducer';

const rootReducer = combineReducers({
	history: edit,
    single: edit,
    preview: edit
});

export default rootReducer;
