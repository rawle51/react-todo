const getFilteredTasks = (tasks, filter) => {
  switch(filter) {
    case "ALL":
      return tasks;
    case "COMPLETED":
      return tasks.filter(t => t.completed);
    case "UNCOMPLETED":
      return tasks.filter(t => !t.completed);
    default: return tasks;
  }
}

export default getFilteredTasks;
