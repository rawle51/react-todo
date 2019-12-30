import initialState from '../data';
import { FILTER } from '../actions';

function filter(state = initialState.filter, action) {
  switch (action.type) {
    case FILTER:
      return action.filter;
    default: return state;
  }
}

export default filter;
