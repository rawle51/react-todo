import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useToggle from '../hooks/useToggle';
import Button from './form-elements/Button';
import TextInput from './form-elements/TextInput';

const AddForm = ({ onAdd }) => {
  const { isOpen, toggleHandler } = useToggle(false);
  const [title, changeTitle] = useState('');

  const addTaskHandler = () => {
    if (title) {
      onAdd(title);
      toggleHandler();
      changeTitle('');
    }
  };

  return (
    <div>
      {isOpen &&
        <div className="app-form app-form--add justify-between">
          <TextInput
            className="app-form__input app-form__input--wide"
            onChange={e => changeTitle(e.target.value)}
            placeholder="Example: Visit United States in 2020"
            value={title}
          />
          <Button
            className="app-form__btn link"
            type="submit"
            onClick={addTaskHandler}
          >
            Add
          </Button>
        </div>
      }
      <Button
        className="app-form__add-btn link link--shadow"
        onClick={toggleHandler}
        type="text"
      >
        {isOpen ? 'Hide form' : '+ Add task'}
      </Button>
    </div>
  );
};

AddForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
  // toggleHandler: PropTypes.func.isRequired,
  // toggle: PropTypes.bool.isRequired,
};

export default AddForm;
