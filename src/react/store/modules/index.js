import { combineReducers } from 'redux';

import { titleReducer } from './title';
import { filterReducer } from './filter';
import { tasksReducer } from './tasks';

export const rootReducer = combineReducers({
  title: titleReducer,
  filter: filterReducer,
  tasks: tasksReducer,
});
