import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reduser from './reducers/index';
import middlewares from './middlewares/index';
import localStorage, { loadState }from './middlewares/local-storage';

const initialState = loadState('todos');

export const store = createStore(reduser, initialState, composeWithDevTools(middlewares));
