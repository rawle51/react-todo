import { combineReducers } from 'redux';
import tasks from './tasks';
import search from './search';
import filter from './filter';
import title from './title';

const reduser = combineReducers({
  tasks,
  filter,
  search,
  title,
});

export default reduser;
