import {
 ADD, DELETE, EDIT, COMPLETE, REORDER, FETCH_DATA_SUCCESS,
} from '../actions/actions';
import initialState from '../data';

function tasks(state = initialState.tasks, action) {
  switch (action.type) {
    case ADD: {
      const task = {
        id: action.id,
        title: action.title,
        completed: false,
      };

      return [...state, task];
    }

    case DELETE:
      return state.filter(task => task.id !== action.id);

    case EDIT:
      return state.map((task) => {
        if (task.id === action.id) {
          return Object.assign({}, task, { title: action.title });
        }
        return task;
      });

    case COMPLETE:
      return state.map((task) => {
        if (task.id === action.id) {
          return Object.assign({}, task, { completed: !task.completed });
        }
        return task;
      });

    case REORDER:
      return action.list;

    case FETCH_DATA_SUCCESS:
      return [...state, ...action.payload];

    default: return state;
  }
}

export default tasks;
