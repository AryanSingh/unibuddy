import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/index';
import logger from 'redux-logger';
import rootSaga from '../sagas/index';
import createSagaMiddleware from 'redux-saga';
import 'regenerator-runtime/runtime';


const sagaMiddleware = createSagaMiddleware();


export const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);