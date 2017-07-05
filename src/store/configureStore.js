
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

import {autoRehydrate} from 'redux-persist'

let middleware = [autoRehydrate(), thunk];

export default function configureStore(initialState) {
	return createStore(
		rootReducer,
		initialState,
		autoRehydrate()
	);
}
