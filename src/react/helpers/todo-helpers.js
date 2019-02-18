// maybe some refactoring some day
export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};


export const getFilteredTasks = (tasks, filter) => {
  switch(filter) {
    case "ALL":
      return tasks;
    case "COMPLETED":
      return tasks.filter(t => t.completed);
    case "UNCOMPLETED":
      return tasks.filter(t => !t.completed);
    default: return tasks;
  }
};
