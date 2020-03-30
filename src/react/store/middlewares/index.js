import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import localStorageMiddleware from './local-storage';
// import { TASK_LIST } from './../constants/index';

const sagaMiddleware = createSagaMiddleware();

export const middlewares = applyMiddleware(
  thunk,
  sagaMiddleware,
  // localStorageMiddleware([TASK_LIST, 'title']),
);
