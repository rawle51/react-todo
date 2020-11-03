import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './react/App';
import { store } from './react/store/store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
