import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';

import { EditTask } from '../../Forms';
import * as Styled from './Style';

const CustomCheckbox = withStyles({
  root: {
    color: '#421744',
  },
})(props => <Checkbox color="default" {...props} />);

export const Task = ({ id, index, title, completed, onDelete, onChangeStatus, onTaskEdit }) => {
  const [editMode, setEditMode] = useState(false);
  const [newTitle, handleCange] = useState(title);

  const handleSubmit = () => {
    onTaskEdit(id, newTitle);
    setEditMode(false);
  };

  return editMode ?
    <EditTask
      onClick={handleSubmit}
      onChange={e => handleCange(e.target.value)}
      title={newTitle}
    /> :
    <Draggable draggableId={id.toString()} index={index}>
      {provided => (
        <Styled.Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <FormControlLabel
            control={
              <CustomCheckbox checked={completed} onChange={() => onChangeStatus(id)} />
            }
            label={newTitle}
          />
          <EditRoundedIcon htmlColor="#421744" onClick={() => setEditMode(true)} />
          <DeleteOutlineRoundedIcon htmlColor="#421744" onClick={() => onDelete(id)} />
        </Styled.Container>
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
