import React from 'react';
import { connect } from 'react-redux';
import { func, string, bool, number, arrayOf, shape } from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { Task } from './Task';
import {
  reorderAction, deleteTasklAction, completeTaskAction, editTaskAction,
} from '../../store/modules/tasks/actions';
import { getFilteredTasks } from '../../selectors/tasks-selector';
import { reorder } from '../../helpers/todo-helpers';
import * as Styled from './Style';

const Component = ({ tasks, onDelete, onChangeStatus, onTaskEdit, onTasksReorder }) => {
  const onDragEnd = ({ destination, source }) => {
    if (!destination) {
      return;
    }

    const reorderedList = reorder(tasks, source.index, destination.index);
    onTasksReorder(reorderedList);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="tasklist">
        {provided => (
          <Styled.List ref={provided.innerRef}>
            {tasks.map(({ id, title, completed }, index) => (
              <Task
                key={id}
                index={index}
                id={id}
                title={title}
                completed={completed}
                onChangeStatus={onChangeStatus}
                onDelete={onDelete}
                onTaskEdit={onTaskEdit}
              />
            ))
            }
            {provided.placeholder}
          </Styled.List>
      )}
      </Droppable>
    </DragDropContext>
  );
};

export default connect(
  ({ tasks, filter }) => (
    { tasks: getFilteredTasks({ tasks, filter }) }
  ),
  dispatch => ({
    onTasksReorder: tasks => dispatch(reorderAction(tasks)),
    onDelete: id => dispatch(deleteTasklAction(id)),
    onChangeStatus: id => dispatch(completeTaskAction(id)),
    onTaskEdit: (id, title) => dispatch(editTaskAction(id, title)),
  }),
)(Component);

Component.defaultProps = {
  tasks: [],
};

Component.propTypes = {
  tasks: arrayOf(shape({
    id: number.isRequired,
    completed: bool.isRequired,
    title: string.isRequired,
  })),
  onDelete: func.isRequired,
  onChangeStatus: func.isRequired,
  onTaskEdit: func.isRequired,
  onTasksReorder: func.isRequired,
};
