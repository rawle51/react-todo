import { combineReducers } from 'redux';
import task from './task.js';
import search from './search.js';
import filter from './filter.js';
import title from './title';

const reduser = combineReducers({
  task,
  filter,
  search,
  title,
});

export default reduser;
