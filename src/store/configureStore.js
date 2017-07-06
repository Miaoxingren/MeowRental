
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';

import {autoRehydrate} from 'redux-persist'

export default function configureStore(initialState) {
	return createStore(
		rootReducer,
		initialState,
		autoRehydrate()
	);
}
