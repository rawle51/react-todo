import { tasks as initialState } from '../../data';

export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const EDIT = 'EDIT';
export const COMPLETE = 'COMPLETE';
export const REORDER = 'REORDER';

let nextId = initialState.length + 1;

export const addTaskAction = title => ({
  type: ADD,
  title,
  id: nextId += 1,
});

export const deleteTasklAction = id => ({
  type: DELETE,
  id,
});

export const completeTaskAction = id => ({
  type: COMPLETE,
  id,
});

export const editTaskAction = (id, title) => ({
  type: EDIT,
  id,
  title,
});

export const reorderAction = list => ({
  type: REORDER,
  list,
});
