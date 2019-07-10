import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import appReducer from "./appReducer";

export default () => combineReducers({
    app: appReducer
})