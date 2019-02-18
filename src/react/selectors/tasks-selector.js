import { createSelector } from 'reselect'

const currentFilter = ({ filter }) => filter;
const getTodos = ({ tasks }) => tasks;

export const getFilteredTasks = createSelector(
  [getTodos, currentFilter],
  (tasks, filter) => {
    switch(filter) {
      case "ALL":
        return tasks;
      case "COMPLETED":
        return tasks.filter(t => t.completed);
      case "UNCOMPLETED":
        return tasks.filter(t => !t.completed);
      default: return tasks;
    };
  }
);
