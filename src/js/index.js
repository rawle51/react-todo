import React from 'react';
import ReactDOM from 'react-dom';

import '../scss/main.scss';
import Root from './Root.jsx';
import { store } from './store.js';

ReactDOM.render(<Root store={store} />, document.getElementById('root'));