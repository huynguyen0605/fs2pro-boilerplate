import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

import { createBrowserHistory } from 'history';

import {createStore, applyMiddleware, compose} from 'redux';
import { createStateSyncMiddleware} from 'redux-state-sync';

import createRootReducer from './store/reducers/rootReducer';
import actionTypes from './store/actions/actionTypes';

import config from './config';

const environment = process.env.NODE_ENV || "development";
const isDevelopment = environment === "development";

const reduxStateSyncConfig = {
    whitelist: [
        actionTypes.APP_START_UP_COMPLETE,
    ]
}

const rootReducer = createRootReducer();
const middleware = [
    thunkMiddleware,
    createStateSyncMiddleware(reduxStateSyncConfig),
]
if (isDevelopment) middleware.push(createLogger);

const composeEnhancers = (isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const reduxStore = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware)),
)

const dispatch = reduxStore.dispatch;

export const history = createBrowserHistory({ basename: config.app.ROUTER_BASE_NAME});

export default reduxStore;