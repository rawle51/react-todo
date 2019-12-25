import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Draggable } from 'react-beautiful-dnd';
import TaskForm from './TaskForm';
import { Button, Checkbox } from '../FormElements';

const Task = ({ id, index, title, completed, onDelete, onChangeStatus, onTaskEdit }) => {
  const [editMode, setEditMode] = useState(false);
  const [newTitle, handleCange] = useState(title);

  const handleSubmit = () => {
    onTaskEdit(id, newTitle);
    setEditMode(false);
  };

  return editMode ?
    <TaskForm
      onClick={handleSubmit}
      onChange={e => handleCange(e.target.value)}
      title={newTitle}
    /> :
    <Draggable draggableId={id.toString()} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="checklist__item"
        >
          <Checkbox checked={completed} onChange={() => onChangeStatus(id)} />
          <span className={classNames('checklist__item-title', { completed })}>{newTitle}</span>
          <Button className="edit icon" icon="edit" type="button" onClick={() => setEditMode(true)} />
          <Button className="delete icon" icon="delete" type="button" onClick={() => onDelete(id)} />
        </div>
      )}
    </Draggable>;
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
  onTaskEdit: PropTypes.func.isRequired,
};

export default Task;
