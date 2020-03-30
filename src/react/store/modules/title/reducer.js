import { ADD_TITLE } from './actions';

const initialState = 'My todo list';

export const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TITLE:
      return action.title;
    default: return state;
  }
};
