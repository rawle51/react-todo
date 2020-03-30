import { FILTER } from './actions';

const initialState = 'ALL';

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER:
      return action.filter;
    default: return state;
  }
};
