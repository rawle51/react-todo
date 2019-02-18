import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { applyMiddleware } from 'redux';
import localStorage from './local-storage';

export default applyMiddleware(
  thunk,
  localStorage('todos'),
  logger
);
