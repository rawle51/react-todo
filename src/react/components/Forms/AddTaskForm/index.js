import React, { useState, memo } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import { Button, Input } from '../../FormElements';
import { useToggle } from '../../../hooks/useToggle';
import { addTaskAction } from '../../../store/actions';

export const Component = memo(({ addTaskAction: onAdd }) => {
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
          <Input
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
        onClick={toggleHandler}
        isShadow
      >
        {isOpen ? 'Hide form' : '+ Add task'}
      </Button>
    </div>
  );
});

Component.propTypes = {
  addTaskAction: func.isRequired,
};

export const AddTaskForm = connect(
  null,
  {
    addTaskAction,
  },
)(Component);
