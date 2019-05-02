import initialState from '../data';
import { ADD_TITLE } from '../actions/actions';

function title(state = initialState.title, action) {
  switch (action.type) {
    case ADD_TITLE:
      return action.title;
    default: return state;
  }
}

export default title;
