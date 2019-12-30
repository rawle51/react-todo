import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './react/App';
import { store } from './react/store/store';

const root = document.getElementById('root');

createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
