import {
  ADD_TITLE,
  FILTER,
  REORDER,
  ADD,
  DELETE,
  EDIT,
  COMPLETE,
  reorderAction,
  addTitleAction,
  filterAction,
  addTaskAction,
  deleteTasklAction,
  completeTaskAction,
  editTaskAction,
} from './actions';

import initialState from '../data';

describe('actions', () => {
  it('test title action', () => {
    const title = 'My react todo';
    const expectedAction = {
      type: ADD_TITLE,
      title,
    };
    expect(addTitleAction(title)).toEqual(expectedAction);
  });

  it('test filter action', () => {
    const filter = 'COMPLETED';
    const expectedAction = {
      type: FILTER,
      filter,
    };
    expect(filterAction(filter)).toEqual(expectedAction);
  });

  it('test reorder action', () => {
    const list = [{ id: 1, title: 'Learn React' }, { id: 2, title: 'Learn Redux' }];
    const expectedAction = {
      type: REORDER,
      list,
    };
    expect(reorderAction(list)).toEqual(expectedAction);
  });

  it('test complete/delete actions', () => {
    const id = 51;
    const expectedDeleteAction = {
      type: DELETE,
      id,
    };
    const expectedCompleteAction = {
      type: COMPLETE,
      id,
    };
    expect(deleteTasklAction(id)).toEqual(expectedDeleteAction);
    expect(completeTaskAction(id)).toEqual(expectedCompleteAction);
  });

  it('test add/edit actions', () => {
    const title = 'Test add && delete actions';
    let nextId = initialState.tasks.length + 1;
    const expectedAddAction = {
      type: ADD,
      title,
      id: nextId += 1,
    };

    const expectedEditAction = {
      type: EDIT,
      id: nextId,
      title,
    };

    expect(addTaskAction(title)).toEqual(expectedAddAction);
    expect(editTaskAction(nextId, title)).toEqual(expectedEditAction);
  });
});
