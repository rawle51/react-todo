import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { LabledTextInput } from '../../FormElements';
import { routes } from '../../../../routes';
import * as Styled from './Style';

export const HomeForm = ({ addTitleAction }) => {
  const [state, setState] = useState({
    title: '',
    isRedirect: false,
    isError: false,
  });
  const { title, isRedirect, isError } = state;

  const onChange = e => setState({ title: e.target.value });

  const handleSubmit = () => {
    if (title) {
      addTitleAction(title);
      return setState({ isRedirect: true });
    }

    return setState(prevState => ({ ...prevState, isError: true }));
  };

  if (isRedirect) return <Redirect to={routes.todos} />;

  return (
    <Styled.InputContainer>
      <LabledTextInput
        name="todo-title"
        label="Name your task list"
        value={title}
        onChange={onChange}
      />
      {isError && (
        <Styled.Error>Ooops..to continue fill the title</Styled.Error>
      )}
      <Styled.CreateButton
        onClick={handleSubmit}
        isShadow
      >
        Create
      </Styled.CreateButton>
    </Styled.InputContainer>
  );
};

HomeForm.propTypes = {
  addTitleAction: PropTypes.func.isRequired,
};
