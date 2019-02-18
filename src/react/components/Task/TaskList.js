import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Task from './Task';
import { getFilteredTasks, reorder } from '../../helpers/todo-helpers';

const TaskList =({ tasks, filter, onDelete, onChangeStatus, onTaskEdit, onTasksReorder }) => {
  const onDragEnd = ({ destination, source }) => {
    if(!destination) {
      return;
    }

    const reorderedList = reorder(tasks, source.index, destination.index)
    return onTasksReorder(reorderedList);
  }

  const filtered = getFilteredTasks(tasks, filter);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tasklist">
        {provided => (
          <section ref={provided.innerRef} className="checklist">
            {filtered.map(({ id, title, completed }, index) => 
                <Task 
                    key={id}
                    index={index}
                    id={id}
                    title={title}
                    completed={completed}
                    onChangeStatus={onChangeStatus}
                    onDelete={onDelete}
                    onTaskEdit={onTaskEdit}
                />)
            }
          </section>
        )}
        </Droppable>
      </DragDropContext>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
  })),
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
  onTaskEdit: PropTypes.func.isRequired,
  onTasksReorder: PropTypes.func.isRequired,
};

export default TaskList;
