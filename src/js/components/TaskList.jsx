import React, { Fragment } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Task from './Task.jsx';

import getFilteredTasks from '../utils/getFilteredTasks.js';
import reorder from '../utils/reorder.js';

class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    if(!result.destination) {
      return;
    }

    const newList = reorder(this.props.taskList, result.source.index, result.destination.index);
    return this.props.onReodrer(newList);
  }
  render() {
    const filtered = getFilteredTasks(this.props.taskList, this.props.activeFilter);
    return(
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="tasklist">
        {(provided) => (
          <Fragment>
            <section ref={provided.innerRef} className="checklist">
              {filtered.map((task, index) => 
                  <Task 
                      key={task.id}
                      index={index}
                      id={task.id}
                      title={task.title}
                      completed={task.completed}
                      onStatusChange={this.props.onStatusChange}
                      onTaskDelete={this.props.onTaskDelete}
                      onTaskEdit={this.props.onTaskEdit}
                  />)
              }
            </section>
            <button onClick={this.props.addDefaultTodos}>Get async action</button>
          </Fragment>
        )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default TaskList;