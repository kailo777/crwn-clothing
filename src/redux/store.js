import {applyMiddleware, createStore} from "redux";
import logger from 'redux-logger';
import {persistStore} from "redux-persist";
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./root-saga";
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);