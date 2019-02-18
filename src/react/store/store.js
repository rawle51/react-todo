import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reduser from './reducers/index';
import middlewares from './../middlewares/index';
import initialState from './data';

// import { getTitleFromLocalStorage } from './../middlewares/local-storage';
// const persistantState = Object.assign({}, initialState, { title: getTitleFromLocalStorage('title') })

export const store = createStore(reduser, initialState, composeWithDevTools(middlewares));