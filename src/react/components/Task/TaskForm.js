import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../form-elements/TextInput';
import Button from '../form-elements/Button';

const TaskForm = ({ onClick, onChange, title }) => (
  <div className="edit-form">
    <TextInput className="edit-form__input" onChange={onChange} value={title} />
    <Button className="done icon" icon="save" type="submit" onClick={onClick} />
  </div>
);

TaskForm.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default TaskForm;
