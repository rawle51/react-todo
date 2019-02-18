import { SEARCH } from './../actions/actions.js';

function search(state = '', action) {
  switch(action.type) {
    case SEARCH:
      return action.name;

    default: return state;
  }
}

export default search;