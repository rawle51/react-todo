import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { LabledTextInput } from '../../FormElements';
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

  if (isRedirect) return <Redirect to="/todos" />;

  return (
    <Styled.InputContainer>
      <LabledTextInput
        name="todo-title"
        label="Your title"
        value={title}
        onChange={onChange}
        id="todo-title"
      />
      {isError && (
        <Styled.Error>Ooops..to continue fill the title</Styled.Error>
      )}
      <Styled.CreateButton
        onClick={handleSubmit}
        isShadow
        id="button-crete-title"
      >
        Create
      </Styled.CreateButton>
    </Styled.InputContainer>
  );
};

HomeForm.propTypes = {
  addTitleAction: PropTypes.func.isRequired,
};
