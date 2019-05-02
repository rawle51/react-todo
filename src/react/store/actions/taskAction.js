import initialState from '../data';

export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const EDIT = 'EDIT';
export const COMPLETE = 'COMPLETE';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

let nextId = initialState.tasks.length + 1;

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

export const getDefaultTodoTasks = list => dispatch => (
  setTimeout(() => {
    dispatch({
      type: FETCH_DATA_SUCCESS,
      list,
    });
  }, 1000)
);
