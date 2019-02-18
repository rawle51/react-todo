import initialState from './../data';

export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const EDIT = 'EDIT';
export const COMPLETE = 'COMPLETE';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'; 

export let nextId = initialState.tasks.length + 1;

export function addTaskAction(title) {
  return {
    type: ADD,
    title,
    id: nextId++
  }
}

export function deleteTasklAction(id) {
  return {
    type: DELETE,
    id
  }
}

export function completeTaskAction(id) {
  return {
    type: COMPLETE,
    id
  }
}

export const editTaskAction = (id, title) => {
  return {
    type: EDIT,
    id,
    title
  }
}

const mockTodo = [
  {
    id : nextId++,
    title : "Learn redux middleware",
    completed : true
  },
  {
    id : nextId++,
    title : "Learn redux thunk",
    completed : true
  },
  
]

export const getDefaultTodoTasks = () => dispatch => {
  setTimeout(() => {
    dispatch({
      type: FETCH_DATA_SUCCESS,
      payload: mockTodo,
    })
  }, 1000);
};