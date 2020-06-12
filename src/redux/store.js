import {applyMiddleware, createStore} from "redux";
import logger from 'redux-logger';
import {persistStore} from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from './root-reducer';

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const middlewares = [thunk];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const persistor = persistStore(store);

export default (store, persistor);