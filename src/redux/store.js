import {createStore} from "redux";
// import logger from 'redux-logger';
import {persistStore} from "redux-persist";

import rootReducer from './root-reducer';
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// const middlewares = [logger];

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const persistor = persistStore(store);

export default (store, persistor);