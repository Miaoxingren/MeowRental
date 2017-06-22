import { combineReducers } from 'redux';
import {single, history, preview} from './edit.reducer';

const rootReducer = combineReducers({
    single: single,
	history: history,
    preview: preview,
});

export default rootReducer;
