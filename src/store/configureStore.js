import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import logger from 'redux-logger';
import rootSaga from '../sagas/index';
import createSagaMiddleware from 'redux-saga';
import 'regenerator-runtime/runtime';


const sagaMiddleware = createSagaMiddleware();


export const store = createStore(countReducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);