import {createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';

import rootReducer from './root-reducer';
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;