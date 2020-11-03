import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

// import localStorageMiddleware from './local-storage';
// import { TASK_LIST } from './../constants/index';

export const middlewares = applyMiddleware(
  thunk,
  // localStorageMiddleware([TASK_LIST, 'title']),
);
