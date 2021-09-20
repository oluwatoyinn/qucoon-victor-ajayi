import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogger } from "redux-logger";
import persistedReducer from './reducers'
import {persistStore} from 'redux-persist'

const initialState = {};
const loggerMiddleware = createLogger()

const middleware = [thunk];

const composedEnhancer = composeWithDevTools(applyMiddleware(...middleware, loggerMiddleware))

export const store = createStore(
persistedReducer,
initialState,
composedEnhancer
);

export const persistor = persistStore(store)