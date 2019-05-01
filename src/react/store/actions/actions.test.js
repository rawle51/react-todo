import {
  nextId,
  ADD_TITLE,
  FILTER,
  REORDER,
  SEARCH,
  ADD,
  DELETE,
  EDIT,
  COMPLETE,
  reorderAction,
  addTitleAction,
  filterAction,
  searchTasksAction,
  addTaskAction,
  deleteTasklAction,
  completeTaskAction,
  editTaskAction,
} from './actions';

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

  it('test search action', () => {
    const search = 'Learn Jest';
    const expectedAction = {
      type: SEARCH,
      search,
    };
    expect(searchTasksAction(search)).toEqual(expectedAction);
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
    const id = nextId;
    const expectedAddAction = {
      type: ADD,
      title,
      id,
    };

    const expectedEditAction = {
      type: EDIT,
      id,
      title,
    };

    expect(addTaskAction(title)).toEqual(expectedAddAction);
    expect(editTaskAction(id, title)).toEqual(expectedEditAction);
  });
});
