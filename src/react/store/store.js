import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './modules';
import { middlewares } from './middlewares';

// import { getTitleFromLocalStorage } from './../middlewares/local-storage';
// const persistantState = Object.assign({}, initialState, { title: getTitleFromLocalStorage('title') })

export const store = createStore(rootReducer, composeWithDevTools(middlewares));
