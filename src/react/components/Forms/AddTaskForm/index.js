import React, { useState, memo } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import PlaylistAddRoundedIcon from '@material-ui/icons/PlaylistAddRounded';

import { Button, Input } from '../../FormElements';
import { useToggle } from '../../../hooks/useToggle';
import { addTaskAction } from '../../../store/modules/tasks/actions';
import * as Styled from './Style';

export const Component = memo(({ addTaskAction: onAdd }) => {
  const { isOpen, toggleHandler } = useToggle(false);
  const [title, changeTitle] = useState('');

  const onToggle = () => {
    changeTitle('');
    toggleHandler();
  };

  const addTaskHandler = () => {
    if (title) {
      onAdd(title);
      onToggle();
    }
  };

  return (
    <div>
      {isOpen &&
        <Styled.Container>
          <Input
            onChange={e => changeTitle(e.target.value)}
            placeholder="Example: Visit United States in 2020"
            value={title}
          />
          <PlaylistAddRoundedIcon htmlColor="#421744" onClick={addTaskHandler} />
        </Styled.Container>
      }
      <Button
        onClick={onToggle}
        isShadow
      >
        {isOpen ? 'Hide form' : 'Add task'}
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
